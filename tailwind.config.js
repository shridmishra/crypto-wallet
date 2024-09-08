// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./app/**/*.{js,jsx}", // Adjust based on your directory structure
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust based on your directory structure
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        customPink: '#eec3e8',
        customBlue: '#f0f7ff',
      },
    },
  },
  plugins: [],
}
