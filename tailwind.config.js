/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // enable dark mode via class
  theme: {
    extend: {
      colors: {
        primary: "#0f172a", // slate 900
        secondary: "#1e293b", // slate 800
        accent: {
          cyan: "#06b6d4",
          purple: "#a855f7",
          pink: "#ec4899",
        },
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon-cyan': '0 0 10px #06b6d4, 0 0 20px #06b6d4',
        'neon-purple': '0 0 10px #a855f7, 0 0 20px #a855f7',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
    },
  },
  plugins: [],
}
