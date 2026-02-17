/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        DeepNavy: '#0A2463',
        Cream: '#FAF8F3',
        OrangeAccent: '#FF6B35',
        Orange: '#F59E0B',
        LightBlueGray: '#F0F4F8',
        DarkNavy: '#2D4659',
      }
    },
  },
  plugins: [],
}

