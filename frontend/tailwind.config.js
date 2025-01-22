/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F4EDD3", // A vibrant green for action buttons (e.g., Add to Cart)
        secondary: "#1E2022", // A deep charcoal for text and backgrounds
        danger: "#FF5252", // A bold red for error messages or important warnings
        favourite: "#FFD700", // A warm gold for favorite items or highlights
      },
      fontFamily: {
        primary: ["Montserrat", "serif"],
        secondary: ["Nunito Sans", "serif"],
      },
    },
  },
  plugins: [],
};
