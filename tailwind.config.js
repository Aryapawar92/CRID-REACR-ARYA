/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        popp: ["Poppins"],
        space: ["Space Grotesk"],
        redHat: ["Red Hat Display"],
      },

      colors: {
        "custom-dark-blue": "rgb(2, 6, 23)",
      },
    },
  },
  plugins: [],
};
