/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary-brown': '#8B7355',
        'secondary-brown': '#A0826D',
        'dark-brown': '#5C4A3A',
        'light-brown': '#C4B5A0',
        'cream': '#F5F1E8',
        'beige': '#E8DCC8',
        'dark-gray': '#333333',
        'medium-gray': '#666666',
        'light-gray': '#999999',
        'off-white': '#FAFAF8',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}