import { connectToDatabase } from "./mongodb";
import { getEnvValue } from "./env";
import { hashPassword, verifyPassword } from "./auth";
import { studies } from "./static-case-studies";

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

    // 2. Seed case studies
    const caseStudiesCol = db.collection("case_studies");
    const caseStudiesCount = await caseStudiesCol.countDocuments();
    if (caseStudiesCount === 0 && Array.isArray(studies)) {
      const formattedStudies = studies.map((study) => {
        // Generate slug from client name if not present
        const slug = study.client
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");

        return {
          ...study,
          slug,
          createdAt: new Date(),
        };
      });

      await caseStudiesCol.insertMany(formattedStudies);
      console.log(`[DB Seed] Seeded ${formattedStudies.length} case studies successfully.`);
    }
  } catch (error) {
    console.error("[DB Seed] Seeding error:", error);
  }
}
