/**
 * One-time Google Drive photo migration script
 *
 * Usage: npx tsx scripts/migrate-google-drive.ts
 *
 * Prerequisites:
 * 1. Set GOOGLE_DRIVE_FOLDER_ID in .env
 * 2. Set GOOGLE_SERVICE_ACCOUNT_KEY to the path of your service account JSON
 * 3. Share the Google Drive folder with the service account email
 * 4. Ensure Supabase Storage bucket "photos" exists
 */

import "dotenv/config";
import { google } from "googleapis";
import { createClient } from "@supabase/supabase-js";
import { PrismaClient } from "@prisma/client";
import * as fs from "fs";
import * as path from "path";

const prisma = new PrismaClient();

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function main() {
  const keyPath = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
  const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;

  if (!keyPath || !folderId) {
    console.error("Missing GOOGLE_SERVICE_ACCOUNT_KEY or GOOGLE_DRIVE_FOLDER_ID");
    process.exit(1);
  }

  // Authenticate with Google Drive
  const keyFile = JSON.parse(fs.readFileSync(keyPath, "utf-8"));
  const auth = new google.auth.GoogleAuth({
    credentials: keyFile,
    scopes: ["https://www.googleapis.com/auth/drive.readonly"],
  });

  const drive = google.drive({ version: "v3", auth });

  // List files in folder
  console.log("Listing files in Google Drive folder...");
  const res = await drive.files.list({
    q: `'${folderId}' in parents and mimeType contains 'image/' and trashed = false`,
    fields: "files(id, name, mimeType, createdTime, imageMediaMetadata)",
    pageSize: 1000,
  });

  const files = res.data.files || [];
  console.log(`Found ${files.length} images`);

  let uploaded = 0;
  let skipped = 0;

  for (const file of files) {
    if (!file.id || !file.name) continue;

    // Check if already migrated (idempotent)
    const existing = await prisma.photo.findFirst({
      where: { storagePath: `photos/gdrive-${file.id}-${file.name}` },
    });

    if (existing) {
      console.log(`Skipping ${file.name} (already migrated)`);
      skipped++;
      continue;
    }

    try {
      // Download file
      console.log(`Downloading ${file.name}...`);
      const fileRes = await drive.files.get(
        { fileId: file.id, alt: "media" },
        { responseType: "arraybuffer" }
      );

      const buffer = Buffer.from(fileRes.data as ArrayBuffer);
      const ext = path.extname(file.name).toLowerCase() || ".jpg";
      const storagePath = `photos/gdrive-${file.id}-${file.name}`;

      // Upload to Supabase Storage
      console.log(`Uploading ${file.name} to Supabase...`);
      const { error } = await supabase.storage
        .from("photos")
        .upload(storagePath, buffer, {
          contentType: file.mimeType || "image/jpeg",
          upsert: false,
        });

      if (error) {
        console.error(`Upload error for ${file.name}:`, error.message);
        continue;
      }

      const { data: { publicUrl } } = supabase.storage
        .from("photos")
        .getPublicUrl(storagePath);

      // Extract metadata from Google Drive
      const meta = file.imageMediaMetadata;
      const width = meta?.width || null;
      const height = meta?.height || null;
      const dateTaken = file.createdTime ? new Date(file.createdTime) : null;

      // Create DB record
      await prisma.photo.create({
        data: {
          url: publicUrl,
          storagePath,
          dateTaken,
          caption: null,
          album: "Google Drive Import",
          width,
          height,
        },
      });

      uploaded++;
      console.log(`Migrated: ${file.name} (${uploaded}/${files.length})`);
    } catch (err) {
      console.error(`Failed to migrate ${file.name}:`, err);
    }
  }

  console.log(`\nMigration complete!`);
  console.log(`Uploaded: ${uploaded}`);
  console.log(`Skipped: ${skipped}`);
  console.log(`Errors: ${files.length - uploaded - skipped}`);

  await prisma.$disconnect();
}

main().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
