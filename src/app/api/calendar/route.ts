import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

import { startOfMonth, endOfMonth, format } from "date-fns";

export async function GET(req: NextRequest) {
  // Auth temporarily disabled

  const { searchParams } = new URL(req.url);
  const year = parseInt(searchParams.get("year") || String(new Date().getFullYear()));
  const month = parseInt(searchParams.get("month") || String(new Date().getMonth() + 1));

  const start = startOfMonth(new Date(year, month - 1));
  const end = endOfMonth(new Date(year, month - 1));

  const [posts, photos] = await Promise.all([
    prisma.post.findMany({
      where: {
        publishedAt: { gte: start, lte: end },
      },
      select: { id: true, title: true, slug: true, category: true, publishedAt: true },
    }),
    prisma.photo.findMany({
      where: {
        dateTaken: { gte: start, lte: end },
      },
      select: { id: true, url: true, caption: true, dateTaken: true },
    }),
  ]);

  // Group by day
  const days: Record<string, { posts: typeof posts; photos: typeof photos }> = {};

  for (const post of posts) {
    const key = format(post.publishedAt, "yyyy-MM-dd");
    if (!days[key]) days[key] = { posts: [], photos: [] };
    days[key].posts.push(post);
  }

  for (const photo of photos) {
    if (!photo.dateTaken) continue;
    const key = format(photo.dateTaken, "yyyy-MM-dd");
    if (!days[key]) days[key] = { posts: [], photos: [] };
    days[key].photos.push(photo);
  }

  const daysArray = Object.entries(days).map(([date, data]) => ({
    date,
    posts: data.posts,
    photos: data.photos,
  }));

  return NextResponse.json({
    year,
    month,
    days: daysArray,
  });
}
