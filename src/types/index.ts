import type { Post, Photo, Location, User, Reminder, PostCategory, Role } from "@prisma/client";

export type { Post, Photo, Location, User, Reminder, PostCategory, Role };

export type PostWithRelations = Post;

export type PhotoWithLocation = Photo & {
  location: Location | null;
};

export type LocationWithPhotos = Location & {
  photos: Photo[];
};

export type CalendarDay = {
  date: string;
  posts: Pick<Post, "id" | "title" | "slug" | "category">[];
  photos: Pick<Photo, "id" | "url" | "caption" | "dateTaken">[];
};

export type CalendarMonth = {
  year: number;
  month: number;
  days: CalendarDay[];
};

export type Language = "en" | "bg";
