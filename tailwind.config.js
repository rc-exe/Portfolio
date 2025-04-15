/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: "#00f5ff",
        primary: "#4f46e5",
        secondary: "#6366f1",
        glassWhite: "rgba(255, 255, 255, 0.2)",
        glassDark: "rgba(0, 0, 0, 0.3)",
      },
      backdropBlur: {
        sm: "4px",
        md: "10px",
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/background.jpg')",
      },
    },
  },
  plugins: [],
};
