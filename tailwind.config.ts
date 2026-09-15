import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          bg: '#fbfbfd',
          darkbg: '#000000',
          cardDark: '#121215',
          accent: '#0071e3',
          accentHover: '#0077ed',
          accentLight: '#e8f2ff',
          text: '#1d1d1f',
          textMuted: '#6e6e73',
          border: '#e5e5ea',
          darkBorder: '#232328'
        }
      },
      boxShadow: {
        'apple-card': '0 4px 20px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)',
        'apple-hover': '0 20px 40px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.02)',
        'glow': '0 0 50px -10px rgba(0, 113, 227, 0.3)',
      },
      letterSpacing: {
        'tightest': '-0.035em',
      }
    },
  },
  plugins: [],
};
export default config;
