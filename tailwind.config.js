/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Ensure this path is correct for your main HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Including all JS/TS and JSX/TSX files in the src folder
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#010917',
        'custom-hash': 'rgb(21, 22, 23)',
        'nav-btn':'#17171b',
        'nav-btn-hover':'#2e2f32',
        'section':'#191f2f',
        'section-imp':'#291c1f',
        
      }, 
      boxShadow: {
        'custom-shadow': 'rgb(51,51,51)', 
        'grshadow':'#151619',
        'custom-shadow-light': '0 4px 8px rgba(255, 255, 255, 0.5)', 
        'custom-shadow-black': '0 4px 6px rgba(0, 0, 0, 0.5)', // Black shadow
        'custom-shadow-light-white': '0 0 8px rgba(255, 255, 255, 0.3)',
      },
     
    },
  },

  plugins: [],
}
