/*
 * @Author: yudidayeye 908737208@qq.com
 * @Date: 2024-01-22 18:16:48
 * @LastEditors: yudidayeye 908737208@qq.com
 * @LastEditTime: 2024-01-22 18:40:16
 * @FilePath: \mono-ui\docs\.vitepress\env.d.ts
 * @Description: 类型声明
 */
/// <reference types="vite/client" />

declare module 'markdown-it-container' {
  import type { PluginWithParams } from 'markdown-it';

  const container: PluginWithParams;
  export = container;
}
