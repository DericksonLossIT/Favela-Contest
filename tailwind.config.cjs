/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "390px",
        lg: "1280px",
        xl: "1440px",
      },
      colors: {
        orange: "#F29100",
        black: "#18181b",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

module.exports = config;
