/*
 * @Author: yudidayeye 908737208@qq.com
 * @Date: 2024-01-04 15:00:39
 * @LastEditors: yudidayeye 908737208@qq.com
 * @LastEditTime: 2024-01-04 16:00:45
 * @FilePath: \mono-ui\docs\.vitepress\config.ts
 * @Description: vitePress 配置
 */
import { defineConfig } from 'vitepress'

// 配置参考：https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'MonoUI',
  description: 'Vue3 组件库',
  themeConfig: {
    // 新增 themeConfig.nav 头部导航配置
    // 参考：https://vitepress.dev/reference/default-theme-nav#navigation-links
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/' },
      { text: 'API', link: '/api/' },
      { text: '演练场', link: '/playground' },
      { text: 'github', link: 'https://github.com/yudidayeye/mono-ui/blob/master/README.md' },
    ],
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
          ],
        },
      ],
      // 组件部分的章节导航
      '/components/': [
        {
          text: '组件',
          items: [
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Input 单行输入框', link: '/components/input' },
            { text: 'Config-provider 局部主题修改', link: '/components/config-provider' },
          ],
        },
      ]
    }
  },
});