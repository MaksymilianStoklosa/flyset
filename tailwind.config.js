/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af', // Niebieski
        secondary: '#f59e0b', // Pomarańczowy
        accent: '#10b981', // Zielony
      },
    },
  },
  plugins: [],
};
