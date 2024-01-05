/*
 * @Author: yudidayeye 908737208@qq.com
 * @Date: 2023-12-25 17:30:16
 * @LastEditors: yudidayeye 908737208@qq.com
 * @LastEditTime: 2023-12-26 17:20:47
 * @FilePath: \mono-ui\packages\styles\src\vars\index.ts
 * @Description: 这些定义好的主题变量会在后续有以下用途：
    1. 转化为 CSS 样式，通过 UnoCSS 的 Preflights 功能注入组件样式中。
    2. 转化为 UnoCSS 的 Theme 主题，使 monouiPreset 预设支持组件库主题相关的原子化 CSS。
    3. 在实现运行时的主题切换能力时，提供 TypeScript 类型支持。
 */
import { ThemeCssVarsConfig } from './theme';
import { ButtonCssVarsConfig } from './button';

/** 导出组件库主题样式的整体类型 */
export interface MonouiCssVarsConfig extends ThemeCssVarsConfig, ButtonCssVarsConfig {
  [key: string]: string | undefined;
}

export * from './theme';
export * from './button';
