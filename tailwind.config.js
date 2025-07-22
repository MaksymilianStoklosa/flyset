/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Nowa paleta kolorów
        primary: "#232C33", // Ciemny granatowy
        secondary: "#4297A5", // Niebieski
        accent: "#51F4E0", // Jasny turkusowy

        // Skala szarości
        dark: "#111111", // Czarny
        "gray-800": "#232C33",
        "gray-700": "#3B4B56",
        "gray-600": "#546B7A",
        "gray-500": "#6B6B6B",
        "gray-400": "#999999",
        "gray-300": "#B7B7B7",
        "gray-200": "#D9D9D9",
        light: "#FFFFFF", // Biały

        // Kolory turkusowe/niebieskie
        "blue-600": "#7795AA",
        "teal-700": "#597D7C",
        "teal-500": "#73A09D",
        "teal-400": "#8BC1BE",
        "teal-200": "#AEEDEA",
        "cyan-400": "#51F4E0",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
