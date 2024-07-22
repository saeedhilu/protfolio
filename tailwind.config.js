/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#15161a',
        'custom-hash': 'rgb(21, 22, 23)',
      }, 
      boxShadow: {
        'custom-shadow': 'rgb(51,51,51)', 
        'custom-shadow-light': '0 4px 8px rgba(255, 255, 255, 0.5)', 
        
       
      },
     
    },
  },
  plugins: [],
}
