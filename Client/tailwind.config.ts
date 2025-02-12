import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        BgMove3D: {
          '0%': { transform: 'translate3d(0px, 0px, 0px)' },
          "50%": { transform: "translate3d(-30px, -30px, -30px)" },
          "100%": { transform: "translate3d(0px, 0px, 0px)" },
        }
      },
      animation: {
        'bg-move-3d': 'BgMove3D 2s infinite',
      },
      container: {
        screens: {
          sm: "100%", 
          md: "100%", 
          lg: "1024px", 
          xl: "1280px",
        },
      },
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
