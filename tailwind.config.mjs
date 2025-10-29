/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#4338CA", // A strong, modern violet-blue
        "background-light": "#F8FAFC", // Very light gray for light mode
        "background-dark": "#0B1120", // Deep navy blue for dark mode
      },
      fontFamily: {
        display: ["Satoshi", "sans-serif"], // Using Satoshi for display text as requested
        sans: ["Inter", "sans-serif"], // Using Inter for body text for legibility
      },
      borderRadius: {
        DEFAULT: "0.75rem", // 12px
        lg: "1rem", // 16px
        xl: "1.5rem", // 24px
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "float-normal": "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};