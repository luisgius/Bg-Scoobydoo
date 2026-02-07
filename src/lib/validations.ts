import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

export const postSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  contentEn: z.string().min(1, "Content is required"),
  contentBg: z.string().nullable().optional(),
  category: z.enum(["LOVE_LETTER", "NIGHT_TALK", "REFLECTION", "DIARY", "MILESTONE", "INTRODUCTION"]),
  publishedAt: z.string().or(z.date()),
});

export const photoSchema = z.object({
  url: z.string().url(),
  storagePath: z.string(),
  dateTaken: z.string().or(z.date()).nullable().optional(),
  caption: z.string().nullable().optional(),
  album: z.string().nullable().optional(),
  width: z.number().nullable().optional(),
  height: z.number().nullable().optional(),
  locationId: z.string().nullable().optional(),
});

export const locationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  lat: z.number().min(-90).max(90),
  lng: z.number().min(-180).max(180),
  description: z.string().nullable().optional(),
  visitDate: z.string().or(z.date()).nullable().optional(),
});

export const reminderSchema = z.object({
  photoId: z.string(),
  reminderDate: z.string().or(z.date()),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type PostInput = z.infer<typeof postSchema>;
export type PhotoInput = z.infer<typeof photoSchema>;
export type LocationInput = z.infer<typeof locationSchema>;
export type ReminderInput = z.infer<typeof reminderSchema>;
