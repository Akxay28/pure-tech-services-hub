import { createServerFn } from "@tanstack/react-start";
import { connectToDatabase } from "./mongodb";
import {
  ADMIN_SESSION_MAX_AGE_SECONDS,
  verifyPassword,
  createSessionToken,
  verifySessionToken,
} from "./auth";
import type { ObjectId as MongoObjectId } from "mongodb";
import { studies } from "./static-case-studies";
import { staticBlogs } from "./static-blogs";

const LOGIN_ATTEMPT_WINDOW_MS = 15 * 60 * 1000;
const LOGIN_LOCKOUT_MS = 5 * 60 * 60 * 1000;
const MAX_FAILED_LOGIN_ATTEMPTS = 3;
const CAPTCHA_VERIFY_URLS = {
  recaptcha: "https://www.google.com/recaptcha/api/siteverify",
  turnstile: "https://challenges.cloudflare.com/turnstile/v0/siteverify",
  hcaptcha: "https://hcaptcha.com/siteverify",
} as const;

type CaptchaProvider = keyof typeof CAPTCHA_VERIFY_URLS;
type CaptchaConfig = {
  enabled: boolean;
  provider: CaptchaProvider | "";
  siteKey: string;
};

type StoredCaptchaSettings = {
  _id: "captcha";
  provider: CaptchaProvider | "";
  siteKey: string;
  secretKey: string;
  updatedAt?: Date;
};

function getErrorSummary(error: unknown) {
  if (error instanceof Error) {
    return error.message.split("\n")[0];
  }
  return String(error);
}

function logFallbackWarning(message: string, error: unknown) {
  const summary = getErrorSummary(error);
  const key = `${message} ${summary}`;
  if (loggedFallbackWarnings.has(key)) return;
  loggedFallbackWarnings.add(key);
  console.warn(`${message} ${summary}`);
}

const loggedFallbackWarnings = new Set<string>();

async function getObjectIdClass(): Promise<typeof MongoObjectId> {
  const { ObjectId } = await import("mongodb");
  return ObjectId;
}

function formatDateToString(dateInput: Date | string) {
  const d = new Date(dateInput);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function toClientBlog(item: any) {
  const fallbackTitle = item.metaTitle || item.title;
  const fallbackDescription = item.metaDescription || item.excerpt;

  return {
    ...item,
    _id: item._id.toString(),
    metaTitle: fallbackTitle,
    metaDescription: fallbackDescription,
    metaKeywords: item.metaKeywords || "",
    views: Number(item.views || 0),
    status: item.status || "published",
    publishDate: item.publishDate ? new Date(item.publishDate).toISOString() : undefined,
    date: item.date || formatDateToString(item.createdAt || new Date()),
  };
}

function createSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function normalizeBlogData(data: any) {
  const slug = createSlug(data.slug || data.title || "");
  const metaTitle = String(data.metaTitle || data.title || "").trim();
  const metaDescription = String(data.metaDescription || data.excerpt || "").trim();
  const metaKeywords = String(data.metaKeywords || "")
    .split(",")
    .map((keyword) => keyword.trim())
    .filter(Boolean)
    .join(", ");

  if (!slug) throw new Error("URL slug is required.");
  if (!metaTitle) throw new Error("Meta title is required.");
  if (!metaDescription) throw new Error("Meta description is required.");
  if (!metaKeywords) throw new Error("Meta keywords are required.");

  return {
    ...data,
    slug,
    metaTitle,
    metaDescription,
    metaKeywords,
  };
}

async function seedBlogsIfEmpty(db: any) {
  const blogsCol = db.collection("blogs");
  await blogsCol.createIndex({ slug: 1 }, { unique: true });

  const count = await blogsCol.countDocuments();
  if (count > 0) return;

  const now = new Date();
  await blogsCol.insertMany(
    staticBlogs.map((blog) => ({
      ...blog,
      views: 0,
      createdAt: now,
      updatedAt: now,
    })),
  );
}

// Authentication check helper
async function verifyAdminAuth() {
  const { getCookie } = await import("@tanstack/react-start/server");
  const token = getCookie("pure_admin_session");
  if (!token) throw new Error("Unauthorized: No session token.");
  const payload = await verifySessionToken(token);
  if (!payload) throw new Error("Unauthorized: Invalid session token.");
  return payload;
}

async function getLoginAttemptKey(username: string) {
  const { getRequestHeader } = await import("@tanstack/react-start/server");
  const forwardedFor = getRequestHeader("x-forwarded-for")?.split(",")[0]?.trim();
  const ip =
    getRequestHeader("cf-connecting-ip") ||
    getRequestHeader("x-real-ip") ||
    forwardedFor ||
    "unknown";

  return `${username.toLowerCase()}:${ip}`;
}

function minutesUntil(date: Date) {
  return Math.max(1, Math.ceil((date.getTime() - Date.now()) / (60 * 1000)));
}

async function ensureLoginAttemptIndexes(db: any) {
  const loginAttemptsCol = db.collection("admin_login_attempts");
  await Promise.all([
    loginAttemptsCol.createIndex({ key: 1 }, { unique: true }),
    loginAttemptsCol.createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 }),
  ]);
  return loginAttemptsCol;
}

