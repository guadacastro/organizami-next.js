/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bone: "var(--bone)",
        pink: "var(--pink)",
        blue: "var(--blue)",
        violet: "var(--violet)",
        orange: "var(--orange)",
        shadow1: "var(--shadow-1)",
        gradient1: "var(--gradient-1)",
        gradient2: "var(--gradient-2)",
      },
    },
  },
  plugins: [],
};
