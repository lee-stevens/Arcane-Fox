import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@Components": `${path.resolve(__dirname, "./src/components")}`,
      "@Types": `${path.resolve(__dirname, "./src/types")}`,
      "@Const": `${path.resolve(__dirname, "./src/const")}`,
      "@Services": `${path.resolve(__dirname, "./src/services")}`,
      "@Styles": `${path.resolve(__dirname, "./src/styles")}`,
      "@Assets": `${path.resolve(__dirname, "./src/assets")}`,
      "@Public": `${path.resolve(__dirname, "./public")}`
    },
  },
})
