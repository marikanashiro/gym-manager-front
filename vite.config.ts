import { defineConfig } from 'vite';
import { angular } from '@analogjs/vite-plugin-angular';

export default defineConfig({
  plugins: [angular()],
  css: {
    postcss: './postcss.config.js', // Aponta para o arquivo de configuração do PostCSS
  },
});