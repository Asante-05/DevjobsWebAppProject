/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {

    fontFamily: {
      'kumbhSans': ['Kumbh Sans'],
    },

    colors: {
      white: '#FFFFFF',
      lightGrey: '#F4F6F8',
      grey: '#9DAEC2',
      darkGrey: '#6E8098',
      violet: '#5964e0',
      lightViolet: '#939BF4',
      veryDarkBlue: '#19202D',
      midnight: '#121721'
    },
    backgroundImages :{
      'mobileBanner': "url('/assets/mobile/bg-pattern-header.svg')",
    },
    extend: {},
  },
  plugins: [],
}