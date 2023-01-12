/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'leftbg': "url('src\assets\center_bg_landing_header.svg')",
      }
    },
  },
  plugins: [],
}