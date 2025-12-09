/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "bona-nova": ["BonaNova", "serif"],
        "chivo-mono": ["ChivoMono", "monospace"],
        "myriad-pro": ["MyriadPro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
