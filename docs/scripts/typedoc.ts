/*
 * @Author: yudidayeye 908737208@qq.com
 * @Date: 2024-01-19 11:11:29
 * @LastEditors: yudidayeye 908737208@qq.com
 * @LastEditTime: 2024-01-19 14:37:25
 * @FilePath: \mono-ui\docs\scripts\typedoc.ts
 * @Description: typedoc 文档生成脚本
 */
import { join } from 'node:path';
import { Application, TSConfigReader } from 'typedoc';

/** 从整个工程的根目录计算路径 */
const fromRoot = (...paths: string[]) => join(__dirname, '..', '..', ...paths);

const tsConfigPath = fromRoot('tsconfig.src.json');

/** 文档输出目录 */
const OUT_DIR = join(__dirname, '..', 'api');

async function main() {
  const app = await Application.bootstrapWithPlugins(
    {
      // 指定文件入口，支持 globs 匹配多文件。规定为所有组件包内的 src/props.ts 文件。
      entryPoints: [fromRoot('packages', '**', 'props.ts'), fromRoot('packages', 'utils', 'src', 'types')],

      // tsconfig 配置
      tsconfig: tsConfigPath,

      // 启用 markdown 转化插件
      plugin: ['typedoc-plugin-markdown'],

      // 更多配置项参考：https://typedoc.org/options/
      disableSources: true,
      readme: 'none',
      skipErrorChecking: true,
    },
    [new TSConfigReader()],
  );

  const project = await app.convert();

  if (project) {
    // 生成并输出产物
    await app.generateDocs(project, OUT_DIR);
  }
}

main().catch(console.error);
