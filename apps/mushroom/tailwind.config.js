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
    'w-12/12',
    'sm:w-1/12',
    'sm:w-2/12',
    'sm:w-3/12',
    'sm:w-4/12',
    'sm:w-5/12',
    'sm:w-6/12',
    'sm:w-7/12',
    'sm:w-8/12',
    'sm:w-9/12',
    'sm:w-10/12',
    'sm:w-11/12',
    'sm:w-12/12',
    'md:w-1/12',
    'md:w-2/12',
    'md:w-3/12',
    'md:w-4/12',
    'md:w-5/12',
    'md:w-6/12',
    'md:w-7/12',
    'md:w-8/12',
    'md:w-9/12',
    'md:w-10/12',
    'md:w-11/12',
    'md:w-12/12',
    'lg:w-1/12',
    'lg:w-2/12',
    'lg:w-3/12',
    'lg:w-4/12',
    'lg:w-5/12',
    'lg:w-6/12',
    'lg:w-7/12',
    'lg:w-8/12',
    'lg:w-9/12',
    'lg:w-10/12',
    'lg:w-11/12',
    'lg:w-12/12',
    'xl:w-1/12',
    'xl:w-2/12',
    'xl:w-3/12',
    'xl:w-4/12',
    'xl:w-5/12',
    'xl:w-6/12',
    'xl:w-7/12',
    'xl:w-8/12',
    'xl:w-9/12',
    'xl:w-10/12',
    'xl:w-11/12',
    'xl:w-12/12',
    '2xl:w-1/12',
    '2xl:w-2/12',
    '2xl:w-3/12',
    '2xl:w-4/12',
    '2xl:w-5/12',
    '2xl:w-6/12',
    '2xl:w-7/12',
    '2xl:w-8/12',
    '2xl:w-9/12',
    '2xl:w-10/12',
    '2xl:w-11/12',
    '2xl:w-12/12',
    'col-span-1',
    'col-span-2',
    'col-span-3',
    'col-span-4',
    'col-span-5',
    'col-span-6',
    'col-span-7',
    'col-span-8',
    'col-span-9',
    'col-span-10',
    'col-span-11',
    'col-span-12'
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
      width: {
        '12/12': '100%'
      },
      gridColumn: {
        'span-12': 'span 12 / span 12'
      },
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
