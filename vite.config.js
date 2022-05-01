import { defineConfig } from "vite";
import { VitePWA as pwa } from "vite-plugin-pwa";
import eslintPlugin from '@nabla/vite-plugin-eslint';
import manifest from "./manifest.json";
import vue from "@vitejs/plugin-vue";
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
   server: { port: 8080 },
   plugins: [
      vue(),
      pwa({
         strategies: "injectManifest",
         srcDir: "",
         filename: "service-worker.js",
         manifest,
      }),
      eslintPlugin(),
   ],
   resolve: {
      alias: {
         '@': path.resolve(__dirname, './src'),
      },
   },
   test: {
      include: 'src/**/*.test.js',
      environment: 'happy-dom',
      deps: ['@vue'],
   },
});
