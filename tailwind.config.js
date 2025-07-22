export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        dancing: ['Dancing Script', 'cursive'],
      },
      colors: {
        orange: {
          primary: '#eb833e',
          secondary: '#d15739',
        },
      },
      boxShadow: {
        'custom': '0 4px 14px 0 rgba(209, 87, 57, 0.3)',
      },
    },
  },
  plugins: [],
}