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
            secondary: '#292929',
          },
          text: {
            primary: '#ebebeb',
            secondary: '#d6d6d6'
          }
        },
        light: {
          background: {
            primary: '#ebebeb',
            secondary: '#d6d6d6',
          },
          text: {
            primary: '#141414',
            secondary: '#292929'
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