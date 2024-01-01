import withMT from '@material-tailwind/react/utils/withMT';

export default withMT({
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    'path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    'path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
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
        white2: '#f7f2f2',
        black2: '#1D1A16',
        complementary: {
          DEFAULT: '#1C59FF', // Bright Blue
          100: '#A7C3FF', // Lighter Shade
          200: '#6E9BFF', // Light Shade
          300: '#3452FF', // Medium Shade
          400: '#1C59FF', // Dark Shade
          500: '#143FC1', // Darkest Shade
          600: '#102C8C', // Extra Dark Shade
          700: '#0C1A57', // Very Dark Shade
          800: '#081724', // Super Dark Shade
          900: '#040C12' // Ultra Dark Shade
        },
        // Analogous Colors
        analogous: {
          DEFAULT: '#FFB51C', // Darker Orange
          100: '#FFDFA7',
          200: '#FFD56E',
          300: '#FFCA34',
          400: '#FFB51C',
          500: '#C18314',
          600: '#8D5B0C',
          700: '#594303',
          800: '#2D2100',
          900: '#150D00'
        },
        analogous2: {
          DEFAULT: '#FF1C4C', // Vibrant Red
          100: '#FFA7B9',
          200: '#FF6E8F',
          300: '#FF345E',
          400: '#FF1C4C',
          500: '#C11436',
          600: '#8D0C23',
          700: '#590612',
          800: '#2D0400',
          900: '#150200'
        },
        // Split Complementary Colors
        splitComplementary1: {
          DEFAULT: '#1CFF53', // Fresh Green
          100: '#A7FFC3',
          200: '#6EFF96',
          300: '#34FF5A',
          400: '#1CFF53',
          500: '#14C142',
          600: '#0F8F30',
          700: '#0A591F',
          800: '#052B10',
          900: '#021507'
        },
        splitComplementary2: {
          DEFAULT: '#1CFFB5', // Light Blue
          100: '#A7FFEB',
          200: '#6EFFE1',
          300: '#34FFD8',
          400: '#1CFFB5',
          500: '#14C1A0',
          600: '#0F8F80',
          700: '#0A595D',
          800: '#052B49',
          900: '#021514'
        },
        // Triadic Colors
        triadic1: {
          DEFAULT: '#1CFFBD', // Light Teal
          100: '#A7FFEC',
          200: '#6EFFE5',
          300: '#34FFDE',
          400: '#1CFFBD',
          500: '#14C1A9',
          600: '#0F8F94',
          700: '#0A595E',
          800: '#052B2F',
          900: '#021515'
        },
        triadic2: {
          DEFAULT: '#BD1CFF', // Rich Purple
          100: '#ECA7FF',
          200: '#E56EFF',
          300: '#DE34FF',
          400: '#BD1CFF',
          500: '#A914C1',
          600: '#8A0F8D',
          700: '#5C0A59',
          800: '#2E052B',
          900: '#15021A'
        },
        bone: {
          DEFAULT: '#DBD1B9',
          100: '#352d1b',
          200: '#6a5b37',
          300: '#a08852',
          400: '#bfad83',
          500: '#dbd1b9',
          600: '#e2dac6',
          700: '#e9e3d5',
          800: '#f0ece3',
          900: '#f8f6f1'
        },
        beaver: {
          DEFAULT: '#988C7A',
          100: '#1f1c18',
          200: '#3e3930',
          300: '#5d5548',
          400: '#7c7160',
          500: '#988c7a',
          600: '#ada495',
          700: '#c2baaf',
          800: '#d6d1ca',
          900: '#ebe8e4'
        },
        eerie_black: {
          DEFAULT: '#1D1A16',
          100: '#060504',
          200: '#0c0a09',
          300: '#11100d',
          400: '#171512',
          500: '#1d1a16',
          600: '#51493d',
          700: '#867765',
          800: '#b0a596',
          900: '#d8d2cb'
        },
        chamoisee: {
          DEFAULT: '#8C765F',
          100: '#1c1813',
          200: '#382f26',
          300: '#544739',
          400: '#705e4c',
          500: '#8c765f',
          600: '#a6927c',
          700: '#bcad9d',
          800: '#d2c8bd',
          900: '#e9e4de'
        },
        khaki: {
          DEFAULT: '#BAB09A',
          100: '#29251c',
          200: '#514937',
          300: '#7a6e53',
          400: '#9f9172',
          500: '#bab09a',
          600: '#c8c0af',
          700: '#d6d0c3',
          800: '#e4e0d7',
          900: '#f1efeb'
        },
        coffee: {
          DEFAULT: '#67462E',
          100: '#140e09',
          200: '#291c12',
          300: '#3d2a1c',
          400: '#523725',
          500: '#67462e',
          600: '#986744',
          700: '#bc8b69',
          800: '#d2b29b',
          900: '#e9d8cd'
        },
        bistre: {
          DEFAULT: '#3D2B1E',
          100: '#0c0906',
          200: '#19110c',
          300: '#251a12',
          400: '#312318',
          500: '#3d2b1e',
          600: '#76533a',
          700: '#ac7a57',
          800: '#c8a78f',
          900: '#e3d3c7'
        },
        bistre2: {
          DEFAULT: '#2D251D',
          100: '#090806',
          200: '#130f0c',
          300: '#1c1712',
          400: '#251f18',
          500: '#2d251d',
          600: '#645240',
          700: '#987d61',
          800: '#bba895',
          900: '#ddd4ca'
        },
        tan: {
          DEFAULT: '#C7A782',
          100: '#2e2215',
          200: '#5b4429',
          300: '#89663e',
          400: '#b38856',
          500: '#c7a782',
          600: '#d3b99c',
          700: '#decbb5',
          800: '#e9dcce',
          900: '#f4eee6'
        },
        van_dyke: {
          DEFAULT: '#3E342D',
          100: '#0c0a09',
          200: '#191512',
          300: '#251f1b',
          400: '#322a24',
          500: '#3e342d',
          600: '#6d5b4f',
          700: '#998373',
          800: '#bbaca2',
          900: '#ddd6d0'
        }
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
});