import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// Vite + Tailwind CSS v4：通过官方 Vite 插件接入，无需 tailwind.config.js / postcss.config.js
export default defineConfig({
  plugins: [tailwindcss()],
})