async function assertLoginAllowed(db: any, key: string) {
  const loginAttemptsCol = await ensureLoginAttemptIndexes(db);
  const attempt = await loginAttemptsCol.findOne({ key });

  if (attempt?.lockedUntil && attempt.lockedUntil.getTime() > Date.now()) {
    throw new Error(
      `Too many failed login attempts. Please try again in ${minutesUntil(
        attempt.lockedUntil,
      )} minutes.`,
    );
  }

  return loginAttemptsCol;
}

async function recordFailedLogin(db: any, key: string) {
  const loginAttemptsCol = await ensureLoginAttemptIndexes(db);
  const now = new Date();
  const expiresAt = new Date(now.getTime() + LOGIN_ATTEMPT_WINDOW_MS + LOGIN_LOCKOUT_MS);
  const attempt = await loginAttemptsCol.findOne({ key });
  const withinWindow =
    attempt?.firstFailedAt &&
    attempt.firstFailedAt.getTime() > now.getTime() - LOGIN_ATTEMPT_WINDOW_MS;
  const failedCount = withinWindow ? attempt.failedCount + 1 : 1;
  const lockedUntil =
    failedCount >= MAX_FAILED_LOGIN_ATTEMPTS
      ? new Date(now.getTime() + LOGIN_LOCKOUT_MS)
      : undefined;

  await loginAttemptsCol.updateOne(
    { key },
    {
      $set: {
        failedCount,
        firstFailedAt: withinWindow ? attempt.firstFailedAt : now,
        lastFailedAt: now,
        ...(lockedUntil ? { lockedUntil } : {}),
        expiresAt,
      },
      ...(!lockedUntil ? { $unset: { lockedUntil: "" } } : {}),
    },
    { upsert: true },
  );
}

async function clearFailedLogins(db: any, key: string) {
  const loginAttemptsCol = await ensureLoginAttemptIndexes(db);
  await loginAttemptsCol.deleteOne({ key });
}

async function getClientIp() {
  const { getRequestHeader } = await import("@tanstack/react-start/server");
  const forwardedFor = getRequestHeader("x-forwarded-for")?.split(",")[0]?.trim();
  return (
    getRequestHeader("cf-connecting-ip") ||
    getRequestHeader("x-real-ip") ||
    forwardedFor ||
    undefined
  );
}

async function getCaptchaConfig(includeSecret = false): Promise<
  CaptchaConfig & {
    secretKey?: string;
  }
