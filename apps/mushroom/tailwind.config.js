const config = {
  content: [
    './pages/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './app/**/*.{ts,tsx,js,jsx}',
    './src/**/*.{ts,tsx,js,jsx}'
  ],
  safelist: [
    'w-1/12',
    'w-2/12',
    'w-3/12',
    'w-4/12',
    'w-5/12',
    'w-6/12',
    'w-7/12',
    'w-8/12',
    'w-9/12',
    'w-10/12',
    'w-11/12',
    'w-12/12'
    // Include other variations if needed
  ],
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        // gray: {
        //   ...colors.neutral
        // }
      },
      transitionDuration: {
        1200: '1200ms',
        1500: '1500ms'
      },
      keyframes: {
        shimmer: {
          '0%': {
            transform: 'translateX(-100%)'
          },
          '100%': {
            transform: 'translateX(100%)'
          }
        }
      },
      animation: {
        shimmer: 'shimmer 2s ease-in-out infinite'
      }
    }
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')]
};

export default config;
