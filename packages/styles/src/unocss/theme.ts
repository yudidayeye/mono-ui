/*
 * @Author: yudidayeye 908737208@qq.com
 * @Date: 2023-12-26 13:55:17
 * @LastEditors: yudidayeye 908737208@qq.com
 * @LastEditTime: 2024-01-02 13:55:49
 * @FilePath: \mono-ui\packages\styles\src\unocss\theme.ts
 * @Description: 实现unocss预设
 *
// 1. Preflights 功能，支持我们注入原生 CSS，我们可以用来定义主题变量。
//   preflights: [
//     {
//       getCSS: () => `
//         :root {
//           --color-primary: #c7000b;
//           --color-success: #50d4ab;
//           --color-warning: #fbb175;
//           --color-danger: #f66f6a;
//           --color-info: #526ecc;
//         }
//       `,
//     },
//   ],
 */
import { UserConfig } from 'unocss';
import { Theme } from 'unocss/preset-mini';
import { themeVars, themeColorLevelsEnabledKeys } from '../vars';
import { generateCssVars, cssVarsToString } from '../utils';

/** 主题部分预设 */
export const themeConfig: UserConfig<Theme> = {
  preflights: [
    {
      // 在生成的 css 样式文件中填入所有主题变量的定义
      getCSS: () => cssVarsToString(
        generateCssVars(themeVars, {
          colorLevelsEnabledKeys: themeColorLevelsEnabledKeys,
          colorLevels: 9,
        }),
      ),
    },
  ],
};
