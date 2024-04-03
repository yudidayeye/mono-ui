/*
 * @Author: yudidayeye 908737208@qq.com
 * @Date: 2024-01-02 10:42:48
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-04-02 14:27:49
 * @FilePath: \mono-ui\packages\utils\src\typeCheck.ts
 * @Description: 类型检查
 */
export function isObjectLike(val: unknown): val is Record<any, any> {
  return val !== null && typeof val === 'object';
}

export function isFunction(val: unknown): val is Function {
  return typeof val === 'function';
}
// eslint-disable-next-line max-len
export const isNumeric = (value: any): boolean => !Number.isNaN(parseFloat(value)) && Number.isFinite(value);
