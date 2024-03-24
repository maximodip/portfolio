import animations from "@midudev/tailwind-animations";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#1f1f1f",
        secondary: "#ddd",
        aqua: "#7acded",
        aqua2: "#2d6ca0",
      },
    },
  },
  darkMode: "class",
  plugins: [animations],
};
