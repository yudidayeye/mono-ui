/*
 * @Author: yudidayeye 908737208@qq.com
 * @Date: 2023-12-20 17:49:57
 * @LastEditors: yudidayeye 908737208@qq.com
 * @LastEditTime: 2023-12-28 16:47:18
 * @FilePath: \mono-ui\packages\button\vite.config.ts
 * @Description: button 组件的 vite 配置，集成对应的 uno 插件
 */
import { UserConfig } from 'vite';
import { generateVueConfig } from '../build/scripts';

export default <UserConfig>generateVueConfig({
  presetMonouiOptions: {
    include: ['button'],
  },
});
