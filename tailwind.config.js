/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#E5006C',
          100: '#ec2a86',
          200: '#f14093',
          300: '#f459a2'
        }
      }
    },
    fontFamily: {
      'body': ['"Roboto", sans-serif']
    }
  },
  plugins: [],
}

