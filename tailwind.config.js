/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'main': '#050313',  
        'primary': '#ff1f00',
        'secondary': '#ff6b00',
        'tertiary':'#ffc700',
      },

      fontFamily: {
        'heading': ['Sujoka', 'sans-serif'],
        'logo': ['Noto-Sans-Javanese'],
        'body': ['Montserrat'],
      },
    },
  },
  plugins: [],
}
