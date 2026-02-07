import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { locationSchema } from "@/lib/validations";

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const location = await prisma.location.findUnique({
    where: { id: params.id },
    include: { photos: true },
  });
  if (!location) return NextResponse.json({ error: "Not found" }, { status: 404 });

  return NextResponse.json(location);
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
  const parsed = locationSchema.partial().safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const data = parsed.data;
  const location = await prisma.location.update({
    where: { id: params.id },
    data: {
      ...(data.name && { name: data.name }),
      ...(data.lat !== undefined && { lat: data.lat }),
      ...(data.lng !== undefined && { lng: data.lng }),
      ...(data.description !== undefined && { description: data.description }),
      ...(data.visitDate !== undefined && {
        visitDate: data.visitDate ? new Date(data.visitDate) : null,
      }),
    },
  });

  return NextResponse.json(location);
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await auth();
  if (!session || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  await prisma.location.delete({ where: { id: params.id } });
  return NextResponse.json({ success: true });
}
