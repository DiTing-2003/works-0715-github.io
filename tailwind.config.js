/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ice: { DEFAULT: '#f0f5ff', light: '#f8faff', dark: '#e8f0fe' },
        sky: { DEFAULT: '#3b82f6', light: '#60a5fa', dark: '#2563eb', soft: '#dbeafe' },
        slate: { light: '#f1f5f9', DEFAULT: '#64748b', dark: '#1e293b', muted: '#94a3b8' },
        border: { DEFAULT: '#e2e8f0', hover: '#93c5fd' },
        card: '#ffffff',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%,100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
}
