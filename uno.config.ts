/*
 * @Author: yudidayeye 908737208@qq.com
 * @Date: 2023-12-21 16:02:50
 * @LastEditors: yudidayeye 908737208@qq.com
 * @LastEditTime: 2024-01-09 10:21:31
 * @FilePath: \mono-ui\uno.config.ts
 * @Description: uno配置文件
 */

import {
  UserConfig, defineConfig, presetUno, presetIcons,
} from 'unocss';
import transformerDirectives from '@unocss/transformer-directives';
// eslint-disable-next-line import/no-relative-packages
import { monouiPreset } from './packages/styles/src/unoPreset';

// export default <UserConfig>defineConfig({
//   // 预设 Preset 其实就是 UnoCSS 配置项的大集合，UnoCSS 会在初始化时深度合并所有待加载的预设对象。
//   presets: [presetUno()],

//   // 1. Preflights 功能，支持我们注入原生 CSS，我们可以用来定义主题变量。
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

//   //  2. Theme 主题 功能，将 CSS 变量与主题结合起来
//   theme: {
//     colors: {
//       primary: 'var(--color-primary)',
//       success: 'var(--color-success)',
//       warning: 'var(--color-warning)',
//       danger: 'var(--color-danger)',
//       info: 'var(--color-info)',
//     },
//   },

//   // 3. Rules，就是定义 class 名称与 CSS 属性的对应关系。
//   rules: [
//     [
//       'button-base',
//       {
//         cursor: 'pointer',
//         display: 'inline-flex',
//         padding: '6px 12px',
//       },
//     ],
//   ],

//   // 4. Shortcuts 是将一系列 class 对应的样式聚合到另一个 class
//   shortcuts: [
//     [
//       'button',
//       `
//       'button-base text-14px c-primary bg-success'
//       hover:bg-warning
//       before:text-14px
//       [&.button-danger]:bg-danger
//       [&.button-info]:bg-info
//     `,
//     ],
//     ['button-danger', 'c-danger'],
//     ['button-info', 'c-info'],
//   ],

//   // 5. safelist 使特定的 CSS 类任何时候都生成。我们需要将所有组件用到的 class 都放入 safelist 列表
//   safelist: ['button', 'button-danger', 'button-info'],
// });

export default <UserConfig>defineConfig({
  presets: [
    presetUno(),
    monouiPreset(),
    presetIcons({
      collections: {
      // Iconify json 集成，后续支持通过 <i class="i-mono-xxx"> 来使用图标原子类，并支持按需打包
      // @ts-ignore
        mono: () => import('./packages/icons/dist/icons.json').then((i) => i.default),
      },
    })],
  // @unocss/transformer-directives 允许我们编写组件样式的时候，通过 @apply 语法聚合多个 UnoCSS 原子类
  transformers: [transformerDirectives()],
});
