/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Extended content goes here
      colors: {
        gradientPrimary:"#40e0d0",
        gradientSecodndary:"#ff00ff",
        gradientTertiary:"#f77d11",
      },

      backgroundSize: {
        '200': '200% 200%',
      },

      animation: {
        'wave-bg': 'animated-wave-bg 3s ease infinite',
        marquee: 'marquee 25s linear infinite',
        flicker: 'flicker 3s linear infinite',
      },
      
      keyframes: {
        'animated-wave-bg': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        flicker:{
          '0%': { opacity: '0'},
          '50%': { opacity: '1'},
          '100%': { opacity: '0'},
        }
      },
    },
  },
  plugins: [],
};
