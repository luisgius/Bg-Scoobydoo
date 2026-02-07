import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
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
          950: "#440a1c",
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
          950: "#3a1d0b",
        },
        cream: {
          50: "#fefdf8",
          100: "#fdf9ed",
          200: "#faf3d8",
          300: "#f5e8b8",
          400: "#eed78e",
          500: "#e5c25f",
          600: "#d4a83d",
          700: "#b18930",
          800: "#906d2c",
          900: "#775a28",
          950: "#432f12",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
