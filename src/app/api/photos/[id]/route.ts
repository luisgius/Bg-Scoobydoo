import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { photoSchema } from "@/lib/validations";

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const photo = await prisma.photo.findUnique({
    where: { id: params.id },
    include: { location: true },
  });
  if (!photo) return NextResponse.json({ error: "Not found" }, { status: 404 });

  return NextResponse.json(photo);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await auth();
  if (!session || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const body = await req.json();
  const parsed = photoSchema.partial().safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const data = parsed.data;
  const photo = await prisma.photo.update({
    where: { id: params.id },
    data: {
      ...(data.caption !== undefined && { caption: data.caption }),
      ...(data.album !== undefined && { album: data.album }),
      ...(data.dateTaken !== undefined && { dateTaken: data.dateTaken ? new Date(data.dateTaken) : null }),
      ...(data.locationId !== undefined && { locationId: data.locationId }),
    },
  });

  return NextResponse.json(photo);
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await auth();
  if (!session || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  await prisma.photo.delete({ where: { id: params.id } });
  return NextResponse.json({ success: true });
}
