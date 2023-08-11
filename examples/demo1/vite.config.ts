/*
 * @Description: vite.config.js
 * @Author: lijin
 * @Date: 2023-08-11 10:08:10
 * @LastEditTime: 2023-08-11 15:49:23
 * @LastEditors:
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { join } from "node:path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 添加别名，使其定位源码
    alias: [
      {
        find: /^@monoui\/(components)$/,
        replacement: join(__dirname, "../..", "packages", "$1", "index.ts"),
      },
      {
        find: /^@monoui\/(.+)$/,
        replacement: join(__dirname, "../..", "packages", "$1", "src"),
      },
    ],
  },
});
