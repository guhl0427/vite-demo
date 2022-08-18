/// <reference types="vitest"/>
import path from 'path'
import { defineConfig } from 'Vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [vue()],
  test: {
    environment: 'jsdom',
  },
})
