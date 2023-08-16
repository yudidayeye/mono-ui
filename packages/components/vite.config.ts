import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: './index.ts',
      name: 'MonouiComponents',
      fileName: 'monoui-components',
    },
    minify: false,
    rollupOptions: {
      external: [
        /@openxui.*/,
        'vue',
      ],
    },
  },
});
