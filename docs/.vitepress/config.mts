/*
 * @Author: yudidayeye 908737208@qq.com
 * @Date: 2024-01-04 15:00:39
 * @LastEditors: yudidayeye 908737208@qq.com
 * @LastEditTime: 2024-03-18 15:16:27
 * @FilePath: \mono-ui\docs\.vitepress\config.ts
 * @Description: vitePress 配置
 */
import { defineConfig } from 'vitepress';
import apiConfig from '../configs/api.json';
import componentsConfig from '../configs/components.json';
import { mdPlugin } from './plugins';

// 配置参考：https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  ignoreDeadLinks: true,
  title: 'MonoUI',
  description: 'Vue3 组件库',
  markdown: {
    config: md => {
      md.use(mdPlugin);
    },
  },
  themeConfig: {
    // 新增 themeConfig.nav 头部导航配置
    // 参考：https://vitepress.dev/reference/default-theme-nav#navigation-links
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/' },
      { text: 'API', link: '/api/README' },
      { text: '演练场', link: '/playground' },
      { text: 'github', link: 'https://github.com/yudidayeye/mono-ui/blob/master/README.md' },
    ],
    // 每篇文档右侧的大纲开启支持三级的深度
    outline: {
      level: [2, 3],
    },
    // 新增 themeConfig.sidebar 文档章节导航配置
    // 参考：https://vitepress.dev/reference/default-theme-sidebar#multiple-sidebars
    sidebar: {
      // 指南部分的章节导航
      '/guide/': [
        {
          text: '指引',
          items: [
            { text: '组件库介绍', link: '/guide/' },
            { text: '快速开始', link: '/guide/quick-start' },
            { text: '主题切换', link: '/guide/theme' },
          ],
        },
      ],
      // 组件部分的章节导航
      '/components/': componentsConfig,
      // API 文档部分的章节导航
      '/api/': apiConfig,
    },
  },
});