> {
  const { getEnvValue } = await import("./env");
  const explicitProvider = (await getEnvValue("CAPTCHA_PROVIDER"))?.toLowerCase();
  const recaptchaSiteKey =
    (await getEnvValue("RECAPTCHA_SITE_KEY")) || (await getEnvValue("GOOGLE_RECAPTCHA_SITE_KEY"));
  const recaptchaSecretKey =
    (await getEnvValue("RECAPTCHA_SECRET_KEY")) ||
    (await getEnvValue("GOOGLE_RECAPTCHA_SECRET_KEY"));
  const turnstileSiteKey = await getEnvValue("TURNSTILE_SITE_KEY");
  const turnstileSecretKey = await getEnvValue("TURNSTILE_SECRET_KEY");
  const hcaptchaSiteKey = await getEnvValue("HCAPTCHA_SITE_KEY");
  const hcaptchaSecretKey = await getEnvValue("HCAPTCHA_SECRET_KEY");

  const provider =
    explicitProvider === "recaptcha" ||
    explicitProvider === "turnstile" ||
    explicitProvider === "hcaptcha"
      ? explicitProvider
      : recaptchaSiteKey || recaptchaSecretKey
        ? "recaptcha"
        : turnstileSiteKey || turnstileSecretKey
          ? "turnstile"
          : hcaptchaSiteKey || hcaptchaSecretKey
            ? "hcaptcha"
            : "";

  const providerSiteKey =
    provider === "recaptcha"
      ? recaptchaSiteKey
      : provider === "turnstile"
        ? turnstileSiteKey
        : provider === "hcaptcha"
          ? hcaptchaSiteKey
          : "";
  const providerSecretKey =
    provider === "recaptcha"
      ? recaptchaSecretKey
      : provider === "turnstile"
        ? turnstileSecretKey
        : provider === "hcaptcha"
          ? hcaptchaSecretKey
          : "";
  const siteKey = (await getEnvValue("CAPTCHA_SITE_KEY")) || providerSiteKey || "";
  const secretKey = (await getEnvValue("CAPTCHA_SECRET_KEY")) || providerSecretKey || "";

  if (provider && siteKey) {
    return {
      enabled: true,
      provider,
      siteKey,
      ...(includeSecret ? { secretKey } : {}),
    };
  }

  let storedSettings: StoredCaptchaSettings | null = null;

  try {
    storedSettings = await Promise.race([
      (async () => {
        const { db } = await connectToDatabase();
        return db.collection("admin_settings").findOne({ _id: "captcha" });
      })(),
      new Promise<null>((resolve) => setTimeout(() => resolve(null), 2000)),
    ]);
  } catch (error) {
    logFallbackWarning("[Captcha Config] Failed to read database settings:", error);
  }

  if (storedSettings?.provider && storedSettings.siteKey) {
    return {
      enabled: true,
      provider: storedSettings.provider,
      siteKey: storedSettings.siteKey,
      ...(includeSecret ? { secretKey: storedSettings.secretKey } : {}),
    };
  }

  return {
    enabled: false,
    provider: "",
    siteKey: "",
    ...(includeSecret ? { secretKey: "" } : {}),
  };
}

