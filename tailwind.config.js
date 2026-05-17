/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        honey:        '#F5B800',
        'honey-dk':   '#D99A00',
        'deep-blue':  '#0E3B6B',
        cream:        '#FFF8E7',
        green:        '#2E8B57',
        'soft-white': '#FAFAF7',
      },
      fontFamily: {
        display: ['Comfortaa', 'system-ui', 'sans-serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(14,59,107,0.15)',
        ring: '0 0 0 4px rgba(245,184,0,0.25)',
      },
    },
  },
  plugins: [],
};
