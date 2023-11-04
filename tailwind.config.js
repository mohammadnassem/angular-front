/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    './node_modules/preline/dist/*.js',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    container: {
      center: true,
      DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
    },
    extend: {},
  },
  prefix: 'tw-',
  plugins: [
    require('preline/plugin'),
    require("daisyui"),
    require('flowbite/plugin'),
  ],
}

