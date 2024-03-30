/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        md: '588px',
      },
    },
    extend: {
      backgroundImage: {
        'desktop-dark': "url('/bg-desktop-dark.jpg')",
        'desktop-light': "url('/bg-desktop-light.jpg')",
        'mobile-dark': "url('/bg-mobile-dark.jpg')",
        'mobile-light': "url('/bg-mobile-light.jpg')",
      },
      colors: {
        background: 'hsl(var(--background))',
        text: 'hsl(var(--text))',
        border: 'hsl(var(--border))',
        card: 'hsl(var(--card))',
      },
    },
  },
  plugins: [],
};
