import { createServerFn } from "@tanstack/react-start";
import { connectToDatabase, getMongoModule } from "./mongodb";
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

const CLOUDINARY_CASE_STUDY_IMAGES: Record<string, string> = {
  "Warehouse Management System":
    "https://res.cloudinary.com/dra0hwsh4/image/upload/q_auto/f_auto/v1781510620/Warehouse_Management_System_qld9oo.png",
  "Quick Response Board":
    "https://res.cloudinary.com/dra0hwsh4/image/upload/q_auto/f_auto/v1781510616/Quick_Response_Board_-_tata_autocomp_ivgwql.png",
  "Safety Dashboard System":
    "https://res.cloudinary.com/dra0hwsh4/image/upload/q_auto/f_auto/v1781510616/Safety_Dashboard_System_bridgestone_r2rb4r.png",
  "Vehicle Access Management System":
    "https://res.cloudinary.com/dra0hwsh4/image/upload/q_auto/f_auto/v1781510618/Vehicle_Access_Management_System_-_sandvik_bkc5pd.png",
  "Bladder Inventory System":
    "https://res.cloudinary.com/dra0hwsh4/image/upload/q_auto/f_auto/v1781510625/Bladder_Inventory_System_-_bridgestone_msxqyc.png",
  VisitorPass:
    "https://res.cloudinary.com/dra0hwsh4/image/upload/q_auto/f_auto/v1781510619/visitor_pass_bzblgf.png",
  "MTR Raw Material Report Digitalization":
    "https://res.cloudinary.com/dra0hwsh4/image/upload/q_auto/f_auto/v1781510613/MTR_Raw_Material_Report_Digitalization_-_Bridgestone_x29guf.png",
  "MHE Trolly ":
    "https://res.cloudinary.com/dra0hwsh4/image/upload/q_auto/f_auto/v1781510613/MHE_Trolly_Bridgestone_ayrimg.png",
  "MHE Trolly":
    "https://res.cloudinary.com/dra0hwsh4/image/upload/q_auto/f_auto/v1781510613/MHE_Trolly_Bridgestone_ayrimg.png",
  "KPI Dashboard for Manufacturing":
    "https://res.cloudinary.com/dra0hwsh4/image/upload/q_auto/f_auto/v1781510612/KPI_Dashboard_bridgestone_j89icc.png",
  "TMA usage monitoring":
    "https://res.cloudinary.com/dra0hwsh4/image/upload/q_auto/f_auto/v1781510617/TMA_usage_monitoring_-_bridgestone_z81qsv.png",
  "AI-powered Dot Serial Code Generation":
    "https://res.cloudinary.com/dra0hwsh4/image/upload/q_auto/f_auto/v1781510623/AI-powered_Dot_Serial_Code_Generation_-_bridgestone_pwdqao.png",
  "AIML-powered tire verification system":
    "https://res.cloudinary.com/dra0hwsh4/image/upload/q_auto/f_auto/v1781510612/IML-powered_tire_verification_system_-_ceat_xza9ed.png",
  "TQM-powered digital portal":
    "https://res.cloudinary.com/dra0hwsh4/image/upload/q_auto/f_auto/v1781510618/TQM-powered_digital_portal_-_tata_taco_qq3yap.png",
  "Global Recruitment & Talent Development Organization":
    "https://res.cloudinary.com/dra0hwsh4/image/upload/q_auto/f_auto/v1781510621/2_case_study_f3rho2.png",
  "Global E-Learning & Digital Marketing Agency - QgenX":
    "https://res.cloudinary.com/dra0hwsh4/image/upload/q_auto/f_auto/v1781510615/QgenX_tmngke.png",
  "Global Real Estate & B2B Sales Organization":
    "https://res.cloudinary.com/dra0hwsh4/image/upload/q_auto/f_auto/v1781510622/ai_calling_bot_yfbmj5.png",
  "Global Financial Institution":
    "https://res.cloudinary.com/dra0hwsh4/image/upload/v1781510612/global_financial_institution_ze0ex6.png",
  "IoT-Diesel consumption system":
    "https://res.cloudinary.com/dra0hwsh4/image/upload/v1781510611/IoT-Diesel_consumption_system_-_bridgestone_uprzqa.png",
  "Global Wellness & Spiritual Guidance Platform":
    "https://res.cloudinary.com/dra0hwsh4/image/upload/v1781510624/astrologyAi_dh4t4g.png",
};

