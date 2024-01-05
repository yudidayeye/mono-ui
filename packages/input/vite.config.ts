/*
 * @Author: yudidayeye 908737208@qq.com
 * @Date: 2023-12-20 18:02:30
 * @LastEditors: yudidayeye 908737208@qq.com
 * @LastEditTime: 2024-01-02 15:58:38
 * @FilePath: \mono-ui\packages\input\src\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite';
import { generateVueConfig } from '../build/scripts/vue';
// @ts-ignore
export default defineConfig(({ mode }) => generateVueConfig({ mode, entry: './src/index.ts' }));
