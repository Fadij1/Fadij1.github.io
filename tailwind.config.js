/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Base layout colors
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        'border-color': 'var(--color-border)',
        
        // Content/Text colors (Renamed to avoid "text-text" redundancy)
        'primary-content': 'var(--color-text-primary)',
        'secondary-content': 'var(--color-text-secondary)',
        
        // Brand/Accent colors
        primary: '#22d3ee', 
        secondary: '#3b82f6', 
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      }
    },
  },
  plugins: [],
}