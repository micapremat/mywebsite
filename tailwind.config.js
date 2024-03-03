/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#E5006C'
      }
    },
    fontFamily: {
      'body': ['"Roboto", sans-serif']
    }
  },
  plugins: [],
}

