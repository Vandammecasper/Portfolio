/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
      },
      boxShadow: {
        'header': '0 3px 6px 0 #dadbe0;',
      },
      colors: {
        "anti-flash-white": "#F0F3F4",
        "orange-peel": "#FF9F1C",
        "caribbean-current": "#16697A",
        "federal-blue": "#080357",
      },
      screens: {
        'xsm': '480px',
        // => @media (min-width: 480px) { ... }
  
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
  
        '3xl': '1920px',
        // => @media (min-width: 1920px) { ... }
      },
    },
  },
  plugins: [],
}