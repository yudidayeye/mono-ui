/*
 * @Description: vite.config.js
 * @Author: lijin
 * @Date: 2023-08-11 10:08:10
 * @LastEditTime: 2024-01-02 16:04:40
 * @LastEditors: yudidayeye 908737208@qq.com
 */
import { join } from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import unocss from 'unocss/vite';

export default defineConfig({
  plugins: [vue(), unocss()],
  resolve: {
    // 添加别名，使其定位源码
    alias: [
      {
        find: /^@monouixc\/(.+)$/,
        replacement: join(__dirname, '../..', 'packages', '$1', 'src'),
      },
    ],
  },
});
