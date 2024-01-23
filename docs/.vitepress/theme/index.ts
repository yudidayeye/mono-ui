/*
 * @Author: yudidayeye 908737208@qq.com
 * @Date: 2024-01-04 16:11:12
 * @LastEditors: yudidayeye 908737208@qq.com
 * @LastEditTime: 2024-01-23 17:27:05
 * @FilePath: \mono-ui\docs\.vitepress\thme\index.ts
 * @Description: 自定义主题
 */
import DefaultTheme from 'vitepress/theme';
import { EnhanceAppContext } from 'vitepress';
import { Theme } from '@monouijin/components';
import { Demo } from '../components';

// 应用组件库的 unocss 预设，配置文件在根目录的 uno.config.ts
import 'virtual:uno.css';

export default {
  ...DefaultTheme,
  // 扩展 vue 实例
  enhanceApp(ctx: EnhanceAppContext) {
    DefaultTheme.enhanceApp(ctx);

    const { app } = ctx;

    // 应用组件库提供的主题插件
    app.use(Theme as any);
    
    // 注册其他插件、全局组件、provide...
    app.component('Demo', Demo);
  },
};