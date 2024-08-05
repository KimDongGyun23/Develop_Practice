/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F5E8DD',
        secondary: '#CCD3CA',
        success: '#B5C0D0',
        failure: '#EED3D9',
      },
    },
  },
  plugins: [],
};
