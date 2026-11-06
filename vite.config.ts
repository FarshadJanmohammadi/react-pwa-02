import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  VitePWA({
    registerType: "autoUpdate",
    includeAssets: ["favicon.ico"],
    injectRegister: "auto",
    manifest: {
      "name": "My PWA App",
      "short_name": "App",
      "description": "A Progressive Web App",
      "start_url": "/",
      "display": "standalone",
      "background_color": "#ffffff",
      "theme_color": "#3b82f6",
      "icons": [
        {
          "src": "/icons/icon-192x192.png",
          "sizes": "192x192",
          "type": "image/png",
          "purpose": "any"
        },
        {
          "src": "/icons/icon-384x384.png",
          "sizes": "384x384",
          "type": "image/png",
          "purpose": "any"
        },
        {
          "src": "/icons/icon-512x512.png",
          "sizes": "512x512",
          "type": "image/png",
          "purpose": "any"
        },
        {
          "src": "/icons/icon-192x192-maskable.png",
          "sizes": "192x192",
          "type": "image/png",
          "purpose": "maskable"
        },
        {
          "src": "/icons/icon-512x512-maskable.png",
          "sizes": "512x512",
          "type": "image/png",
          "purpose": "maskable"
        }
      ]
    },
    workbox: {
      globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/dummyjson\.com\/products.*$/i,

          handler: "NetworkFirst"
        }
      ]
    }
  })
  ],
})
