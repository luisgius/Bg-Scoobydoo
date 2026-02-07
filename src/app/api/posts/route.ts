import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { postSchema } from "@/lib/validations";
import { slugify } from "@/lib/utils";
import type { PostCategory } from "@prisma/client";

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category") as PostCategory | null;

  const posts = await prisma.post.findMany({
    where: category ? { category } : undefined,
    orderBy: { publishedAt: "desc" },
  });

  return NextResponse.json(posts);
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const body = await req.json();
  const parsed = postSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const data = parsed.data;
  const post = await prisma.post.create({
    data: {
      title: data.title,
      slug: data.slug || slugify(data.title),
      contentEn: data.contentEn,
      contentBg: data.contentBg ?? null,
      category: data.category,
      publishedAt: new Date(data.publishedAt),
    },
  });

  return NextResponse.json(post, { status: 201 });
}
