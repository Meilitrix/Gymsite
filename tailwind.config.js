/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '500px',
      'md': '960px',
    },
 
        extend: {
          fontFamily: {
            poppin: ['Poppins'],
            averia: ['Averia Serif Libre'],
          },
        },
      },
  
  plugins: [],
}