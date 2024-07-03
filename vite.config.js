import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    cssCodeSplit: false,
    lib: {
      entry: fileURLToPath(new URL('./src/PollPlugin.js', import.meta.url)), // Use .js instead of .ts
      formats: ['es', 'cjs'],
      name: 'PollPlugin',
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`, // Simplified
    },
    rollupOptions: {
      external: ['vue'], // Exclude Vue from the bundle
      output: {
        globals: {
          vue: 'Vue', // Global variable name for Vue in UMD builds
        },
      },
    },
  },
});
