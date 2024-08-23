/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-primary-color": "#800000",
        "custom-secondary-color": "#DAA520",
        "custom-bg-color": "#FFFFED",
      },
    },
  },
  plugins: [],
};
