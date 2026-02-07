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
  { value: "LOVE_LETTER", label: "Love Letter", labelBg: "Любовно писмо", color: "#C17B7B" },
  { value: "NIGHT_TALK", label: "Night Talk", labelBg: "Нощен разговор", color: "#7B8EC1" },
  { value: "REFLECTION", label: "Reflection", labelBg: "Размисъл", color: "#C5955A" },
  { value: "DIARY", label: "Diary", labelBg: "Дневник", color: "#7BAE7B" },
  { value: "MILESTONE", label: "Milestone", labelBg: "Важен момент", color: "#9B7BC1" },
  { value: "INTRODUCTION", label: "Introduction", labelBg: "Представяне", color: "#7BB5C1" },
] as const;

export const THEME_COLORS = {
  warm: {
    50: "#FDF8F0",
    100: "#F9EDDA",
    200: "#F0D9B5",
    300: "#E5C18A",
    400: "#D4A574",
    500: "#C5955A",
    600: "#A87A42",
    700: "#8B6E4E",
    800: "#6E5539",
    900: "#5A4530",
  },
  gold: {
    50: "#fdfaed",
    100: "#f9f0cb",
    200: "#f3e093",
    300: "#ecc95b",
    400: "#e6b534",
    500: "#C5955A",
    600: "#A87A42",
    700: "#8B6E4E",
    800: "#6E5539",
    900: "#5A4530",
  },
} as const;

export const SITE_NAME = "My Bulgarian Princess";
export const SITE_DESCRIPTION = "A love story told through diary entries, photos, and memories.";
