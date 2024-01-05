/*
 * @Author: yudidayeye 908737208@qq.com
 * @Date: 2023-12-20 17:52:18
 * @LastEditors: yudidayeye 908737208@qq.com
 * @LastEditTime: 2023-12-28 16:35:06
 * @FilePath: \mono-ui\packages\build\scripts\common.ts
 * @Description: 生成 vite 配置
 */
import { UserConfig } from 'vite';
import { absCwd, generateConfig as baseGenerateConfig, GenerateConfigOptions } from '../src';

/* 生成 vite 配置 */
export function generateConfig(customOptions?: GenerateConfigOptions, viteConfig?: UserConfig) {
  return baseGenerateConfig(
    {
      dts: absCwd('../../tsconfig.src.json'),
      ...customOptions,
    },
    viteConfig,
  );
}
