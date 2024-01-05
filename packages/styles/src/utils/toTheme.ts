/*
 * @Author: yudidayeye 908737208@qq.com
 * @Date: 2023-12-25 18:36:11
 * @LastEditors: yudidayeye 908737208@qq.com
 * @LastEditTime: 2023-12-27 13:49:40
 * @FilePath: \mono-ui\packages\styles\src\utils\toTheme.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
  getCssVar,
  DEFAULT_PREFIX,
  DefaultPrefix,
  GenerateCssVarsOptions,
} from './cssVars';

/**
 * 主题生成选项
 * @typeParam {@link GenerateCssVarsOptions}
 */
export interface ToThemeOptions<
  K = string,
  P extends string = DefaultPrefix,
> extends GenerateCssVarsOptions<K, P> {
  /** 主题的类别 */
  type?: string,
}

/**
 * 根据主题变量的原始对象，生成 UnoCSS 的 Theme 对象
 * @param origin 原始主题变量对象
 * @param options 选项 {@link ToThemeOptions}
 */
export function toTheme<
  T extends Record<string, any> = Record<string, any>,
  K extends keyof T = keyof T,
  P extends string = DefaultPrefix,
>(
  origin: T,
  options?: ToThemeOptions<K, P>,
) {
  const {
    type = 'color',
    prefix = DEFAULT_PREFIX,
    colorLevelsEnabledKeys = [],
    colorLevels = 9,
  } = options || {};

  // 从原始对象中过滤出符合格式的键值
  const themeReg = new RegExp(`^${type}-(.*)$`);
  const keys = Object.keys(origin)
    .filter((key) => themeReg.test(key))
    .map((key) => key.replace(themeReg, '$1'));

  const result: Record<string, any> = {};
  keys.forEach((key) => {
    // TODO(spacing 时不正确，不用rgb())
    // 主题必须符合类似 rgb(var(--op-color-primary)) 的格式，这样 UnoCSS 能生成的原子类既能支持 CSS 变量，又能支持透明度修改
    result[key] = `rgb(${getCssVar(`${type}-${key}`, prefix)})`;

    // 处理色阶主题
    if (type === 'color' && colorLevelsEnabledKeys.includes(`${type}-${key}` as K)) {
      const lightColors: Record<string, any> = {};
      const darkColors: Record<string, any> = {};
      for (let i = 1; i < colorLevels + 1; i++) {
        lightColors[`${i}`] = `rgb(${getCssVar(`${type}-${key}-light-${i}`, prefix)})`;
        darkColors[`${i}`] = `rgb(${getCssVar(`${type}-${key}-dark-${i}`, prefix)})`;
      }
      result[`${key}_light`] = lightColors;
      result[`${key}_dark`] = darkColors;
    }
  });
  return result;
}
