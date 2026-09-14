/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#DC143C',   // Merah (Crimson Red)
        secondary: '#1E40AF',  // Biru (Blue)
        accent: '#FCD34D',     // Kuning (Yellow)
      },
    },
  },
  plugins: [],
};
