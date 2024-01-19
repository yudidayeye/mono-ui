/*
* @Author: yudidayeye 908737208@qq.com
* @Date: 2023-12-27 18:18:06
 * @LastEditors: yudidayeye 908737208@qq.com
 * @LastEditTime: 2024-01-19 14:26:55
* @FilePath: \mono-ui\packages\button\src\button.ts
* @Description: Button props定义与默认值
*/
/** @module Button */
import { InferVueDefaults } from 'packages/utils/src/types/InferVueDefaults';
/** 按钮的类型 */
export type ButtonType = 'plain' | 'primary' | 'dashed' | 'text' | 'link';
/** 按钮的状态 */
export type ButtonStatus = 'success' | 'info' | 'danger' | 'warning';

export interface ButtonProps {
  /**
   * 按钮的类型
   * @default undefined
   */
  type?: ButtonType;

  /**
   * 按钮的状态
   * @default undefined
   */
  status?: ButtonStatus;

  /**
   * 按钮是否为朴素样式
   * @default false
   */
  plain?: boolean;

  /**
   * 按钮是否不可用
   * @default false
   */
  disabled?: boolean;
}
/** 按钮默认值 */
export function defaultButtonProps(): InferVueDefaults<ButtonProps> {
  return {
    type: undefined,
    status: undefined,
    plain: false,
    disabled: false,
  };
}
/** 按钮组件的插槽信息 */
export interface ButtonSlots {
  default(props: {
    /** 按钮的类型 */
    type?: ButtonType
  }): any;
}
