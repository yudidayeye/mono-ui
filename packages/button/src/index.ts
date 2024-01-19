/*
 * @Description: index
 * @Author: lijin
 * @Date: 2023-08-10 16:27:55
 * @LastEditTime: 2024-01-09 18:33:17
 * @LastEditors: yudidayeye 908737208@qq.com
 */
import Button from './button.vue';
import './button.scss';
// 导入 UnoCSS 虚拟模块，确保 UnoCSS 定义的 CSS 变量部分能够被注入到样式产物中
import 'virtual:uno.css';

export { Button };

export type ButtonInstance = InstanceType<typeof Button>;
export * from './props';
