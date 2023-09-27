/*
 * @Description: typeCheck
 * @Author: lijin
 * @Date: 2023-08-22 18:39:47
 * @LastEditTime: 2023-08-22 18:40:03
 * @LastEditors:
 */
export function isObjectLike(val: unknown): val is Record<any, any> {
  return val !== null && typeof val === 'object';
}

export function isFunction(val: unknown): val is Function {
  return typeof val === 'function';
}
