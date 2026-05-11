/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f1f4fb',
          100: '#dde4f3',
          200: '#bdcae7',
          300: '#92a7d6',
          400: '#6680c0',
          500: '#4663a8',
          600: '#324d8a',
          700: '#2a3f6f',
          800: '#21305a',
          900: '#16213d',
          950: '#0d1428',
        },
        accent: {
          DEFAULT: '#f59e0b',
          dark: '#d97706',
        },
        success: '#10b981',
        danger: '#ef4444',
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Hiragino Sans"',
          '"Hiragino Kaku Gothic ProN"',
          '"Yu Gothic"',
          'Meiryo',
          'sans-serif',
        ],
      },
      boxShadow: {
        soft: '0 4px 14px 0 rgba(22, 33, 61, 0.08)',
      },
    },
  },
  plugins: [],
};
