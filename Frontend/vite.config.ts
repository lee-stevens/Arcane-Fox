import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@Components": `${path.resolve(__dirname, "./src/components/")}`,
      "@Pages": path.resolve(__dirname, "./src/pages"),
      "@Types": `${path.resolve(__dirname, "./src/@types")}`,
      "@Public": `${path.resolve(__dirname, "./public/")}`,
      "@Assets": `${path.resolve(__dirname, "./src/assets/")}`,
      "@": path.resolve(__dirname, "./src/")
    },
  },
})
