/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#181818',
        primary: '#d2daff',
        secondry: '#aac4ff',
        alternate: '#b1b2ff',
      },
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
