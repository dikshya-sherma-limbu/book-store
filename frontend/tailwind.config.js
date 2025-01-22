/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFCE1A",
        secondary: "#0D0842",
        danger: "#F3F3F3",
        favourite: "#FFCE1A",
      },
      fontFamily: {
        primary: ["Montserrat", "serif"],
        secondary: ["Nunito Sans", "serif"],
      },
    },
  },
  plugins: [],
};
