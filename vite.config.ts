import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "/spacescribe-portfolio/",
  plugins: [react(),],
  // // base: '/spacescribe-portfolio/', // e.g. '/portfolio/'
  // build: {
  //   outDir: 'docs', // 👈 this is the key change
  // },
})