async function verifyCaptcha(captchaToken?: string) {
  const captchaConfig = await getCaptchaConfig(true);
  if (!captchaConfig.enabled) return;

  const { provider, secretKey } = captchaConfig;
  if (!provider || !secretKey) {
    throw new Error("Captcha verification is not configured correctly.");
  }
  if (!captchaToken) {
    throw new Error("Captcha verification is required.");
  }

  const formData = new FormData();
  formData.set("secret", secretKey);
  formData.set("response", captchaToken);

  const remoteIp = await getClientIp();
  if (remoteIp) {
    formData.set("remoteip", remoteIp);
  }

  const response = await fetch(CAPTCHA_VERIFY_URLS[provider], {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Captcha verification failed.");
  }

  const result = (await response.json()) as { success?: boolean };
  if (!result.success) {
    throw new Error("Captcha verification failed.");
  }
}

export const getCaptchaConfigAction = createServerFn().handler(async () => {
  return getCaptchaConfig(false);
});

export const getAdminCaptchaSettingsAction = createServerFn().handler(async () => {
  await verifyAdminAuth();
  const captchaConfig = await getCaptchaConfig(true);

  return {
    provider: captchaConfig.provider,
    siteKey: captchaConfig.siteKey,
    secretKey: captchaConfig.secretKey || "",
  };
});

export const updateCaptchaSettingsAction = createServerFn()
  .inputValidator(
    (data: any) =>
      data as {
        provider?: CaptchaProvider | "";
        siteKey?: string;
        secretKey?: string;
      },
  )
  .handler(async ({ data }) => {
    await verifyAdminAuth();

    const provider = data.provider || "";
    if (provider && !["recaptcha", "turnstile", "hcaptcha"].includes(provider)) {
      throw new Error("Unsupported captcha provider.");
    }

    const siteKey = data.siteKey?.trim() || "";
    const secretKey = data.secretKey?.trim() || "";
    if (provider && (!siteKey || !secretKey)) {
      throw new Error("Site key and secret key are required for captcha.");
    }

    const { db } = await connectToDatabase();
    await db.collection("admin_settings").updateOne(
      { _id: "captcha" },
      {
        $set: {
          provider,
          siteKey,
          secretKey,
          updatedAt: new Date(),
        },
      },
      { upsert: true },
    );

    return { success: true };
  });

// 1. Admin Login
export const loginAction = createServerFn()
  .inputValidator(
    (data: any) => data as { username?: string; password?: string; captchaToken?: string },
  )
  .handler(async ({ data }) => {
    const username = data.username?.trim();
    const password = data.password;
    if (!username || !password) {
      throw new Error("Username and password are required.");
    }

    const { getEnvValue } = await import("./env");
    const adminUsername = (await getEnvValue("ADMIN_USERNAME")) || "admin";
    const adminPassword = (await getEnvValue("ADMIN_PASSWORD")) || "Puretech2026";

    // 1. Direct environment credentials check (enables offline / development login)
    if (username === adminUsername && password === adminPassword) {
      await verifyCaptcha(data.captchaToken);

      const token = await createSessionToken(username);
      const { setCookie } = await import("@tanstack/react-start/server");
      setCookie("pure_admin_session", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: ADMIN_SESSION_MAX_AGE_SECONDS,
      });

      return { success: true, username };
    }

    // 2. Database validation fallback for other admin users
    try {
      const { db } = await connectToDatabase();
      const loginAttemptKey = await getLoginAttemptKey(username);
      await assertLoginAllowed(db, loginAttemptKey);
      await verifyCaptcha(data.captchaToken);

      const admin = await db.collection("admins").findOne({ username });

      if (!admin) {
        await recordFailedLogin(db, loginAttemptKey);
        throw new Error("Invalid username or password.");
      }

      const isMatch = await verifyPassword(password, admin.password);
      if (!isMatch) {
        await recordFailedLogin(db, loginAttemptKey);
        throw new Error("Invalid username or password.");
      }

      await clearFailedLogins(db, loginAttemptKey);

      // Set secure HTTP-only cookie
      const token = await createSessionToken(username);
      const { setCookie } = await import("@tanstack/react-start/server");
      setCookie("pure_admin_session", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: ADMIN_SESSION_MAX_AGE_SECONDS,
      });

      return { success: true, username };
    } catch (dbError: any) {
      logFallbackWarning("[Login] Database validation failed:", dbError);
      const isValidationError = 
        dbError.message === "Invalid username or password." ||
        dbError.message.includes("Captcha") ||
        dbError.message.includes("Too many failed");
      if (isValidationError) {
        throw dbError;
      }
      throw new Error("Database connection failed. Please log in using the default admin credentials.");
    }
  });

// 2. Admin Logout
export const logoutAction = createServerFn().handler(async () => {
  const { deleteCookie } = await import("@tanstack/react-start/server");
  deleteCookie("pure_admin_session", {
    path: "/",
  });
  return { success: true };
});

// 3. Check Auth Status
export const checkAuthAction = createServerFn().handler(async () => {
  try {
    const admin = await verifyAdminAuth();
    return { authenticated: true, username: admin.username };
  } catch {
    return { authenticated: false };
  }
});

