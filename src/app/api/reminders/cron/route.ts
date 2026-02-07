import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getResend } from "@/lib/resend";
import { ReminderEmail } from "@/emails/ReminderEmail";
import { format } from "date-fns";

export async function GET(req: NextRequest) {
  // Verify cron secret
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const today = new Date();
  const todayMonth = today.getMonth() + 1;
  const todayDay = today.getDate();

  // Find photos taken on this day in any year
  const photos = await prisma.photo.findMany({
    where: {
      dateTaken: { not: null },
    },
    include: { location: true },
  });

  const matchingPhotos = photos.filter((photo) => {
    if (!photo.dateTaken) return false;
    const d = new Date(photo.dateTaken);
    return d.getMonth() + 1 === todayMonth && d.getDate() === todayDay;
  });

  if (matchingPhotos.length === 0) {
    return NextResponse.json({ message: "No anniversaries today", sent: 0 });
  }

  // Get users with reminders enabled
  const users = await prisma.user.findMany({
    where: { emailRemindersEnabled: true },
  });

  let sent = 0;

  for (const user of users) {
    for (const photo of matchingPhotos) {
      try {
        await getResend().emails.send({
          from: process.env.REMINDER_FROM_EMAIL || "reminders@example.com",
          to: user.email,
          subject: `Memory from ${format(photo.dateTaken!, "MMMM d")} &#x1F451;`,
          react: ReminderEmail({
            photoUrl: photo.url,
            caption: photo.caption || undefined,
            locationName: photo.location?.name || undefined,
            dateTaken: format(photo.dateTaken!, "MMMM d, yyyy"),
            recipientName: user.name,
          }),
        });

        await prisma.reminder.create({
          data: {
            userId: user.id,
            photoId: photo.id,
            reminderDate: today,
            sent: true,
            sentAt: new Date(),
          },
        });

        sent++;
      } catch (err) {
        console.error(`Failed to send reminder to ${user.email}:`, err);
      }
    }
  }

  return NextResponse.json({ message: "Reminders sent", sent });
}
