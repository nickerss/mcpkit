/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0a0a0f',
          secondary: '#12121a',
          tertiary: '#1a1a25',
        },
        border: '#2a2a3a',
        text: {
          primary: '#f0f0f5',
          secondary: '#9090a0',
          muted: '#505060',
        },
        accent: {
          DEFAULT: '#6366f1',
          hover: '#818cf8',
        },
        free: '#22c55e',
        paid: '#f59e0b',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        card: '12px',
        btn: '8px',
        tag: '6px',
        input: '8px',
      },
    },
  },
  plugins: [],
};
