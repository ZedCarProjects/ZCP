/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'zcp-black': '#050509',
        'zcp-gray': '#111827',
        'zcp-red': '#ef4444',
        'zcp-yellow': '#facc15',
        'zcp-neon': '#22c55e'
      },
      fontFamily: {
        display: ['Oswald', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
