import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages (https://ogushi163.github.io/seisei-ai-jiten/) で配信するためのベースパス
  base: '/seisei-ai-jiten/',
})
