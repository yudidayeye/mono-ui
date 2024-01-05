/*
 * @Author: yudidayeye 908737208@qq.com
 * @Date: 2024-01-02 17:27:18
 * @LastEditors: yudidayeye 908737208@qq.com
 * @LastEditTime: 2024-01-02 17:31:59
 * @FilePath: \mono-ui\packages\config-provider\vite.config.ts
 * @Description: 打包配置
 */
import { UserConfig } from 'vite';
import { generateVueConfig } from '../build/scripts';

export default <UserConfig>generateVueConfig({
  presetMonouiOptions: {
    // config-provider 组件暂时没有 UnoCSS 样式预设
    include: [],
  },
});
