import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // Agrega TODOS los HTML que se vayan creando
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'login.html'),
        post: resolve(__dirname, 'post.html'),
        escribir: resolve(__dirname, 'escribir.html'),
        perfil: resolve(__dirname, 'perfil.html'),
      }
    }
  }
})