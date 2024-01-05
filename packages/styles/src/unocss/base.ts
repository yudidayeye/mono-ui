/*
 * @Author: yudidayeye 908737208@qq.com
 * @Date: 2023-12-26 13:25:27
 * @LastEditors: yudidayeye 908737208@qq.com
 * @LastEditTime: 2024-01-02 13:56:26
 * @FilePath: \mono-ui\packages\styles\src\unocss\base.ts
 * @Description: unocss 主题配置
  //  2. Theme 主题 功能，将 CSS 变量与主题结合起来
  theme: {
    colors: {
      primary: 'var(--color-primary)',
      success: 'var(--color-success)',
      warning: 'var(--color-warning)',
      danger: 'var(--color-danger)',
      info: 'var(--color-info)',
    },
   },
 */
import { UserConfig } from 'unocss';
import { Theme } from 'unocss/preset-mini';
import { toTheme } from '../utils';
import { themeColors, themeColorLevelsEnabledKeys, themeSpacing } from '../vars';

export const baseConfig: UserConfig<Theme> = {
  // 需要全局生效的主题
  theme: {
    // 颜色主题
    colors: toTheme(themeColors, {
      type: 'color',
      colorLevelsEnabledKeys: themeColorLevelsEnabledKeys,
      colorLevels: 9,
    }),
    // 边距相关主题
    spacing: toTheme(themeSpacing, { type: 'spacing' }),
    // 更多主题，自己定义...
  },
};
