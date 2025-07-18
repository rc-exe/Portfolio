/** @type {import('tailwindcss').Config} */
module.exports = {
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
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out forwards',
        float: 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out infinite 3s',
        'gradient-x': 'gradient-x 10s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
