import type { Config } from 'tailwindcss'

const config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 80px rgba(56,189,248,0.12)'
      },
      colors: {
        surface: 'rgba(15,23,42,0.72)',
        border: 'rgba(255,255,255,0.12)'
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top, rgba(56,189,248,0.18), transparent 45%), radial-gradient(circle at 10% 20%, rgba(59,130,246,0.2), transparent 20%)'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};

export default config;