const CLOUDINARY_CASE_STUDY_IMAGES_BY_PATH: Record<string, string> = {
  "/homeCaseStudy/warehouse-management-system.png":
    CLOUDINARY_CASE_STUDY_IMAGES["Warehouse Management System"],
  "/homeCaseStudy/Warehouse Management System.png":
    CLOUDINARY_CASE_STUDY_IMAGES["Warehouse Management System"],
  "/homeCaseStudy/quick-response-board-tata-autocomp.png":
    CLOUDINARY_CASE_STUDY_IMAGES["Quick Response Board"],
  "/homeCaseStudy/Quick Response Board - tata autocomp.png":
    CLOUDINARY_CASE_STUDY_IMAGES["Quick Response Board"],
  "/homeCaseStudy/safety-dashboard-system-bridgestone.png":
    CLOUDINARY_CASE_STUDY_IMAGES["Safety Dashboard System"],
  "/homeCaseStudy/Safety Dashboard System bridgestone.png":
    CLOUDINARY_CASE_STUDY_IMAGES["Safety Dashboard System"],
  "/homeCaseStudy/vehicle-access-management-system-sandvik.png":
    CLOUDINARY_CASE_STUDY_IMAGES["Vehicle Access Management System"],
  "/homeCaseStudy/Vehicle Access Management System - sandvik.png":
    CLOUDINARY_CASE_STUDY_IMAGES["Vehicle Access Management System"],
  "/homeCaseStudy/bladder-inventory-system-bridgestone.png":
    CLOUDINARY_CASE_STUDY_IMAGES["Bladder Inventory System"],
  "/homeCaseStudy/Bladder Inventory System - bridgestone.png":
    CLOUDINARY_CASE_STUDY_IMAGES["Bladder Inventory System"],
  "/homeCaseStudy/visitor-pass.png": CLOUDINARY_CASE_STUDY_IMAGES.VisitorPass,
  "/homeCaseStudy/visitor pass.png": CLOUDINARY_CASE_STUDY_IMAGES.VisitorPass,
  "/homeCaseStudy/mtr-raw-material-report-digitalization-bridgestone.png":
    CLOUDINARY_CASE_STUDY_IMAGES["MTR Raw Material Report Digitalization"],
  "/homeCaseStudy/MTR Raw Material Report Digitalization - Bridgestone.png":
    CLOUDINARY_CASE_STUDY_IMAGES["MTR Raw Material Report Digitalization"],
  "/homeCaseStudy/mhe-trolly-bridgestone.png": CLOUDINARY_CASE_STUDY_IMAGES["MHE Trolly"],
  "/homeCaseStudy/MHE Trolly Bridgestone.png": CLOUDINARY_CASE_STUDY_IMAGES["MHE Trolly"],
  "/homeCaseStudy/kpi-dashboard-bridgestone.png":
    CLOUDINARY_CASE_STUDY_IMAGES["KPI Dashboard for Manufacturing"],
  "/homeCaseStudy/KPI Dashboard bridgestone.png":
    CLOUDINARY_CASE_STUDY_IMAGES["KPI Dashboard for Manufacturing"],
  "/homeCaseStudy/tma-usage-monitoring-bridgestone.png":
    CLOUDINARY_CASE_STUDY_IMAGES["TMA usage monitoring"],
  "/homeCaseStudy/TMA usage monitoring - bridgestone.png":
    CLOUDINARY_CASE_STUDY_IMAGES["TMA usage monitoring"],
  "/homeCaseStudy/ai-powered-dot-serial-code-generation-bridgestone.png":
    CLOUDINARY_CASE_STUDY_IMAGES["AI-powered Dot Serial Code Generation"],
  "/homeCaseStudy/AI-powered Dot Serial Code Generation - bridgestone.png":
    CLOUDINARY_CASE_STUDY_IMAGES["AI-powered Dot Serial Code Generation"],
  "/homeCaseStudy/iml-powered-tire-verification-system-ceat.png":
    CLOUDINARY_CASE_STUDY_IMAGES["AIML-powered tire verification system"],
  "/homeCaseStudy/IML-powered tire verification system - ceat.png":
    CLOUDINARY_CASE_STUDY_IMAGES["AIML-powered tire verification system"],
  "/homeCaseStudy/tqm-powered-digital-portal-tata-taco.png":
    CLOUDINARY_CASE_STUDY_IMAGES["TQM-powered digital portal"],
  "/homeCaseStudy/TQM-powered digital portal - tata taco.png":
    CLOUDINARY_CASE_STUDY_IMAGES["TQM-powered digital portal"],
  "/homeCaseStudy/questa-ai-interviewer.png":
    CLOUDINARY_CASE_STUDY_IMAGES["Global Recruitment & Talent Development Organization"],
  "/homeCaseStudy/questa-ai-interviewer.webp":
    CLOUDINARY_CASE_STUDY_IMAGES["Global Recruitment & Talent Development Organization"],
  "/homeCaseStudy/2 case study.png":
    CLOUDINARY_CASE_STUDY_IMAGES["Global Recruitment & Talent Development Organization"],
  "/homeCaseStudy/qgenx.png":
    CLOUDINARY_CASE_STUDY_IMAGES["Global E-Learning & Digital Marketing Agency - QgenX"],
  "/homeCaseStudy/QgenX.png":
    CLOUDINARY_CASE_STUDY_IMAGES["Global E-Learning & Digital Marketing Agency - QgenX"],
  "/homeCaseStudy/ai-calling-bot.png":
    CLOUDINARY_CASE_STUDY_IMAGES["Global Real Estate & B2B Sales Organization"],
  "/homeCaseStudy/ai calling bot.png":
    CLOUDINARY_CASE_STUDY_IMAGES["Global Real Estate & B2B Sales Organization"],
  "/homeCaseStudy/global-financial-institution.png":
    CLOUDINARY_CASE_STUDY_IMAGES["Global Financial Institution"],
  "/homeCaseStudy/global financial institution.png":
    CLOUDINARY_CASE_STUDY_IMAGES["Global Financial Institution"],
  "/homeCaseStudy/iot-diesel-consumption-system-bridgestone.png":
    CLOUDINARY_CASE_STUDY_IMAGES["IoT-Diesel consumption system"],
  "/homeCaseStudy/IoT-Diesel consumption system - bridgestone.png":
    CLOUDINARY_CASE_STUDY_IMAGES["IoT-Diesel consumption system"],
  "/homeCaseStudy/astrology-ai.png":
    CLOUDINARY_CASE_STUDY_IMAGES["Global Wellness & Spiritual Guidance Platform"],
  "/homeCaseStudy/astrologyAi.png":
    CLOUDINARY_CASE_STUDY_IMAGES["Global Wellness & Spiritual Guidance Platform"],
};

