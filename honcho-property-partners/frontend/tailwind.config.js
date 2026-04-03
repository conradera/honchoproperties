import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#242A6B',
          50: '#f0f1f8',
          100: '#d9dbee',
          200: '#b7bddd',
          300: '#949ecc',
          400: '#717fbb',
          500: '#4f63aa',
          600: '#3d4e86',
          700: '#2f3d68',
          800: '#242A6B',
          900: '#1a1f43',
        },
        secondary: {
          DEFAULT: '#8C77B8',
          50: '#f5f3f9',
          100: '#e8e4f2',
          200: '#d1cbe5',
          300: '#b7a8d6',
          400: '#9f8ac7',
          500: '#8C77B8',
          600: '#6e5c94',
          700: '#564773',
          800: '#3e3252',
          900: '#261d31',
        },
        accent: {
          DEFAULT: '#B7A8D6',
          light: '#d4cbe8',
          dark: '#8C77B8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        elegant: ['Cormorant Garamond', 'Playfair Display', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 8px 40px rgba(0, 0, 0, 0.12)',
        'primary': '0 4px 20px rgba(36, 42, 107, 0.3)',
        'secondary': '0 4px 20px rgba(140, 119, 184, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config