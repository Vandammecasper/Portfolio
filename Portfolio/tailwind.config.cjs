/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "anti-flash-white": "#F0F3F4",
        "orange-peel": "#FF9F1C",
        "caribbean-current": "#16697A",
        "federal-blue": "#080357",
      },
    },
  },
  plugins: [],
}