function normalizeCaseStudyImage<T extends { client?: string; image?: string }>(item: T): T {
  const image =
    (item.client && CLOUDINARY_CASE_STUDY_IMAGES[item.client]) ||
    (item.image && CLOUDINARY_CASE_STUDY_IMAGES_BY_PATH[item.image]);

  return image ? { ...item, image } : item;
}

type CaptchaProvider = keyof typeof CAPTCHA_VERIFY_URLS;
type CaptchaConfig = {
  enabled: boolean;
  provider: CaptchaProvider | "";
  siteKey: string;
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
  const { ObjectId } = await getMongoModule();
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

  return {
    enabled: false,
    provider: "",
    siteKey: "",
    ...(includeSecret ? { secretKey: "" } : {}),
  };
}

async function isLocalhostRequest(): Promise<boolean> {
  try {
    const { getRequestHeader } = await import("@tanstack/react-start/server");
    const host =
      getRequestHeader("x-forwarded-host") ||
      getRequestHeader("host") ||
      "";
    // Match localhost, 127.x.x.x, and ::1
    return /^(localhost|127\.\d+\.\d+\.\d+|\[?::1\]?)(:\d+)?$/.test(host);
  } catch {
    // If we can't read the header, fall through to normal verification
    return false;
  }
}

async function verifyCaptcha(captchaToken?: string) {
  const captchaConfig = await getCaptchaConfig(true);
  if (!captchaConfig.enabled) return;

  // ── Skip captcha on localhost so local development works without tokens ──
  if (await isLocalhostRequest()) {
    console.info("[Captcha] Skipped — localhost request detected.");
    return;
  }

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
      throw new Error(
        "Database connection failed. Please log in using the default admin credentials.",
      );
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
    return list.map((item) =>
      normalizeCaseStudyImage({
        ...item,
        _id: item._id.toString(),
      }),
    );
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
      return normalizeCaseStudyImage({
        ...item,
        slug,
        _id: `static-${index}`,
      });
    });
  }
});

