/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary50: '#E4ECFD',
        primary400: '#2B6EF1',
        primary600: '#093184',
        primary800: '#020A1A',
        secondary50: '#FFF5E5',
        secondary400: '#F6A62E',
        secondary700: '#804C00',
        secondary900: '#1A0F00',
        indicatorinfo1: '#0775F2',
        indicatorinfo2: '#BDDCFF',
        indicatorsec1: '#573CD9',
        indicatorsec2: '#CDC2FF',
        indicatordan1: '#E95050',
        indicatordan2: '#FFCACA',
        indicatorsuc1: '#2FC071',
        indicatorsuc2: '#C2FFDE',
        indicatorwarn1: '#EC8526',
        indicatorwarn2: '#FFD9B6',
        white:"#FFFFFF",
        white2:"#F4F6FC",  
        gray50:"#F5F5F5",     
        gray400:"#8C8C8C",     
        gray100:"#D9D9D9",     
    
      },
      fontFamily: {
        sans: ['"IBM Plex Sans Arabic"', 'sans-serif'],
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
