/*
 * @Author: yudidayeye 908737208@qq.com
 * @Date: 2023-12-25 18:40:49
 * @LastEditors: yudidayeye 908737208@qq.com
 * @LastEditTime: 2024-01-02 14:19:57
 * @FilePath: \mono-ui\packages\styles\src\unoPreset.ts
 * @Description: 获取组件库unocss预设

 // 根据模块名获取预设
 monouiPreset（{
  include: ["theme", "button"],
  exclude: []
 }）

 */
import { mergeConfigs, Preset, UserConfig } from 'unocss';
import { Theme } from 'unocss/preset-mini';
import {
  baseConfig,
  themeConfig,
  buttonConfig,
} from './unocss';

/** 组件名称与预设对象的关系表 */
const configMaps = {
  theme: themeConfig,
  button: buttonConfig,
} satisfies Record<string, UserConfig<Theme>>;

type ConfigKeys = keyof typeof configMaps;

/** 组件库预设选项 */
export interface MonouiPresetOptions {
  /** 指定集成哪些组件的 UnoCSS 预设，不设置时默认全部集成 */
  include?: ConfigKeys[];

  /** 指定剔除哪些组件的 UnoCSS 预设 */
  exclude?: ConfigKeys[];
}

/** 组件库预设 */
export function monouiPreset(options: MonouiPresetOptions = {}): Preset {
  const {
    include = Object.keys(configMaps) as ConfigKeys[],
    exclude = [],
  } = options;

  // 根据 include 和 exclude 选项决定哪些组件的 UnoCSS 预设将要被集成
  const components = new Set<ConfigKeys>();
  include.forEach((key) => components.add(key));
  exclude.forEach((key) => components.delete(key));
  const configs = Array.from(components)
    .map((component) => configMaps[component])
    .filter((item) => item);

  // 基础预设任何时候都会生效
  configs.unshift(baseConfig);

  // 合并所有预设
  const mergedConfig = mergeConfigs(configs);

  return {
    name: 'monoui-preset',
    ...mergedConfig,
  };
}
