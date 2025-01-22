/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E5D0AC", // Dominant color for buttons, headers, and call-to-action elements
        secondary: "#ADA991", // Highlighting or complementing elements
        danger: "#E88D67", // Alerts, error states, or special offers
        favourite: "#F3F7EC", // Backgrounds and neutral typography
        background: "#f2efe7", // Background color for the entire page
      },
      fontFamily: {
        primary: ["Montserrat", "serif"],
        secondary: ["Nunito Sans", "serif"],
      },
    },
  },
  plugins: [],
};