// 4. Create Case Study
export const createCaseStudyAction = createServerFn()
  .inputValidator((data: any) => data)
  .handler(async ({ data }) => {
    await verifyAdminAuth();
    const { db } = await connectToDatabase();

    const slug = data.client
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    // Check if slug already exists
    const existing = await db.collection("case_studies").findOne({ slug });
    if (existing) {
      throw new Error(`A case study for the client "${data.client}" already exists.`);
    }

    const newStudy = {
      ...data,
      slug,
      createdAt: new Date(),
    };

    const result = await db.collection("case_studies").insertOne(newStudy);
    return { success: true, id: result.insertedId.toString(), slug };
  });

// 5. Update Case Study
export const updateCaseStudyAction = createServerFn()
  .inputValidator((data: any) => data as { id: string; study: any })
  .handler(async ({ data }) => {
    await verifyAdminAuth();
    const { id, study } = data;
    if (!id) throw new Error("Case study ID is required.");

    const { db } = await connectToDatabase();
    const ObjectId = await getObjectIdClass();

    const slug = study.client
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    // Exclude MongoDB fields from update data
    const { _id, createdAt, ...updateData } = study;

    const result = await db.collection("case_studies").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...updateData,
          slug,
          updatedAt: new Date(),
        },
      },
    );

    if (result.matchedCount === 0) {
      throw new Error("Case study not found.");
    }

    return { success: true, slug };
  });

// 6. Delete Case Study
export const deleteCaseStudyAction = createServerFn()
  .inputValidator((id: string) => id)
  .handler(async ({ data: id }) => {
    await verifyAdminAuth();
    if (!id) throw new Error("Case study ID is required.");

    const { db } = await connectToDatabase();
    const ObjectId = await getObjectIdClass();
    const result = await db.collection("case_studies").deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      throw new Error("Case study not found.");
    }

    return { success: true };
  });

// 7. Get All Case Studies (both for admin dashboard and public loaders)
export const getCaseStudiesAction = createServerFn().handler(async () => {
  try {
    const { db } = await connectToDatabase();
    const list = await db.collection("case_studies").find({}).sort({ createdAt: -1 }).toArray();
    // Map ObjectId to string to support clean JSON serialization
    return list.map((item) => ({
      ...item,
      _id: item._id.toString(),
    }));
  } catch (error) {
    logFallbackWarning(
      "[DB Fallback] Failed to get case studies, falling back to static data:",
      error,
    );
    return studies.map((item, index) => {
      const slug = item.client
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      return {
        ...item,
        slug,
        _id: `static-${index}`,
      };
    });
  }
});

// 8. Get Single Case Study by Slug
export const getCaseStudyBySlugAction = createServerFn()
  .inputValidator((slug: string) => slug)
  .handler(async ({ data: slug }) => {
    try {
      const { db } = await connectToDatabase();
      const item = await db.collection("case_studies").findOne({ slug });
      if (!item) return null;
      return {
        ...item,
        _id: item._id.toString(),
      };
    } catch (error) {
      logFallbackWarning(
        `[DB Fallback] Failed to get case study by slug "${slug}", falling back to static data:`,
        error,
      );
      const item = studies.find(
        (s) =>
          s.client
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "") === slug,
      );
      if (!item) return null;
      return {
        ...item,
        slug,
        _id: `static-${studies.indexOf(item)}`,
      };
    }
  });

