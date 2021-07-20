module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    height: {
      heightphone: '700px',
      heightscreen: '590px',
    },
    width: {
      widthphone: '350px',
      widthscreen: '303px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
