/*
 * @Author: lijin
 * @Description:
 * @Date: 2024-03-29 10:48:17
 * @LastEditTime: 2024-03-29 11:20:10
 * @FilePath: \mono-ui\docs\demo\button\components\props.ts
 */
import { InferVueDefaults } from '@monouixc/utils';

export interface IconProps {
  /**
   * @description: icon的类名
   * @return {*}
   */
  typeClass: string;
  spin?: boolean;
}

export function defaultIconProps(): InferVueDefaults<IconProps> {
  return {
    typeClass: '',
    spin: false,
  };
}
