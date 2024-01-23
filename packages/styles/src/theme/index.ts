/*
 * @Author: yudidayeye 908737208@qq.com
 * @Date: 2023-12-28 18:51:18
 * @LastEditors: yudidayeye 908737208@qq.com
 * @LastEditTime: 2024-01-02 17:25:11
 * @FilePath: \mono-ui\packages\styles\src\theme\index.ts
 * @Description: 提供主题切换功能的 vue 插件
 */
import { inject, App, Plugin } from 'vue';
import { isObjectLike } from '@monouixc/utils';
import { generateCssVars } from '../utils';
import { themeColorLevelsEnabledKeys, MonouiCssVarsConfig } from '../vars';

const THEME_PROVIDE_KEY = '__MonoUITheme__';

function useGlobalTheme(app: App, options?: MonouiCssVarsConfig) {
  /** 设置全局主题变量的方法 */
  function setTheme(styleObj: MonouiCssVarsConfig) {
    // 设置主题变量时，兼顾主题色的色阶
    const cssVars = generateCssVars(styleObj, {
      colorLevelsEnabledKeys: themeColorLevelsEnabledKeys,
      colorLevels: 9,
    });
    Object.entries(cssVars).forEach(([k, v]) => {
      document.documentElement.style.setProperty(k, v);
    });
  }

  const result = { setTheme };

  app.provide(THEME_PROVIDE_KEY, result);

  if (isObjectLike(options) && Object.keys(options).length > 0) {
    setTheme(options);
  }

  return result;
}

type MonoUITheme = ReturnType<typeof useGlobalTheme>;

export function useTheme() {
  const result = inject<MonoUITheme>(THEME_PROVIDE_KEY);
  if (!result) {
    throw new Error('useTheme() must be used after app.use(Theme)!');
  }
  return result;
}

export const Theme: Plugin<MonouiCssVarsConfig[]> = {
  install: (app, ...options) => {
    const finalOptions: MonouiCssVarsConfig = {};
    options.forEach((item) => {
      Object.assign(finalOptions, item);
    });
    useGlobalTheme(app, finalOptions);
  },
};

export * from './presets';
