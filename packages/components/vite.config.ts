/*
 * @Description:
 * @Author: lijin
 * @Date: 2023-08-10 18:01:07
 * @LastEditTime: 2023-08-23 17:06:21
 * @LastEditors:
 */
// import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue';

// export default defineConfig({
//   plugins: [vue()],
//   build: {
//     lib: {
//       entry: './index.ts',
//       name: 'MonouiComponents',
//       fileName: 'monoui-components',
//     },
//     minify: false,
//     rollupOptions: {
//       external: [/@monoui.*/, 'vue'],
//     },
//   },
// });
import { defineConfig } from 'vite';
import { generateVueConfig } from '../build/build.config';
// @ts-ignore
export default defineConfig(({ mode }) => generateVueConfig({ mode, entry: './index.ts' }));
