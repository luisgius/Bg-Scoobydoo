export const NAV_LINKS = [
  { href: "/diary", label: "Diary", labelBg: "Дневник" },
  { href: "/gallery", label: "Gallery", labelBg: "Галерия" },
  { href: "/map", label: "Our Map", labelBg: "Нашата карта" },
  { href: "/calendar", label: "Calendar", labelBg: "Календар" },
] as const;

export const ADMIN_NAV_LINKS = [
  { href: "/admin", label: "Dashboard", labelBg: "Табло" },
  { href: "/admin/upload", label: "Upload", labelBg: "Качване" },
] as const;

export const CATEGORIES = [
  { value: "LOVE_LETTER", label: "Love Letter", labelBg: "Любовно писмо", color: "bg-rose-500" },
  { value: "NIGHT_TALK", label: "Night Talk", labelBg: "Нощен разговор", color: "bg-indigo-500" },
  { value: "REFLECTION", label: "Reflection", labelBg: "Размисъл", color: "bg-amber-500" },
  { value: "DIARY", label: "Diary", labelBg: "Дневник", color: "bg-emerald-500" },
  { value: "MILESTONE", label: "Milestone", labelBg: "Важен момент", color: "bg-purple-500" },
  { value: "INTRODUCTION", label: "Introduction", labelBg: "Представяне", color: "bg-sky-500" },
] as const;

export const THEME_COLORS = {
  burgundy: {
    50: "#fdf2f4",
    100: "#fce7eb",
    200: "#f9d0da",
    300: "#f4a9bb",
    400: "#ec7896",
    500: "#df4b74",
    600: "#cc2d5c",
    700: "#ab1f49",
    800: "#8f1d40",
    900: "#7a1c3b",
  },
  gold: {
    50: "#fdfaed",
    100: "#f9f0cb",
    200: "#f3e093",
    300: "#ecc95b",
    400: "#e6b534",
    500: "#d69a1e",
    600: "#b87817",
    700: "#965716",
    800: "#7b4519",
    900: "#66391a",
  },
} as const;

export const SITE_NAME = "My Bulgarian Princess";
export const SITE_DESCRIPTION = "A love story told through diary entries, photos, and memories.";
