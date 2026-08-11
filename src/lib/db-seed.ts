import { connectToDatabase } from "./mongodb";
import { getEnvValue } from "./env";
import { hashPassword, verifyPassword } from "./auth";
import { studies } from "./static-case-studies";
import { seedBlogs } from "./static-blogs";

function getErrorSummary(error: unknown) {
  if (error instanceof Error) return error.message.split("\n")[0];
  return String(error);
}

export async function seedDatabase() {
  try {
    const { db } = await connectToDatabase();

    // 1. Seed admin user
    const adminsCol = db.collection("admins");
    await adminsCol.createIndex({ username: 1 }, { unique: true });

    const username = (await getEnvValue("ADMIN_USERNAME")) || "admin";
    const rawPassword = (await getEnvValue("ADMIN_PASSWORD")) || "PureTech2026!";
    const existingAdmin = await adminsCol.findOne({ username });

    if (!existingAdmin) {
      const hashedPassword = await hashPassword(rawPassword);

      await adminsCol.insertOne({
        username,
        password: hashedPassword,
        createdAt: new Date(),
      });
      console.log(`[DB Seed] Created default admin user: ${username}`);
    } else if (!(await verifyPassword(rawPassword, existingAdmin.password))) {
      const hashedPassword = await hashPassword(rawPassword);

      await adminsCol.updateOne(
        { _id: existingAdmin._id },
        {
          $set: {
            password: hashedPassword,
            updatedAt: new Date(),
          },
        },
      );
      console.log(`[DB Seed] Updated admin password hash for: ${username}`);
    }

    // 2. Seed/Sync case studies
    const caseStudiesCol = db.collection("case_studies");
    if (Array.isArray(studies)) {
      for (const study of studies) {
        const slug = study.client
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");

        await caseStudiesCol.updateOne(
          { slug },
          {
            $set: {
              ...study,
              updatedAt: new Date(),
            },
            $setOnInsert: {
              createdAt: new Date(),
            },
          },
          { upsert: true }
        );
      }
      console.log(`[DB Seed] Synchronized ${studies.length} case studies successfully.`);
    }

    // 3. Seed blog posts
    const blogsCol = db.collection("blogs");
    await blogsCol.createIndex({ slug: 1 }, { unique: true });

    const blogsCount = await blogsCol.countDocuments();
    if (blogsCount === 0 && Array.isArray(seedBlogs)) {
      const now = new Date();
      const formattedBlogs = seedBlogs.map((blog) => ({
        ...blog,
        views: 0,
        createdAt: now,
        updatedAt: now,
      }));

      await blogsCol.insertMany(formattedBlogs);
      console.log(`[DB Seed] Seeded ${formattedBlogs.length} blogs successfully.`);
    }
  } catch (error) {
    console.warn("[DB Seed] Skipped seeding because MongoDB is unavailable:", getErrorSummary(error));
  }
}