// 9. Get Single Case Study by ID
export const getCaseStudyByIdAction = createServerFn()
  .inputValidator((id: string) => id)
  .handler(async ({ data: id }) => {
    await verifyAdminAuth();
    if (!id) return null;
    try {
      const { db } = await connectToDatabase();
      const ObjectId = await getObjectIdClass();
      const item = await db.collection("case_studies").findOne({ _id: new ObjectId(id) });
      if (!item) return null;
      return {
        ...item,
        _id: item._id.toString(),
      };
    } catch (error) {
      logFallbackWarning(
        `[DB Fallback] Failed to get case study by ID "${id}", falling back to static data:`,
        error,
      );
      if (id.startsWith("static-")) {
        const index = parseInt(id.replace("static-", ""), 10);
        const item = studies[index];
        if (item) {
          const slug = item.client
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "");
          return {
            ...item,
            slug,
            _id: id,
          };
        }
      }
      const index = parseInt(id, 10);
      if (!isNaN(index) && studies[index]) {
        const item = studies[index];
        const slug = item.client
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");
        return {
          ...item,
          slug,
          _id: `static-${index}`,
        };
      }
      return null;
    }
  });

// ─── BLOG ACTIONS ─────────────────────────────────────────────────────────────

// 10. Create Blog Post
export const createBlogAction = createServerFn()
  .inputValidator((data: any) => data)
  .handler(async ({ data }) => {
    await verifyAdminAuth();
    const { db } = await connectToDatabase();
    const blogData = normalizeBlogData(data);
    const { slug } = blogData;

    // Check if slug already exists
    const existing = await db.collection("blogs").findOne({ slug });
    if (existing) {
      throw new Error(`A blog post with the URL slug "${slug}" already exists.`);
    }

    const now = new Date();
    const status = data.status || "published";
    const publishDateVal = status === "scheduled" && data.publishDate ? new Date(data.publishDate) : undefined;
    const dateStr = status === "scheduled" && publishDateVal
      ? formatDateToString(publishDateVal)
      : formatDateToString(now);

    const newBlog = {
      ...blogData,
      status,
      publishDate: publishDateVal,
      date: dateStr,
      views: 0,
      createdAt: now,
      updatedAt: now,
    };

    const result = await db.collection("blogs").insertOne(newBlog);
    return { success: true, id: result.insertedId.toString(), slug };
  });

// 11. Update Blog Post
export const updateBlogAction = createServerFn()
  .inputValidator((data: any) => data as { id: string; blog: any })
  .handler(async ({ data }) => {
    await verifyAdminAuth();
    const { id, blog } = data;
    if (!id) throw new Error("Blog ID is required.");

    const { db } = await connectToDatabase();
    const blogData = normalizeBlogData(blog);
    const { slug } = blogData;
    const { _id, createdAt, views, ...updateData } = blogData;
    const blogsCol = db.collection("blogs");
    const ObjectId = await getObjectIdClass();

    const status = blogData.status || "published";
    const publishDateVal = status === "scheduled" && blogData.publishDate ? new Date(blogData.publishDate) : undefined;
    const dateStr = status === "scheduled" && publishDateVal
      ? formatDateToString(publishDateVal)
      : (blogData.date || formatDateToString(new Date()));

    const finalUpdateData = {
      ...updateData,
      status,
      publishDate: publishDateVal,
      date: dateStr,
    };

    if (id.startsWith("static-")) {
      await blogsCol.createIndex({ slug: 1 }, { unique: true });
      const existing = await blogsCol.findOne({ slug });
      if (existing) {
        throw new Error(`A blog post with the URL slug "${slug}" already exists.`);
      }

      const result = await blogsCol.updateOne(
        { slug },
        {
          $set: {
            ...finalUpdateData,
            slug,
            updatedAt: new Date(),
          },
          $setOnInsert: {
            createdAt: new Date(),
            views: 0,
          },
        },
        { upsert: true },
      );

      return {
        success: true,
        slug,
        id: result.upsertedId?.toString(),
      };
    }

    if (!ObjectId.isValid(id)) {
      throw new Error("Invalid blog ID.");
    }

    const existing = await blogsCol.findOne({
      slug,
      _id: { $ne: new ObjectId(id) },
    });
    if (existing) {
      throw new Error(`A blog post with the URL slug "${slug}" already exists.`);
    }

    const result = await blogsCol.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...finalUpdateData,
          slug,
          updatedAt: new Date(),
        },
      },
    );

    if (result.matchedCount === 0) {
      throw new Error("Blog post not found.");
    }

    return { success: true, slug };
  });

