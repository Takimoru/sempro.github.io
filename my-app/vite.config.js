import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',
  },
  test: {
    environment: 'jsdom',
  },
  server: {
    host: 'community_serve.local',
    port: 5173,
    open: '/dashboard', // Opens this route when the server starts
  },
  base: "/sempro.github.io/my-app/",
})
