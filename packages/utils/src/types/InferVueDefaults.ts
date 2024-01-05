/*
 * @Author: yudidayeye 908737208@qq.com
 * @Date: 2023-12-27 18:41:02
 * @LastEditors: yudidayeye 908737208@qq.com
 * @LastEditTime: 2024-01-02 10:38:57
 * @FilePath: \mono-ui\packages\utils\src\types\InferVueDefaults.ts
 * @Description: 由 Props 类型推断 props默认值的类型
 */
type NativeType = null | number | string | boolean | symbol | Function;
type InferDefault<P, T> = ((props: P) => T & {}) | (T extends NativeType ? T : never);

/** 推断出 props 默认值的类型 */
export type InferVueDefaults<T> = {
  [K in keyof T]?: InferDefault<T, T[K]>;
};
