import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // Agrega TODOS los HTML que se vayan creando
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'login.html'),
        registrer: resolve(__dirname, 'registrer.html'),
      }
    }
  }
})