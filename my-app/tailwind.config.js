/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      grey: '#3C3939',
      light: '#A4A719',
      lightTransparent: 'rgba(164, 167, 25, 0.71)',
      active: '#D6DA09',
      cardCover: 'rgba(0,0,0,0.3)',
    },
    fontFamily: {
      kalam: ['Kalam', 'cursive'],
    },
    extend: {
      lineHeight: {
        12: '3rem',
        14: '4rem',
        16: '5rem',
      },
      dropShadow: {
        main: 'box-shadow(2px 4px 6px rgba(0, 0, 0, 0.25)));',
      },
    },
  },
  plugins: [],
};
