import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { seedPosts } from "./seed-data/posts";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Create admin user (Luis)
  const adminPassword = await bcrypt.hash(
    process.env.ADMIN_PASSWORD || "admin123",
    12
  );
  const admin = await prisma.user.upsert({
    where: { email: process.env.ADMIN_EMAIL || "luis@example.com" },
    update: {},
    create: {
      name: process.env.ADMIN_NAME || "Luis",
      email: process.env.ADMIN_EMAIL || "luis@example.com",
      passwordHash: adminPassword,
      role: "ADMIN",
    },
  });
  console.log(`Admin user created: ${admin.name} (${admin.email})`);

  // Create regular user (Maria)
  const userPassword = await bcrypt.hash(
    process.env.USER_PASSWORD || "maria123",
    12
  );
  const user = await prisma.user.upsert({
    where: { email: process.env.USER_EMAIL || "maria@example.com" },
    update: {},
    create: {
      name: process.env.USER_NAME || "Maria",
      email: process.env.USER_EMAIL || "maria@example.com",
      passwordHash: userPassword,
      role: "USER",
    },
  });
  console.log(`User created: ${user.name} (${user.email})`);

  // Seed blog posts
  for (const post of seedPosts) {
    await prisma.post.upsert({
      where: { slug: post.slug },
      update: {
        title: post.title,
        contentEn: post.contentEn,
        category: post.category,
        publishedAt: post.publishedAt,
      },
      create: {
        title: post.title,
        slug: post.slug,
        contentEn: post.contentEn,
        category: post.category,
        publishedAt: post.publishedAt,
      },
    });
    console.log(`Post seeded: ${post.title}`);
  }

  console.log("Seeding complete!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
