/*
 * @Author: yudidayeye 908737208@qq.com
 * @Date: 2023-12-26 14:17:30
 * @LastEditors: yudidayeye 908737208@qq.com
 * @LastEditTime: 2024-01-08 17:03:10
 * @FilePath: \mono-ui\packages\styles\src\vars\button.ts
 * @Description: button的变量
 */
import { getCssVar, cssVarToRgba } from '../utils';
import { ThemeCssVarsConfig } from './theme';

/** 按钮组件的主题变量定义 */
export const buttonVars = {
  'button-status-color': cssVarToRgba<ThemeCssVarsConfig>('color-primary'),
  'button-color': cssVarToRgba<ThemeCssVarsConfig>('color-regular'),
  'button-bg-color': cssVarToRgba<ThemeCssVarsConfig>('color-card'),
  'button-border-color': cssVarToRgba<ThemeCssVarsConfig>('color-bd_base'),
  'button-hover-color': cssVarToRgba<ThemeCssVarsConfig>('color-primary'),
  'button-hover-bg-color': cssVarToRgba('color-card'),
  'button-hover-border-color': cssVarToRgba('color-primary'),
  'button-active-color': cssVarToRgba('color-primary-dark-1'),
  'button-active-bg-color': cssVarToRgba('color-card'),
  'button-active-border-color': cssVarToRgba('color-primary-dark-1'),
  'button-disabled-color': cssVarToRgba<ThemeCssVarsConfig>('color-placeholder'),
  'button-disabled-bg-color': cssVarToRgba<ThemeCssVarsConfig>('color-bg_disabled'),
  'button-disabled-border-color': cssVarToRgba<ThemeCssVarsConfig>('color-bd_light'),
  'button-padding-x': getCssVar<ThemeCssVarsConfig>('spacing-md'),
  'button-padding-y': getCssVar<ThemeCssVarsConfig>('spacing-xs'),
};

/** 按钮组件主题变量类型 */
export type ButtonCssVarsConfig = Partial<typeof buttonVars>;
