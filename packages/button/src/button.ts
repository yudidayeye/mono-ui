/*
* @Author: yudidayeye 908737208@qq.com
* @Date: 2023-12-27 18:18:06
 * @LastEditors: yudidayeye 908737208@qq.com
 * @LastEditTime: 2024-01-04 17:31:26
* @FilePath: \mono-ui\packages\button\src\button.ts
* @Description: Button props定义与默认值
*/
import { InferVueDefaults } from 'packages/utils/src/types/InferVueDefaults';
import type Button from './button.vue';

export interface ButtonProps {
  /* 按钮类型 */
  type?: '' | 'default' | 'primary' | 'dashed' | 'text' | 'link';

  /* 按钮是否为朴素模式 */
  plain?: boolean;

  /* 按钮是否不可用 */
  disabled?: boolean;
}

export function defaultButtonProps(): Required<InferVueDefaults<ButtonProps>> {
  return {
    type: '',
    plain: false,
    disabled: false,
  };
}

export type ButtonInstance = InstanceType<typeof Button>;
