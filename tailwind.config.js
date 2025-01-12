/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary50: '#16404D',
        
      },
    
      fontSize: {
        '6xl': '64px', 
        '5xl': '48px', 
        '4xl': '36px', 
        '3xl': '32px', 
        '2xl': '24px', 
        'xl': '20px', 
        'lg': '18px', 
        'base': '16px', 
        'sm': '14px', 
        'xs': '12px', 
      },
    },
  },
  plugins: [],
}
