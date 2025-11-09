import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Listen on all addresses including localhost and LAN
    port: 5173,
    strictPort: true,
    open: true // Automatically open browser
  }
  ,
  // Hook into the dev server to print a clear startup message (similar to backend)
  configureServer(server) {
    // when the underlying http server is listening, print the URL
    server.httpServer?.once('listening', () => {
      try {
        const addr = server.httpServer.address()
        const port = typeof addr === 'object' && addr ? addr.port : server.config.server.port
        const host = process.env.HOST || 'localhost'
        // print user-friendly message
        // eslint-disable-next-line no-console
        console.info(`Frontend running at http://${host}:${port}`)
      } catch (e) {
        // ignore
      }
    })
  }
})
