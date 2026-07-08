/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Neutral warm palette
        cream: {
          50: '#FAF9F7',
          100: '#F5F3EF',
          200: '#EBE8E1',
          300: '#D9D4CA',
          400: '#B8B1A3',
          500: '#948C7D',
          600: '#6E685C',
          700: '#4A463E',
          800: '#2E2C27',
          900: '#1C1B18',
        },
        // Accent: sage green premium
        sage: {
          400: '#9CAF88',
          500: '#7A9368',
          600: '#5F7A50',
          700: '#4A613E',
        },
        // Accent gradient purple-blue alternative
        accent: {
          400: '#8B7FD9',
          500: '#6C5DD3',
          600: '#5548B0',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
