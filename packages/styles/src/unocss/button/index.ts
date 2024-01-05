/*
 * @Author: yudidayeye 908737208@qq.com
 * @Date: 2023-12-26 14:13:25
 * @LastEditors: yudidayeye 908737208@qq.com
 * @LastEditTime: 2024-01-02 13:59:19
 * @FilePath: \mono-ui\packages\styles\src\unocss\button\index.ts
 * @Description: button 的 unocss 配置(button 的预设)
  // 1. Preflights 功能，支持我们注入原生 CSS，我们可以用来定义主题变量。
  preflights: [
    {
      getCSS: () => `
        :root {
          --color-primary: #c7000b;
          --color-success: #50d4ab;
          --color-warning: #fbb175;
          --color-danger: #f66f6a;
          --color-info: #526ecc;
        }
      `,
    },
  ],
 */
import { UserConfig } from 'unocss';
import { buttonVars } from '../../vars';
import { cssVarsToString, generateCssVars } from '../../utils';
// import { toSafeList } from '../utils';
// import { buttonShortcuts } from './shortcuts';
// import { buttonRules } from './rules';

export const buttonConfig: UserConfig = {
  /*
  rules: buttonRules,
  shortcuts: buttonShortcuts,
  safelist: [
    ...toSafeList(buttonRules),
    ...toSafeList(buttonShortcuts),
  ],
  */
  preflights: [
    {
      getCSS: () => cssVarsToString(generateCssVars(buttonVars)),
    },
  ],
};
