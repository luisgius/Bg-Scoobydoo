"use client";

import Link from "next/link";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { PageTransition } from "@/components/layout/PageTransition";

export default function AdminPage() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="font-serif text-4xl font-bold mb-8">Admin Dashboard</h1>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <h2 className="font-serif text-xl font-semibold">Photo Upload</h2>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[var(--muted-foreground)] mb-4">
                Upload new photos with EXIF data extraction and metadata.
              </p>
              <Link href="/admin/upload">
                <Button size="sm">Upload Photos</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="font-serif text-xl font-semibold">Diary Entries</h2>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[var(--muted-foreground)] mb-4">
                View and manage all diary entries, add Bulgarian translations.
              </p>
              <Link href="/diary">
                <Button variant="outline" size="sm">Manage Entries</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="font-serif text-xl font-semibold">Map Locations</h2>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[var(--muted-foreground)] mb-4">
                Add new locations and manage existing pins on the map.
              </p>
              <Link href="/map">
                <Button variant="outline" size="sm">Manage Map</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="font-serif text-xl font-semibold">Calendar</h2>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[var(--muted-foreground)] mb-4">
                View the memory calendar with posts and photos by date.
              </p>
              <Link href="/calendar">
                <Button variant="outline" size="sm">View Calendar</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageTransition>
  );
}
