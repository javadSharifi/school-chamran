module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Vazir', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
};
