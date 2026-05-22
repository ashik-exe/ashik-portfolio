/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        bgDark: '#0d0d0d',
        primaryRed: '#FF0000',
        accentGold: '#FFD700',
        textWhite: '#FFFFFF',
        panelDark: '#1a1a1a',
      },
      boxShadow: {
        'glow-red': '0 0 25px rgba(255, 0, 0, 0.6)',
        'glow-gold': '0 0 25px rgba(255, 215, 0, 0.4)',
      },
    },
  },
  plugins: [],
}
