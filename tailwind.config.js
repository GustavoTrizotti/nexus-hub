/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      ...this.theme,
      colors: {
        transparent: "transparent",
        primary: "#AD6FEB",
        light: "#CF9EFF",
        secondaryLight: '#f1e3ff',
        secondary: "#2E2E2E",
        tertiary: "#4f4e4e",
        subjectRed: "#FFA0A0",
        subjectYellow: "#FFEAA0",
        subjectGreen: "#A0FFB0",
        subjectBlue: "#A0FFF9",
        subjectPurple: "#AEA0FF",
        subjectViolet: "#D0A5FB",
        subjectPink: "#F2A0FF"
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
