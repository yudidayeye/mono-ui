/*
 * @Author: yudidayeye 908737208@qq.com
 * @Date: 2024-01-03 11:30:37
 * @LastEditors: yudidayeye 908737208@qq.com
 * @LastEditTime: 2024-01-04 14:38:29
 * @FilePath: \mono-ui\packages\icons\vite.config.ts
 * @Description: 打包
 */
import { PluginOption, UserConfig } from 'vite';
import { generateIconify } from './src/index';
import { generateConfig } from '../build/scripts';
import { absCwd, relCwd } from '../build/src';

/** 本包产物相对本包根目录的路径 */
const OUT_REL = 'dist';

/** icons 图标集合相对路径 */
const ICONS_REL = 'icons';

/** 生成的产物文件名称 */
const FILE_NAME = 'icons';

function pluginGenerateIconify(): PluginOption {
  return {
    name: 'generate-iconify',
    // 只在构建模式下执行
    apply: 'build',
    async closeBundle() {
      await generateIconify({
        iconsDir: absCwd(ICONS_REL),
        prefix: 'mono',
        cssOutput: absCwd(OUT_REL, `${FILE_NAME}.css`),
        jsonOutput: absCwd(OUT_REL, `${FILE_NAME}.json`),
      });
    },
  };
}

export default <UserConfig>generateConfig(
  {
    outDir: OUT_REL,
    // 在 package.json 的 exports 字段声明样式文件的人口
    onSetPkg: (pkg, options) => {
      const exports: Record<string, string> = {
        [`./${FILE_NAME}.css`]: relCwd(absCwd(options.outDir, `${FILE_NAME}.css`), false),
        [`./${FILE_NAME}.json`]: relCwd(absCwd(options.outDir, `${FILE_NAME}.json`), false),
      };
      Object.assign(pkg.exports as Record<string, any>, exports);
    },
  },
  {
    plugins: [pluginGenerateIconify() as any],
  },
);
