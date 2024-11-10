
import { defineConfig } from 'tailwindcss';

export default defineConfig({
  darkMode: 'class',  // Enable dark mode by default
  theme: {
    extend: {
      colors: {
        primary: '#3B0071',  // Deep purple
        secondary: '#6451A6',  // Lighter purple
        accent: '#FFBC42',  // Warm yellow for accents
        background: '#1E1B2E',  // Dark cosmic background
        starGlow: '#E0E0FF',  // Light for star effects
      },
      backgroundImage: theme => ({
        'space-bg': "url('/public/star-background.jpg')",  // Background image for cosmic feel
      }),
    },
  },
  plugins: [],
});