// 8. Get Single Case Study by Slug
export const getCaseStudyBySlugAction = createServerFn()
  .inputValidator((slug: string) => slug)
  .handler(async ({ data: slug }) => {
    const getStaticStudy = () => {
      const item = studies.find(
        (s) =>
          s.client
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "") === slug,
      );
      if (!item) return null;
      return normalizeCaseStudyImage({
        ...item,
        slug,
        _id: `static-${studies.indexOf(item)}`,
      });
    };

    try {
      const { db } = await connectToDatabase();
      const item = await db.collection("case_studies").findOne({ slug });
      if (!item) return getStaticStudy();
      return normalizeCaseStudyImage({
        ...item,
        _id: item._id.toString(),
      });
    } catch (error) {
      logFallbackWarning(
        `[DB Fallback] Failed to get case study by slug "${slug}", falling back to static data:`,
        error,
      );
      return getStaticStudy();
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
      return normalizeCaseStudyImage({
        ...item,
        _id: item._id.toString(),
      });
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
    const publishDateVal =
      status === "scheduled" && data.publishDate ? new Date(data.publishDate) : undefined;
    const dateStr =
      status === "scheduled" && publishDateVal
        ? formatDateToString(publishDateVal)
        : formatDateToString(now);

    // ── Content size guard ─────────────────────────────────────────────────
    const contentStr = String(blogData.content || "");
    const contentSizeKB = Math.round(Buffer.byteLength(contentStr, "utf8") / 1024);
    if (contentSizeKB > 900) {
      throw new Error(
        `Blog content is too large (${contentSizeKB} KB). Please reduce it to under 900 KB. ` +
        `Consider splitting very long articles into a series of posts.`,
      );
    }
    // ─────────────────────────────────────────────────────────────────────

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
    const publishDateVal =
      status === "scheduled" && blogData.publishDate ? new Date(blogData.publishDate) : undefined;
    const dateStr =
      status === "scheduled" && publishDateVal
        ? formatDateToString(publishDateVal)
        : blogData.date || formatDateToString(new Date());

    // ── Content size guard ─────────────────────────────────────────────────
    const contentStr = String(blogData.content || "");
    const contentSizeKB = Math.round(Buffer.byteLength(contentStr, "utf8") / 1024);
    if (contentSizeKB > 900) {
      throw new Error(
        `Blog content is too large (${contentSizeKB} KB). Please reduce it to under 900 KB. ` +
        `Consider splitting very long articles into a series of posts.`,
      );
    }
    // ─────────────────────────────────────────────────────────────────────

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

      // ── Auto-promote scheduled posts whose publishDate has passed ──────────
      // This runs on every admin load so the panel reflects the real status.
      const now = new Date();
      try {
        await db.collection("blogs").updateMany(
          { status: "scheduled", publishDate: { $lte: now } },
          { $set: { status: "published", updatedAt: now } },
        );
      } catch {
        // Non-fatal: if this update fails, we still return the list
      }
      // ─────────────────────────────────────────────────────────────────────

      let query = {};
      if (!isAdmin) {
        query = {
          $or: [
            { status: "published" },
            { status: { $exists: false } },
            {
              $and: [{ status: "scheduled" }, { publishDate: { $lte: now } }],
            },
          ],
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
              $and: [{ status: "scheduled" }, { publishDate: { $lte: now } }],
            },
          ],
        };
      }

      const result = await db
        .collection("blogs")
        .findOneAndUpdate(query, { $inc: { views: isAdmin ? 0 : 1 } }, { returnDocument: "after" });
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

// ─── CAREER / JOB OPENINGS ACTIONS ────────────────────────────────────────────

function toClientCareer(item: any) {
  return {
    ...item,
    _id: item._id.toString(),
    expiresAt: item.expiresAt ? new Date(item.expiresAt).toISOString() : null,
    createdAt: item.createdAt ? new Date(item.createdAt).toISOString() : null,
    updatedAt: item.updatedAt ? new Date(item.updatedAt).toISOString() : null,
  };
}

// 16. Create Career Opening
export const createCareerAction = createServerFn()
  .inputValidator((data: any) => data)
  .handler(async ({ data }) => {
    await verifyAdminAuth();
    const { db } = await connectToDatabase();

    const now = new Date();
    const durationDays = Number(data.durationDays) || 30;
    const expiresAt = new Date(now.getTime() + durationDays * 24 * 60 * 60 * 1000);

    const newCareer = {
      title: String(data.title || "").trim(),
      team: String(data.team || "").trim(),
      location: String(data.location || "Pune").trim(),
      type: String(data.type || "Full-time").trim(),
      tag: String(data.tag || "").trim(),
      blurb: String(data.blurb || "").trim(),
      accent: String(data.accent || "var(--brand-blue)").trim(),
      durationDays,
      expiresAt,
      createdAt: now,
      updatedAt: now,
    };

    if (!newCareer.title) throw new Error("Job title is required.");
    if (!newCareer.blurb) throw new Error("Job description is required.");

    const result = await db.collection("careers").insertOne(newCareer);
    return { success: true, id: result.insertedId.toString() };
  });

