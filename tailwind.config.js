/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      'dark-blue': '#1A232A',
      'grayish-blue': '#BAC7D7',
      silver: '#E8E9EB',
      'primary-orange': '#EB520C',
      'secondary-orange': '#F28451',
    },
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          paddingLeft: '16px',
          paddingRight: '16px',
          margin: 'auto',
          '@screen sm': {
            maxWidth: '1160px',
            paddingLeft: '30px',
            paddingRight: '30px',
            margin: 'auto',
          },
        },
      });
    },
  ],
};
