module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flex: {
        24: '0 1 24%',
        50: '0 1 47%',
      },
      backgroundColor: (theme) => ({
        primary: '#EBEBEB',
        secondary: '#ffed4a',
        danger: '#e3342f',
        dark: '#1C2022',
        'dark-gray': '#24282A',
      }),
      textColor: {
        primary: '#3490dc',
        secondary: '#ffed4a',
        danger: '#e3342f',
        dark: '#DADADA',
        'dark-gray': '#24282A',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
