import { defineConfig, optimizeDeps } from 'vite'
import react from '@vitejs/plugin-react-swc'
import reactRefresh from '@vitejs/plugin-react-refresh';
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactRefresh(), svgr()],
  optimizeDeps: {
    include: ['@svgr/webpack'],
  },
  build: {
    // Add SVG handling rule
    rollupOptions: {
      plugins: [svgr()],
    },
  },
})