// 17. Update Career Opening
export const updateCareerAction = createServerFn()
  .inputValidator((data: any) => data as { id: string; career: any })
  .handler(async ({ data }) => {
    await verifyAdminAuth();
    const { id, career } = data;
    if (!id) throw new Error("Career ID is required.");

    const { db } = await connectToDatabase();
    const ObjectId = await getObjectIdClass();

    const now = new Date();
    const durationDays = Number(career.durationDays) || 30;
    // Reset the expiry from the edit date whenever duration is updated
    const expiresAt = new Date(now.getTime() + durationDays * 24 * 60 * 60 * 1000);

    const { _id, createdAt, ...rest } = career;

    const result = await db.collection("careers").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          title: String(rest.title || "").trim(),
          team: String(rest.team || "").trim(),
          location: String(rest.location || "Pune").trim(),
          type: String(rest.type || "Full-time").trim(),
          tag: String(rest.tag || "").trim(),
          blurb: String(rest.blurb || "").trim(),
          accent: String(rest.accent || "var(--brand-blue)").trim(),
          durationDays,
          expiresAt,
          updatedAt: now,
        },
      },
    );

    if (result.matchedCount === 0) throw new Error("Career opening not found.");
    return { success: true };
  });

// 18. Delete Career Opening
export const deleteCareerAction = createServerFn()
  .inputValidator((id: string) => id)
  .handler(async ({ data: id }) => {
    await verifyAdminAuth();
    if (!id) throw new Error("Career ID is required.");

    const { db } = await connectToDatabase();
    const ObjectId = await getObjectIdClass();
    const result = await db.collection("careers").deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) throw new Error("Career opening not found.");
    return { success: true };
  });

// 19. Get All Career Openings
export const getCareersAction = createServerFn()
  .inputValidator((data: any) => data as { admin?: boolean } | undefined)
  .handler(async ({ data }) => {
    try {
      const { db } = await connectToDatabase();
      const isAdmin = data?.admin || false;

      // Public: only show non-expired; Admin: show all
      const query = isAdmin ? {} : { expiresAt: { $gt: new Date() } };

      const list = await db
        .collection("careers")
        .find(query)
        .sort({ createdAt: -1 })
        .toArray();

      return list.map(toClientCareer);
    } catch (error) {
      logFallbackWarning("[DB Fallback] Failed to get careers:", error);
      return [];
    }
  });

// 20. Get Single Career by ID (admin edit)
export const getCareerByIdAction = createServerFn()
  .inputValidator((id: string) => id)
  .handler(async ({ data: id }) => {
    await verifyAdminAuth();
    if (!id) return null;

    const ObjectId = await getObjectIdClass();
    if (!ObjectId.isValid(id)) return null;

    try {
      const { db } = await connectToDatabase();
      const item = await db.collection("careers").findOne({ _id: new ObjectId(id) });
      if (!item) return null;
      return toClientCareer(item);
    } catch (error) {
      logFallbackWarning(`[DB Fallback] Failed to get career by ID "${id}":`, error);
      return null;
    }
  });

type CareerApplicationInput = {
  careerId?: unknown;
  fullName?: unknown;
  email?: unknown;
  phone?: unknown;
  currentCompany?: unknown;
  experience?: unknown;
  location?: unknown;
  linkedin?: unknown;
  portfolio?: unknown;
  noticePeriod?: unknown;
  message?: unknown;
};

type MongoIdLike = {
  toString(): string;
};

type CareerApplicationDocument = Record<string, unknown> & {
  _id: MongoIdLike;
  careerId?: MongoIdLike | string;
  createdAt?: Date | string | null;
  updatedAt?: Date | string | null;
};

function toClientCareerApplication(item: CareerApplicationDocument) {
  return {
    ...item,
    _id: item._id.toString(),
    careerId: item.careerId?.toString?.() || String(item.careerId || ""),
    createdAt: item.createdAt ? new Date(item.createdAt).toISOString() : null,
    updatedAt: item.updatedAt ? new Date(item.updatedAt).toISOString() : null,
  };
}

function cleanText(value: unknown, maxLength = 2000) {
  return String(value || "")
    .trim()
    .slice(0, maxLength);
}

function assertRequired(value: string, message: string) {
  if (!value) throw new Error(message);
  return value;
}

