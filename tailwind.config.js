module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Gilda Display',
      secondary: 'Barlow',
      tertiary: 'Barlow Condensed',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1140px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: {
          DEFAULT: '#00bf63',
          hover: '#7ed957',
        },
      },
      backgroundImage: {
        room: "url('./assets/img/room.jpg')",
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      display: ["focus-group"]
    }
  }
};
