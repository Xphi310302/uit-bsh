import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#008037', // green
          dark: '#006c2f',
          light: '#009940',
          active: '#18a046'
        },
        secondary: {
          DEFAULT: '#0066b3', // blue
          dark: '#005599',
          light: '#2B82D4'
        },
        uit: {
          blue: '#006cb5',
          green: '#008037',
          title: '#318ce3'
        }
      }
    },
  },
  plugins: [],
}

export default config
