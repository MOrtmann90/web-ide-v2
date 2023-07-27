/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      mainCol: "#102531",
      secCol: "#eaeaea",
      accentCol: "#2b8f88"
    }
  },
  plugins: [require("flowbite/plugin")]
};