// 20a. Submit Career Application (public)
export const submitCareerApplicationAction = createServerFn()
  .inputValidator((data: unknown) => data as CareerApplicationInput)
  .handler(async ({ data }) => {
    const { db } = await connectToDatabase();
    const ObjectId = await getObjectIdClass();
    const careerId = cleanText(data.careerId, 64);

    if (!careerId || !ObjectId.isValid(careerId)) {
      throw new Error("Please select a valid role before applying.");
    }

    const career = await db.collection("careers").findOne({
      _id: new ObjectId(careerId),
      expiresAt: { $gt: new Date() },
    });

    if (!career) {
      throw new Error("This role is no longer accepting applications.");
    }

    const email = cleanText(data.email, 160).toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error("Please enter a valid email address.");
    }

    const now = new Date();
    const application = {
      careerId: career._id,
      roleTitle: cleanText(career.title, 180),
      team: cleanText(career.team, 120),
      fullName: assertRequired(cleanText(data.fullName, 140), "Full name is required."),
      email,
      phone: assertRequired(cleanText(data.phone, 60), "Phone number is required."),
      currentCompany: cleanText(data.currentCompany, 140),
      experience: assertRequired(cleanText(data.experience, 80), "Experience is required."),
      location: assertRequired(cleanText(data.location, 140), "Current location is required."),
      linkedin: assertRequired(cleanText(data.linkedin, 240), "LinkedIn profile is required."),
      portfolio: cleanText(data.portfolio, 240),
      noticePeriod: cleanText(data.noticePeriod, 100),
      message: assertRequired(cleanText(data.message, 2500), "Please add a short note."),
      status: "new",
      createdAt: now,
      updatedAt: now,
    };

    const result = await db.collection("career_applications").insertOne(application);
    return { success: true, id: result.insertedId.toString() };
  });

// 20b. Get Career Applications (admin)
export const getCareerApplicationsAction = createServerFn()
  .inputValidator((data: unknown) => data as { careerId?: string } | undefined)
  .handler(async ({ data }) => {
    await verifyAdminAuth();
    const { db } = await connectToDatabase();
    const ObjectId = await getObjectIdClass();
    const query: Record<string, unknown> = {};

    if (data?.careerId) {
      if (!ObjectId.isValid(data.careerId)) return [];
      query.careerId = new ObjectId(data.careerId);
    }

    const list = await db
      .collection("career_applications")
      .find(query)
      .sort({ createdAt: -1 })
      .toArray();

    return list.map(toClientCareerApplication);
  });

// 20c. Delete Career Application (admin)
export const deleteCareerApplicationAction = createServerFn()
  .inputValidator((id: string) => id)
  .handler(async ({ data: id }) => {
    await verifyAdminAuth();
    if (!id) throw new Error("Application ID is required.");

    const ObjectId = await getObjectIdClass();
    if (!ObjectId.isValid(id)) throw new Error("Invalid application ID.");

    const { db } = await connectToDatabase();
    const result = await db.collection("career_applications").deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) throw new Error("Application not found.");
    return { success: true };
  });

// ─── TESTIMONIAL ACTIONS ───────────────────────────────────────────────────────

