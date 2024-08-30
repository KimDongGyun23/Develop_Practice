import type { Config } from 'tailwindcss'

import {
  backgroundImage,
  boxShadow,
  colors,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
} from './src/styles'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/feature/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontWeight,
    extend: {
      fontFamily,
      backgroundImage,
      backgroundColor: colors,
      colors,
      fontSize,
      lineHeight,
      boxShadow,
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwind-scrollbar-hide')],
}
export default config