// 12. Delete Blog Post
export const deleteBlogAction = createServerFn()
  .inputValidator((id: string) => id)
  .handler(async ({ data: id }) => {
    await verifyAdminAuth();
    if (!id) throw new Error("Blog ID is required.");
    const ObjectId = await getObjectIdClass();
    if (!ObjectId.isValid(id)) {
      throw new Error("Invalid blog ID.");
    }

    const { db } = await connectToDatabase();
    const result = await db.collection("blogs").deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      throw new Error("Blog post not found.");
    }

    return { success: true };
  });

// 13. Get All Blog Posts
export const getBlogsAction = createServerFn()
  .inputValidator((data: any) => data as { admin?: boolean } | undefined)
  .handler(async ({ data }) => {
    try {
      const { db } = await connectToDatabase();
      await seedBlogsIfEmpty(db);

      const isAdmin = data?.admin || false;
      let query = {};

      if (!isAdmin) {
        const now = new Date();
        query = {
          $or: [
            { status: "published" },
            { status: { $exists: false } },
            {
              $and: [
                { status: "scheduled" },
                { publishDate: { $lte: now } }
              ]
            }
          ]
        };
      }

      const list = await db.collection("blogs").find(query).sort({ createdAt: -1 }).toArray();
      return list.map(toClientBlog);
    } catch (error) {
      logFallbackWarning("[DB Fallback] Failed to get blogs, falling back to static data:", error);
      return staticBlogs.map((item, index) => ({
        ...item,
        _id: `static-${index}`,
        views: 0,
        status: "published",
      }));
    }
  });

// 14. Get Single Blog Post by Slug
export const getBlogBySlugAction = createServerFn()
  .inputValidator((slug: string) => slug)
  .handler(async ({ data: slug }) => {
    try {
      const { db } = await connectToDatabase();
      await seedBlogsIfEmpty(db);

      let isAdmin = false;
      try {
        await verifyAdminAuth();
        isAdmin = true;
      } catch {
        // Not admin
      }

      let query: any = { slug };
      if (!isAdmin) {
        const now = new Date();
        query = {
          slug,
          $or: [
            { status: "published" },
            { status: { $exists: false } },
            {
              $and: [
                { status: "scheduled" },
                { publishDate: { $lte: now } }
              ]
            }
          ]
        };
      }

      const result = await db.collection("blogs").findOneAndUpdate(
        query,
        { $inc: { views: isAdmin ? 0 : 1 } },
        { returnDocument: "after" },
      );
      if (!result) {
        return null;
      }
      return toClientBlog(result);
    } catch (error) {
      logFallbackWarning(`[DB Fallback] Failed to get blog by slug "${slug}":`, error);
      const fallback = staticBlogs.find((b) => b.slug === slug);
      if (!fallback) return null;
      return {
        ...fallback,
        _id: `static-${staticBlogs.indexOf(fallback)}`,
        views: 0,
        status: "published",
      };
    }
  });

// 15. Get Single Blog Post by ID
export const getBlogByIdAction = createServerFn()
  .inputValidator((id: string) => id)
  .handler(async ({ data: id }) => {
    await verifyAdminAuth();
    if (!id) return null;
    if (id.startsWith("static-")) {
      const index = parseInt(id.replace("static-", ""), 10);
      const fallback = staticBlogs[index];
      if (!fallback) return null;
      return {
        ...fallback,
        _id: id,
        views: 0,
      };
    }
    const ObjectId = await getObjectIdClass();
    if (!ObjectId.isValid(id)) {
      return null;
    }

    try {
      const { db } = await connectToDatabase();
      await seedBlogsIfEmpty(db);

      const item = await db.collection("blogs").findOne({ _id: new ObjectId(id) });
      if (!item) {
        return null;
      }
      return toClientBlog(item);
    } catch (error) {
      logFallbackWarning(`[DB Fallback] Failed to get blog by ID "${id}":`, error);
      return null;
    }
  });
