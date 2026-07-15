/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        night: { DEFAULT: '#0d0d1a', light: '#1a1a2e', dark: '#080812' },
        gold: { DEFAULT: '#e8a838', light: '#f5c25a', dark: '#d4952a' },
        mist: { DEFAULT: '#f8f8fc', light: '#ffffff', dark: '#eaeaef' },
      },
      animation: {
        'glow-warm': 'glowWarm 3s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
      },
      keyframes: {
        glowWarm: {
          '0%': { boxShadow: '0 0 30px rgba(232,168,56,0.1), 0 0 60px rgba(232,168,56,0.05)' },
          '100%': { boxShadow: '0 0 50px rgba(232,168,56,0.25), 0 0 100px rgba(232,168,56,0.1)' },
        },
        float: { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-10px)' } },
        pulseSoft: { '0%,100%': { opacity: '0.2' }, '50%': { opacity: '0.5' } },
        twinkle: { '0%,100%': { opacity: '0.3' }, '50%': { opacity: '0.8' } },
      },
    },
  },
  plugins: [],
}
