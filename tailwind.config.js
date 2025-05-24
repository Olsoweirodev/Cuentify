/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
 './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
 extend: {
   colors: {
     primary: '#FF5E00',
   },
   fontFamily: {
     inter: ['Inter', 'sans-serif'],
   },
 },
  },
  plugins: [],
}
