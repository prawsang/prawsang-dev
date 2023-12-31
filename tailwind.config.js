/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '520px',
        sm: '760px',
        md: '960px',
        lg: '1280px',
        xl: '1440px',
      },
      colors: {
        base: {
          100: '#E9E9E9',
          200: '#DBDBE0',
          300: '#A8AAC1',
          400: '#4F5370',
          800: '#32344A',
          900: '#181819',
        },
        primary: {
          DEFAULT: '#9E6DDD',
          500: '#9E6DDD',
          300: '#9E6DDD99',
          100: '#DBDBE0',
        },
        orange: '#D0820D',
        turquiose: '#60D9A8',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        mono: ['var(--font-roboto-mono)']
      }
    },
  },
  plugins: [],
}
