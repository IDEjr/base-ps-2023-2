/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pressStart: 'var(--font-press-start)',
      },
      colors: {
        idePurple: "#603B88",
        ideRed: "#B22559",
        plant: "#3B8863",
        fire: "#AD3F3F",
        water: "#3B6388",
        footer: "#353535",
        about: "#242424",
      },
    },
  },
  plugins: [],
}