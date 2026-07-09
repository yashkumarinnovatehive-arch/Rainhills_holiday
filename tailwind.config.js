/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#0b1610',
          900: '#11291e',
          800: '#1b402e',
          700: '#25573f',
        },
        cream: {
          50: '#ffffff',
          100: '#fdfaf5',
          200: '#f5efe3',
        },
        accent: {
          gold: '#c9a84c',
          'gold-hover': '#b88a2a',
        },
        olive: {
          500: '#697a5b',
          600: '#526245',
        },
        mist: {
          300: '#b0c4b1',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      scale: {
        '103': '1.03',
      },
      animation: {
        'ken-burns': 'ken-burns 20s ease-out infinite alternate',
        'fade-in': 'fade-in 1.5s ease-out forwards',
      },
      keyframes: {
        'ken-burns': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
