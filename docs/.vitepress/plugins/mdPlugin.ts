/*
 * @Author: yudidayeye 908737208@qq.com
 * @Date: 2024-01-22 17:23:55
 * @LastEditors: yudidayeye 908737208@qq.com
 * @LastEditTime: 2024-01-22 18:41:18
 * @FilePath: \mono-ui\docs\.vitepress\plugins\mdPlugin.ts
 * @Description: 插件
 */
import type MarkdownIt from 'markdown-it';
import { mdDemoPlugin } from './mdDemoPlugin';
import { mdScriptSetupPlugin } from './mdScriptSetupPlugin';

export const mdPlugin = (md: MarkdownIt) => {
  md.use(mdDemoPlugin);
  md.use(mdScriptSetupPlugin);
};
