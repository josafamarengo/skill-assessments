/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-light": "#0a66c2",
        "secondary-light": "#ffffff",
        "bg-light": "#f3f2ef",
        "icon-light": "#666666",
        "icon-focus-light": "#191919",
        "primary-dark": "#e9e9ea",
        "secondary-dark": "#1d2226",
        "tertiary-dark": "#ededee",
        "bg-dark": "#000000",
        "icon-dark": "#bbbdbe",
        "icon-focus-dark": "#e9e9ea",
      },
    },
  },
  plugins: [],
};