import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primery: "#FF8000",
        secondary: "#606060",
        black: '#101010',
        black_secondary: '#212529',
        white: '#FFFFFF',
        background: '#FFF5EF',
        background_secondary: '#fffaf7'
      },
    },
  },
  plugins: [],
} satisfies Config;
