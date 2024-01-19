/*
 * @Author: yudidayeye 908737208@qq.com
 * @Date: 2024-01-04 16:08:35
 * @LastEditors: yudidayeye 908737208@qq.com
 * @LastEditTime: 2024-01-19 18:52:57
 * @FilePath: \mono-ui\docs\vite.config.ts
 * @Description: 构建
 */
import { join } from 'node:path';
import { defineConfig } from 'vite';
import unocss from 'unocss/vite';

export default defineConfig({
  plugins: [
    // 应用组件库的 unocss 预设，配置文件在根目录的 uno.config.ts
    // 集成 UnoCss 方便我们编写组件用例，或者实现 VitePress 专用组件
    unocss(),
  ],
  resolve: {
    alias: [
      {
        // 将 @monoui/xxx 内部依赖定位到源码路径
        find: /^@monoui\/(.+)$/,
        replacement: join(__dirname, '..', 'packages', '$1', 'src'),
      },
    ],
  },
  optimizeDeps: {
    exclude: ['@vue/repl'],
  },
  ssr: {
    noExternal: ['@vue/repl'],
  },
});
