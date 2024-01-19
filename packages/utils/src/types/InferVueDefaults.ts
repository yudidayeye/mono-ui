/*
 * @Author: yudidayeye 908737208@qq.com
 * @Date: 2023-12-27 18:41:02
 * @LastEditors: yudidayeye 908737208@qq.com
 * @LastEditTime: 2024-01-19 14:45:04
 * @FilePath: \mono-ui\packages\utils\src\types\InferVueDefaults.ts
 * @Description: 由 Props 类型推断 props默认值的类型
 */
/** 基本类型 */
export type NativeType = null | number | string | boolean | symbol | Function;
/**  推断默认类型 */
export type InferDefault<P, T> = ((props: P) => T & {}) | (T extends NativeType ? T : never);

/** 推断出 props 默认值的类型 */
export type InferVueDefaults<T> = {
  [K in keyof T]?: InferDefault<T, T[K]>;
};
