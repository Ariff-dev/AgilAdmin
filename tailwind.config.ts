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
        // background: 'var(--background)',
        // foreground: 'var(--foreground)',
        'app-bg': '#14151A',
        'component-color-bg': '#242736',
        'component-color-bg-button': '#5B6288',
        'color-pink': '#B59AF2',
      },
    },
  },
  plugins: [],
}
export default config
