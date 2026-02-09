/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 1. Fonts yahan define kiye hain
      fontFamily: {
        hand: ['"Playwrite CA"', 'cursive'],
        body: ['"DM Sans"', 'sans-serif'],
        heading: ['"Bebas Neue"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'], // Fallback
      },
      // 2. Colors merge kar diye hain
      colors: {
        'dark-grey': '#1a1a1a', // Aapka custom color
        'pd-black': '#111111',
        'pd-gray': '#888888',
        'pd-light': '#F4F4F4',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}