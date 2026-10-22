/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: '#034F36',
          action: '#087C50',
          soft: '#E6F3EA',
          cloud: '#F6FBF7',
          leaf: '#B0EA48',
          dark: '#023122',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
