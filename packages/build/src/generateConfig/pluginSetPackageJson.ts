/*
 * @Author: yudidayeye 908737208@qq.com
 * @Date: 2023-08-23 16:05:17
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-04-03 18:39:34
 * @FilePath: \mono-ui\packages\build\src\generateConfig\pluginSetPackageJson.ts
 * @Description: 这是默认设置,请设置`customMade`,
 * 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { basename } from 'node:path';
import { PluginOption } from 'vite';
import { PackageJson } from 'type-fest';
import {
  isFunction, isObjectLike, absCwd, relCwd, kebabCase, writeJsonFile,
} from '../utils';
import { getOutFileName, resolveEntry } from './lib';
import { getOptions, GenerateConfigOptions } from './options';

/** 根据源码入口和产物目录，计算出 d.ts 类型声明的入口的相对地址 */
function getDtsPath(options: GenerateConfigOptions = {}) {
  const { entry, outDir } = getOptions(options);

  const { rel, isFile } = resolveEntry(entry);

  /** 入口文件 d.ts 产物名称 */
  const entryFileName = isFile ? basename(entry).replace(/\..*$/, '.d.ts') : 'index.d.ts';

  return relCwd(absCwd(outDir, rel, entryFileName), false);
}

/**
 * 自定义插件，实现对 package.json 内容的修改与回写。
 * @param packageJson package.json 文件内容
 * @param options 构建选项
 */
export function pluginSetPackageJson(
  packageJson: PackageJson = {},
  options: GenerateConfigOptions = {},
): PluginOption {
  const finalOptions = getOptions(options);
  const {
    onSetPkg, mode, fileName, outDir, exports,
  } = finalOptions;

  if (mode !== 'package') {
    return null;
  }

  const finalName = fileName || kebabCase(packageJson.name || '');

  return {
    name: 'set-package-json',
    // 只在构建模式下执行
    apply: 'build',
    async closeBundle() {
      const packageJsonObj = packageJson || {};

      // 将 types main module exports 产物路径写入 package.json
      const exportsData: Record<string, any> = {};

      // 获取并设置 umd 产物的路径
      const umd = relCwd(absCwd(outDir, getOutFileName(finalName, 'umd', mode)), false);
      exportsData.require = umd;
      if (exports === '.') {
        packageJsonObj.main = umd;
      }

      // 获取并设置 es 产物的路径
      const es = relCwd(absCwd(outDir, getOutFileName(finalName, 'es', mode)), false);
      exportsData.import = es;
      if (exports === '.') {
        packageJsonObj.module = es;
      }

      // 获取并设置 d.ts 产物的路径
      const dtsEntry = getDtsPath(options);
      exportsData.types = dtsEntry;
      if (exports === '.') {
        packageJsonObj.types = dtsEntry;
      }

      if (!isObjectLike(packageJsonObj.exports)) {
        packageJsonObj.exports = {};
      }
      Object.assign(packageJsonObj.exports, {
        [exports]: exportsData,
        // 默认暴露的出口
        './*': './*',
      });

      // 支持在构建选项中的 onSetPkg 钩子中对 package.json 对象进行进一步修改
      if (isFunction(onSetPkg)) {
        await onSetPkg(packageJsonObj, finalOptions);
      }

      // 回写入 package.json 文件
      await writeJsonFile(absCwd('package.json'), packageJsonObj, null, 2);
    },
  };
}
