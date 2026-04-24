import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff', // 极简白背景
        foreground: '#111111', // 深灰文字
        primary: '#1d1d1f', // Apple-esque 强调色
      },
    },
  },
  plugins: [],
}
export default config