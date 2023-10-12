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
        brand_color_100: '#fff',
        brand_color_200: '#DCDCDC',
        brand_color_300: '#C0C0C0',
        brand_color_400: '#60a5fa',
        brand_text: '#1C1C1C'
      }
    },
  },
  plugins: [],
}
export default config
