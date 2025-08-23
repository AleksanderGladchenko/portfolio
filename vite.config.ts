// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr' // 1. Импортируем плагин

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr() // 2. Добавляем плагин сюда
  ],
  base: '/my-react-portfolio/', // Убедись, что base правильный для твоего репозитория
})