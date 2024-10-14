import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react-swc'

/* scss requires the modern-compiler api or it will default to the deprecated one
https://stackoverflow.com/questions/78997907/the-legacy-js-api-is-deprecated-and-will-be-removed-in-dart-sass-2-0-0
 */
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  },
  resolve: { // This must match tsconfig.app.json's alias'
    alias: {
      "@Routes": `${path.resolve(__dirname, "./src/components/Routes")}`,
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
