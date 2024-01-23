/*
 * @Author: yudidayeye 908737208@qq.com
 * @Date: 2024-01-09 14:57:39
 * @LastEditors: yudidayeye 908737208@qq.com
 * @LastEditTime: 2024-01-19 16:21:12
 * @FilePath: \mono-ui\packages\input\src\props.ts
 * @Description: input Props
 */
/** @module Input */
import { Ref } from 'vue';
import { InferVueDefaults } from '@monouijin/utils';
import { ButtonProps, defaultButtonProps } from '@monouijin/button';
import type Input from './input.vue';

/** 输入框组件的属性 */
export interface InputProps extends /* @vue-ignore */ ButtonProps {
  /**
   * 输入值，支持 v-model 双向绑定
   * @default ''
   */
  modelValue?: string;
}

/** @hidden */
export function defaultInputProps(): InferVueDefaults<InputProps> {
  return {
    ...defaultButtonProps(),
    modelValue: '',
  };
}

/** 输入框组件的事件 */
export interface InputEmits {
  /**
   * 11111
   * @param val 输入框的值
   */
  (event: 'update:modelValue', val: string): void;

  /** 22222 */
  (event: 'input', val: string): void;
}

/** 输入框组件对外暴露的方法 */
export interface InputExpose {
  /** 清空输入框 */
  clear: () => void;

  /** 响应式变量 */
  a: Ref<number>;
}

export type InputInstance = InstanceType<typeof Input>;
