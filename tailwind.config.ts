import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "primary-brown": "#5C4A3A",
        "secondary-brown": "#8B7355",
        "dark-brown": "#3F3226",
        "light-brown": "#C4B5A0",
        cream: "#F5F1E8",
        beige: "#E8DCC8",
        "dark-gray": "#333333",
        "medium-gray": "#666666",
        "light-gray": "#999999",
        "off-white": "#FAFAF8",
      },
    },
  },
} satisfies Config;
