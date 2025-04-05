/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./website/**/*.{ts,tsx}", // Your Next.js app
    "./src/**/*.{ts,tsx}", // Your Poppr component library
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
