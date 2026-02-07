"use client";

import { PhotoUploadForm } from "@/components/admin/PhotoUploadForm";
import { PageTransition } from "@/components/layout/PageTransition";

export default function UploadPage() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="font-serif text-4xl font-bold mb-2">Upload Photos</h1>
        <p className="text-[var(--muted-foreground)] mb-8">
          Drop your photos below. EXIF data (date, location, camera) will be extracted automatically.
        </p>
        <PhotoUploadForm />
      </div>
    </PageTransition>
  );
}
