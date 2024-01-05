/*
 * @Author: yudidayeye 908737208@qq.com
 * @Date: 2024-01-02 10:42:48
 * @LastEditors: yudidayeye 908737208@qq.com
 * @LastEditTime: 2024-01-02 10:42:54
 * @FilePath: \mono-ui\packages\utils\src\typeCheck.ts
 * @Description: 类型检查
 */
export function isObjectLike(val: unknown): val is Record<any, any> {
  return val !== null && typeof val === 'object';
}

export function isFunction(val: unknown): val is Function {
  return typeof val === 'function';
}
