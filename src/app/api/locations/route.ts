import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { locationSchema } from "@/lib/validations";

export async function GET() {
  // Auth temporarily disabled

  const locations = await prisma.location.findMany({
    include: { photos: true },
    orderBy: { visitDate: "desc" },
  });

  return NextResponse.json(locations);
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const body = await req.json();
  const parsed = locationSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const data = parsed.data;
  const location = await prisma.location.create({
    data: {
      name: data.name,
      lat: data.lat,
      lng: data.lng,
      description: data.description ?? null,
      visitDate: data.visitDate ? new Date(data.visitDate) : null,
    },
  });

  return NextResponse.json(location, { status: 201 });
}
