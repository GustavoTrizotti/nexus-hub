/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      ...this.theme,
      colors: {
        transparent: "transparent",
        primary: "#AD6FEB",
        secondary: "#2E2E2E",
        tertiary: "#4f4e4e",
      },
    },
  },
  darkMode: "class",
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./navigation/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [],
};
