/*
* @Author: yudidayeye 908737208@qq.com
* @Date: 2023-12-27 18:18:06
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-04-03 18:38:51
 * @FilePath: \mono-ui\packages\button\src\props.ts
* @Description: Button props定义与默认值
*/
/** @module Button */
import { InferVueDefaults } from '@monouixc/utils/src/types/InferVueDefaults';
/** 按钮的类型 */
export type ButtonType = 'default' | 'plain' | 'primary' | 'dashed' | 'text' | 'link';
/** 按钮的状态 */
export type ButtonStatus = 'success' | 'info' | 'danger' | 'warning';
/** 按钮的形状 */
export type ButtonShape = 'default' | 'circle' | 'round';
export type ButtonSize = 'default' | 'large' | 'small';
export interface ButtonProps {
  /**
   * 按钮的类型
   * @default 'default'
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
  /**
   * @description: 幽灵按钮
   * @default false
   */
  ghost?: boolean;
  /**
   * @description: 加载中
   * @default false
   */
  loading?: boolean;
  /**
   * @description: 形状
   * @default 'default'
   */
  shape?: ButtonShape
  /**
   * @description: 尺寸
   * @default 'default'
   */
  size?: ButtonSize
  /**
   * @description: 按钮
   * @default undefined
   */
  icon?: any

  onClick?: MouseEventHandler

  onMousedown?: MouseEventHandler
}
/** 按钮默认值 */
export function defaultButtonProps(): InferVueDefaults<ButtonProps> {
  return {
    type: 'default',
    status: undefined,
    plain: false,
    disabled: false,
    ghost: false,
    loading: false,
    shape: 'default',
    size: 'default',
    icon: undefined,
  };
}
/** 按钮组件的插槽信息 */
export interface ButtonSlots {
  default(props: {
    /** 按钮的类型 */
    type?: ButtonType
  }): any;
  icon(): any;
}

/**
 * @description: 按钮的事件
 */
export interface ButtonEmits {
  click: [e: Event];
  mousedown: [e: Event];
}