const STATIC_TESTIMONIALS = [
  {
    quote: "The tire inspection and uniformity platform exceeded our expectations. The team understood our manufacturing requirements deeply and delivered a solution that integrated seamlessly into our production line.",
    name: "Rajendra Patel",
    role: "Engineering Lead",
    company: "Bridgestone",
    initials: "RP",
    accent: "var(--brand-red)",
    project: "Tire Inspection & Uniformity",
    avatar: "",
    order: 1,
  },
  {
    quote: "The weapon management system built by Pure Technology brought much-needed precision and accountability to our depot operations. Reliable, secure, and built to defence-grade standards.",
    name: "Capt Praveen Sab",
    role: "Captain",
    company: "29 Forward Ammunition Depot",
    initials: "PS",
    accent: "var(--brand-blue)",
    project: "Weapon Management System",
    avatar: "",
    order: 2,
  },
  {
    quote: "Pure Technology delivered the GED software and pulley concentricity solution with exceptional technical depth. Their team grasped our engineering requirements quickly and delivered a robust, production-ready system.",
    name: "Ritesh Bhole",
    role: "Deputy General Manager",
    company: "Schindler",
    initials: "RB",
    accent: "var(--brand-orange)",
    project: "GED Software & Pulley Concentricity",
    avatar: "/testimonial/riteshbhole.jpg",
    order: 3,
  },
  {
    quote: "The web portal and cybersecurity solution delivered by Pure Technology gave us the reliability and security compliance we needed for government-grade operations. Highly professional team.",
    name: "J N Tulekar",
    role: "Officer",
    company: "PCDA (O)",
    initials: "JT",
    accent: "var(--brand-green)",
    project: "Web Portal & Cyber Security",
    avatar: "",
    order: 4,
  },
  {
    quote: "Pure Technology built a robust vehicle management system that streamlined our fleet operations significantly. Their technical expertise and timely delivery made the entire engagement smooth.",
    name: "Madhusudan Sadani",
    role: "Manager",
    company: "Sandvik",
    initials: "MS",
    accent: "var(--brand-blue)",
    project: "Vehicle Management System",
    avatar: "",
    order: 5,
  },
  {
    quote: "The AI calling solution integrated with Zoho transformed how we handle client outreach. Pure Technology understood our business needs precisely and delivered a seamless, intelligent workflow.",
    name: "Prabin",
    role: "Director",
    company: "AA Consultancy",
    initials: "PR",
    accent: "var(--brand-orange)",
    project: "AI Calling with Zoho Integration",
    avatar: "",
    order: 6,
  },
  {
    quote: "The AI-based quotation paper generation and interview system has revolutionized our academic processes. Pure Technology brought innovation that we didn't think was possible in the education space.",
    name: "Dr Sushant Patil",
    role: "Director",
    company: "DY Patil Educational Federation",
    initials: "SP",
    accent: "var(--brand-green)",
    project: "AI Quotation Paper & Interview",
    avatar: "/testimonial/sushantpatil.jpg",
    order: 7,
  },
  {
    quote: "The student portal and AI interview system built by Pure Technology has dramatically improved our student engagement and administrative efficiency. A truly future-ready solution.",
    name: "Dr Sajid Alvi",
    role: "Director",
    company: "DIMR",
    initials: "SA",
    accent: "var(--brand-red)",
    project: "Student Portal & AI Interview",
    avatar: "",
    order: 8,
  },
  {
    quote: "Pure Technology delivered our emailer platform with great attention to detail and design quality. The solution was clean, scalable, and exactly what our media operations needed.",
    name: "Mrunal Pawar",
    role: "Manager",
    company: "Sakal Media",
    initials: "MP",
    accent: "var(--brand-yellow)",
    project: "Emailer Platform",
    avatar: "",
    order: 9,
  },
  {
    quote: "The internal AI agent built by Pure Technology has streamlined our processes beyond expectations. It handles complex workflows intelligently and has saved our team countless hours.",
    name: "Sagar Babar",
    role: "Manager",
    company: "Comsense Technologies",
    initials: "SB",
    accent: "var(--brand-blue)",
    project: "AI Agent for Internal Process",
    avatar: "/testimonial/sagarbabar.png",
    order: 10,
  },
  {
    quote: "Pure Technology delivered a payroll and expense management system that perfectly fits our organizational scale. Reliable, accurate, and easy for our HR team to operate.",
    name: "Mr Khan Ahmed",
    role: "Manager",
    company: "Mahabeej",
    initials: "KA",
    accent: "var(--brand-green)",
    project: "Payroll & Expense Management",
    avatar: "",
    order: 11,
  },
  {
    quote: "The AI-based newsletter solution built for Reliance has elevated our internal communications. Pure Technology delivered a smart, automated system that saves significant editorial effort.",
    name: "Mrs Kaval Bajwa",
    role: "Manager",
    company: "Reliance Industries",
    initials: "KB",
    accent: "var(--brand-orange)",
    project: "AI Newsletter",
    avatar: "",
    order: 12,
  },
  {
    quote: "The lead portal built by Pure Technology is intuitive, fast, and exactly what our sales team needed. It has improved our lead tracking and conversion workflows considerably.",
    name: "Rajashree Gandhi",
    role: "Director",
    company: "Botonym",
    initials: "RG",
    accent: "var(--brand-red)",
    project: "Lead Portal",
    avatar: "/team/rajashreeGandhi.jpg",
    order: 13,
  },
];

async function seedTestimonialsIfEmpty(db: any) {
  const count = await db.collection("testimonials").countDocuments();
  if (count === 0) {
    const now = new Date();
    await db.collection("testimonials").insertMany(
      STATIC_TESTIMONIALS.map((t) => ({ ...t, createdAt: now, updatedAt: now }))
    );
    console.info("[Seed] Inserted static testimonials into MongoDB.");
  }
}

function toClientTestimonial(item: any) {
  return {
    ...item,
    _id: item._id.toString(),
    createdAt: item.createdAt ? new Date(item.createdAt).toISOString() : null,
    updatedAt: item.updatedAt ? new Date(item.updatedAt).toISOString() : null,
  };
}

