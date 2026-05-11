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
        kit: {
          ship: '#f97316',
          coding: '#06b6d4',
          rag: '#8b5cf6',
          browser: '#eab308',
          devops: '#ef4444',
        },
        cert: {
          certified: '#f59e0b',
          recommended: '#22c55e',
          reviewed: '#9090a0',
          pending: '#505060',
        },
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
        '2xl': '16px',
        '3xl': '20px',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'radar-expand': 'radar-expand 600ms ease-out forwards',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(245, 158, 11, 0.4)' },
          '50%': { boxShadow: '0 0 0 8px rgba(245, 158, 11, 0)' },
        },
        'radar-expand': {
          from: { transform: 'scale(0)', opacity: 0 },
          to: { transform: 'scale(1)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};