import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['Open Sans'],
        raleway: ['Raleway'],
      },
      colors: {
        'persian-red': {
          '50': '#fef2f2',
          '100': '#fde3e3',
          '200': '#fccdcc',
          '300': '#f9a9a8',
          '400': '#f37876',
          '500': '#e94d4a',
          '600': '#cb2b28',
          '700': '#b32522',
          '800': '#95211f',
          '900': '#7c2220',
          '950': '#430d0c',
        },
      },
    },
  },
  plugins: [],
};
export default config;
