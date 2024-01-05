/*
 * @Description: index
 * @Author: lijin
 * @Date: 2023-08-23 16:23:38
 * @LastEditTime: 2023-12-20 18:11:23
 * @LastEditors: yudidayeye 908737208@qq.com
 */
import { UserConfig } from 'vite';
import { generateConfig as baseGenerateConfig, GenerateConfigOptions } from './src';
import { absCwd } from './src/utils';

/** 构建普通的纯 TS / JS 模块的预设 */
export function generateConfig(customOptions?: GenerateConfigOptions, viteConfig?: UserConfig) {
  return baseGenerateConfig(
    {
      // 指定 d.ts 文件相关 tsconfig 的位置
      dts: absCwd('../../tsconfig.src.json'),
      ...customOptions,
    },
    viteConfig,
  );
}

/** 构建 Vue 组件模块的预设 */
export function generateVueConfig(customOptions?: GenerateConfigOptions, viteConfig?: UserConfig) {
  return generateConfig(
    {
      pluginVue: true,
      ...customOptions,
    },
    viteConfig,
  );
}