// 21. Get All Testimonials (public + admin)
export const getTestimonialsAction = createServerFn()
  .inputValidator((data: any) => data as { admin?: boolean } | undefined)
  .handler(async ({ data }) => {
    try {
      const { db } = await connectToDatabase();
      await seedTestimonialsIfEmpty(db);
      const isAdmin = data?.admin || false;
      // Admin: show all; Public: show only active ones
      const query = isAdmin ? {} : { active: { $ne: false } };
      const list = await db
        .collection("testimonials")
        .find(query)
        .sort({ order: 1, createdAt: 1 })
        .toArray();
      return list.map(toClientTestimonial);
    } catch (error) {
      logFallbackWarning("[DB Fallback] Failed to get testimonials:", error);
      // Return static data as fallback so the page never breaks
      return STATIC_TESTIMONIALS.map((t, i) => ({
        ...t,
        _id: `static-${i}`,
        active: true,
        createdAt: null,
        updatedAt: null,
      }));
    }
  });

// 22. Get Single Testimonial by ID
export const getTestimonialByIdAction = createServerFn()
  .inputValidator((id: string) => id)
  .handler(async ({ data: id }) => {
    await verifyAdminAuth();
    if (!id) return null;
    const ObjectId = await getObjectIdClass();
    if (!ObjectId.isValid(id)) return null;
    try {
      const { db } = await connectToDatabase();
      const item = await db.collection("testimonials").findOne({ _id: new ObjectId(id) });
      if (!item) return null;
      return toClientTestimonial(item);
    } catch (error) {
      logFallbackWarning(`[DB Fallback] Failed to get testimonial by ID "${id}":`, error);
      return null;
    }
  });

// 23. Create Testimonial
export const createTestimonialAction = createServerFn()
  .inputValidator((data: any) => data)
  .handler(async ({ data }) => {
    await verifyAdminAuth();
    const { db } = await connectToDatabase();
    await seedTestimonialsIfEmpty(db);
    const now = new Date();
    const maxOrder = await db
      .collection("testimonials")
      .find()
      .sort({ order: -1 })
      .limit(1)
      .toArray();
    const nextOrder = maxOrder.length > 0 ? (maxOrder[0].order ?? 0) + 1 : 1;
    const newDoc = {
      quote: String(data.quote || "").trim(),
      name: String(data.name || "").trim(),
      role: String(data.role || "").trim(),
      company: String(data.company || "").trim(),
      initials: String(data.initials || "").trim(),
      accent: String(data.accent || "var(--brand-blue)").trim(),
      project: String(data.project || "").trim(),
      avatar: String(data.avatar || "").trim(),
      active: data.active !== false,
      order: Number(data.order) || nextOrder,
      createdAt: now,
      updatedAt: now,
    };
    if (!newDoc.quote) throw new Error("Quote is required.");
    if (!newDoc.name) throw new Error("Person name is required.");
    const result = await db.collection("testimonials").insertOne(newDoc);
    return { success: true, id: result.insertedId.toString() };
  });

// 24. Update Testimonial
export const updateTestimonialAction = createServerFn()
  .inputValidator((data: any) => data as { id: string; testimonial: any })
  .handler(async ({ data }) => {
    await verifyAdminAuth();
    const { id, testimonial } = data;
    if (!id) throw new Error("Testimonial ID is required.");
    const { db } = await connectToDatabase();
    const ObjectId = await getObjectIdClass();
    const now = new Date();
    const { _id, createdAt, ...rest } = testimonial;
    const result = await db.collection("testimonials").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          quote: String(rest.quote || "").trim(),
          name: String(rest.name || "").trim(),
          role: String(rest.role || "").trim(),
          company: String(rest.company || "").trim(),
          initials: String(rest.initials || "").trim(),
          accent: String(rest.accent || "var(--brand-blue)").trim(),
          project: String(rest.project || "").trim(),
          avatar: String(rest.avatar || "").trim(),
          active: rest.active !== false,
          order: Number(rest.order) || 0,
          updatedAt: now,
        },
      }
    );
    if (result.matchedCount === 0) throw new Error("Testimonial not found.");
    return { success: true };
  });

// 25. Delete Testimonial
export const deleteTestimonialAction = createServerFn()
  .inputValidator((id: string) => id)
  .handler(async ({ data: id }) => {
    await verifyAdminAuth();
    if (!id) throw new Error("Testimonial ID is required.");
    const { db } = await connectToDatabase();
    const ObjectId = await getObjectIdClass();
    const result = await db.collection("testimonials").deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 0) throw new Error("Testimonial not found.");
    return { success: true };
  });
