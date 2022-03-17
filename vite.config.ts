import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'


const srcPath = resolve(__dirname, 'src','app')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": resolve(srcPath, 'components'),
      "@router": resolve(srcPath, 'router'),
      "@modules": resolve(srcPath, 'modules'),
      "@interfaces": resolve(srcPath, 'interfaces'),
      "@assets": resolve(srcPath, 'assets'),
      "@pages": resolve(srcPath, 'pages'),
      "@hooks": resolve(srcPath, 'hooks'),
    }
  }
})
