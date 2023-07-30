/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {

    fontFamily: {
      'kumbhSans': ['Kumbh Sans'],
    },

    screens: {
      'phone': '640px',
      'tablet': '768px',
      'laptop': '1024px',

    },

    colors: {
      white: '#FFFFFF',
      lightGrey: '#F4F6F8',
      grey: '#9DAEC2',
      darkGrey: '#6E8098',
      violet: '#5964e0',
      lightViolet: '#939BF4',
      blue: '#5964E0',
      veryDarkBlue: '#19202D',
      midnight: '#121721'
    },
    backgroundImages :{
      'mobileBanner': "url('/assets/mobile/bg-pattern-header.svg')",
      'tabletBanner': "url('/assets/tablet/bg-pattern-header.svg')",
      'desktopBanner': "url('/assets/desktop/bg-pattern-header.svg')",
    },
    extend: {},
  },
  plugins: [],
}