/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#1A1A1A',
        accent: '#F5A623',
        neon: '#5A5AFF'
      },
      fontFamily: {
        heading: ['"Press Start 2P"', 'monospace'],
        body: ['Montserrat', 'sans-serif']
      }
    }
  },
  plugins: []
}
