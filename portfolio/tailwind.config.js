/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // we'll use a standard toggle but configure the colors using CSS variables
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        fg: 'var(--fg)',
        fg2: 'var(--fg2)',
        accent: 'var(--accent)',
        border: 'var(--border)',
        cardBg: 'var(--card-bg)',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
