import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { reminderSchema } from "@/lib/validations";

export async function GET() {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const reminders = await prisma.reminder.findMany({
    where: { userId: session.user.id },
    include: { photo: true },
    orderBy: { reminderDate: "asc" },
  });

  return NextResponse.json(reminders);
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();

  // Toggle email reminders setting
  if (body.toggleReminders !== undefined) {
    const user = await prisma.user.update({
      where: { id: session.user.id },
      data: { emailRemindersEnabled: body.toggleReminders },
    });
    return NextResponse.json({ emailRemindersEnabled: user.emailRemindersEnabled });
  }

  // Create reminder
  const parsed = reminderSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const data = parsed.data;
  const reminder = await prisma.reminder.create({
    data: {
      userId: session.user.id,
      photoId: data.photoId,
      reminderDate: new Date(data.reminderDate),
    },
  });

  return NextResponse.json(reminder, { status: 201 });
}
