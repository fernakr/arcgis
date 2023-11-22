import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'


// https://vitejs.dev/config/
export default defineConfig({
  
  plugins: [react(), basicSsl()],
  build: {
    chunkSizeWarningLimit: 2000
  },
  server: {   
    port: 3000, 
    open: true
  }  
})
