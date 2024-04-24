/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          background: {
            primary: '#141414',
            secondary: '#242424',
          },
          text: {
            primary: '#fafafa'
          }
        },
        light: {
          background: {
            primary: '#fafafa',
            secondary: '#ebebeb',
          },
          text: {
            primary: '#141414',
            secondary: '#242424'
          }
        },
        theme: {
          dark: '#005c99',
          light: '#007acc'
        },
        skeleton: {
          dark: '#3d3d3d',
          light: '#c2c2c2'
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
  darkMode: 'selector',
}