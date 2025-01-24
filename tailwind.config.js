/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Incluye todos los archivos HTML y TypeScript
  ],
  theme: {
    extend: {
      scrollSnapType: {
        y: 'y mandatory',
      },
      scrollBehavior: ['smooth'],
    },
  },
  plugins: [],
};
