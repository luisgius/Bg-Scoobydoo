import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { photoSchema } from "@/lib/validations";

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const album = searchParams.get("album");
  const locationId = searchParams.get("locationId");

  const photos = await prisma.photo.findMany({
    where: {
      ...(album && { album }),
      ...(locationId && { locationId }),
    },
    include: { location: true },
    orderBy: { dateTaken: "desc" },
  });

  return NextResponse.json(photos);
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const body = await req.json();
  const parsed = photoSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const data = parsed.data;
  const photo = await prisma.photo.create({
    data: {
      url: data.url,
      storagePath: data.storagePath,
      dateTaken: data.dateTaken ? new Date(data.dateTaken) : null,
      caption: data.caption ?? null,
      album: data.album ?? null,
      width: data.width ?? null,
      height: data.height ?? null,
      locationId: data.locationId ?? null,
    },
  });

  return NextResponse.json(photo, { status: 201 });
}
