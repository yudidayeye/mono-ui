<!--
 * @Description:
 * @Author: lijin
 * @Date: 2023-08-09 17:40:21
 * @LastEditTime: 2023-08-16 17:53:44
 * @LastEditors:
-->

# monorepo + vue3 + vite + Typescript 组件库搭建

> https://juejin.cn/column/7257547252540178469

## 常用命令

```shell
# -w 代表在根目录操作
pnpm install -wD eslint typescript vite

# --filter 选项过滤子模块
pnpm install -S lodash --filter utils
```

## 代码结构搭建

- 创建项目目录：目录如下 -- 创建 `pnpm-workspace.yaml` 文件，填写 monorepo 所包含的文件夹 -- 创建 `.npmrc` 文件，填写 npm 配置 -- package.json 先初始化

  ```js
  // 项目目录
  mono-ui
  ├── docs
  │   └── package.json
  ├── components
  │   ├── Button
  │   ├── Input
  │   └── package.json
  ├── examples
  │   ├── demo1
  │   │   └── package.json
  │   └── demo2
  │       └── package.json
  ├── pnpm-workspace.yaml
  └── package.json

  ```

  ```yaml
  # pnpm-workspace.yaml
  packages:
    - 'packages/*'
    - 'examples/*'
    - 'docs'
  ```

  ```js
  // .npmrc
  registry=https://registry.npm.taobao.org
  ```

  ```json
  // "package.json"
  {
    "name": "mono-ui",
    "private": true,
    "version": "1.0.0",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "devDependencies": {
      "@vitejs/plugin-vue": "^4.2.3",
      "eslint": "^8.46.0",
      "sass": "^1.65.1",
      "typescript": "^5.1.6",
      "vite": "^4.4.9"
    },
    "dependencies": {
      "vue": "^3.3.4"
    }
  }
  ```

  ```json
  // packages/utils/package.json
  {
    // 标识信息
    "name": "@momoui/components",
    "version": "1.0.0",
    // 基本信息
    "description": "",
    "keywords": [],
    "author": "",
    "license": "ISC",
    "homepage": "https://github.com/yudidayeye/mono-ui/blob/master/README.md",
    "repository": {
      "type": "git",
      "url": "git+https://github.com/yudidayeye/mono-ui.git"
    },
    "bugs": {
      "url": "https://github.com/yudidayeye/mono-ui/issues"
    },
    // 定义脚本
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    // 入口信息，由于没有实际产物，先设置为空字符串
    "main": "index.js",
    "module": "",
    "types": "",
    "exports": {
      ".": {
        "require": "",
        "module": "",
        "types": ""
      }
    },
    // 发布信息
    "files": ["dist", "README.md"],
    // 依赖信息
    "peerDependencies": {
      "vue": ">=3.0.0"
    },
    "dependencies": {
      "@monoui/utils": "workspace:^"
    }
  }
  ```

  ```json
  // packages/docs/package.json
  {
    "name": "@monoui/docs",
    "private": true,
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "dependencies": {},
    "devDependencies": {}
  }
  ```

- 依赖安装

  ```shell
  pnpm install -wD vite typescript

  pnpm install -wD @vitejs/plugin-vue

  pnpm install -wS vue

  pnpm install -wD sass
  ```

### utils 目录搭建

- 目录结构搭建：目录如下

  ```js
  utils
  ├── package.json
  └── src
     ├── hello.ts
     ├── index.ts
     └── useLodash.ts
  ```

- 依赖安装
  ```shell
  # 为 utils 包安装 lodash 相关依赖
  pnpm --filter @monoui/utils install -S lodash @types/lodash
  ```
- 文件创建

  ```js
  // packages/utils/src/hello.ts
  export function hello(to: string = "World") {
    const txt = `Hello ${to}!`;
    alert(txt);
    return txt;
  }
  ```

  ```js
  // packages/utils/src/useLodash.ts
  import lodash from 'lodash';
  export function useLodash() {
    return lodash;
  }
  ```

  ```js
  // packages/utils/src/index.ts
  export _ from './hello';
  export _ from './useLodash';
  ```

### components 目录 vue 组件搭建

- 目录结构搭建

  ```js
  components
    ├─ button
    │  ├─ index.ts
    │  └─ src
    │     └─ button.vue
    ├─ index.ts
    ├─ input
    │  ├─ index.ts
    │  └─ src
    │     └─ Input.vue
    └─ package.json
  ```

- 内部依赖：components 模块依赖 utils 模块
  ```shell
  pnpm --filter components install -S @monoui/utils
  ```
- 组件编写，组件统一导出

  ```ts
  export * from './button';
  export * from './input';
  ```

## 模块构建

### utils 构建

- 打包配置

  ```ts
  // utils/vite.config.ts

  import { defineConfig } from 'vite';

  export default defineConfig({
    build: {
      // 产物输出目录，默认值就是 dist。我们使用默认值，注释掉此字段。
      // outDir: 'dist',

      // 参考：https://cn.vitejs.dev/config/build-options.html#build-lib
      lib: {
        // 构建的入口文件
        entry: './src/index.ts',

        // 产物的生成格式，默认为 ['es', 'umd']。我们使用默认值，注释掉此字段。
        // formats: ['es', 'umd'],

        // 当产物为 umd、iife 格式时，该模块暴露的全局变量名称
        name: 'MonouiUtils',
        // 产物文件名称
        fileName: 'monoui-utils',
      },
      // 为了方便学习，查看构建产物，将此置为 false，不要混淆产物代码
      minify: false,
    },
  });
  ```

- 构建脚本 -- 运行脚本，生成 `utils/dit/monoui-utils.mjs` 与 `utils/dit/monoui-utils.umd.js` 文件

  ```json
  // utils/package.json
  "scripts": {
     "build": "vite build"
  },
  ```

- 修改 `package.json` 的入口字段

  ```json
    "main": "./dist/monoui-utils.umd",
    "module": "./dist/monoui-utils.mjs",
    "exports": {
      ".": {
        "require": "./dist/monoui-utils.umd",
        "module": "./dist/monoui-utils.mjs"
      }
    },
  ```

- 配置不打包 lodash：修改 `vite.config.js`添加 `rollupOptions` 选项，将 lodash 声明为外部模块 -- 再次执行构建命令，产物的大小由 200kb 变为 1kb

  ```js
  // utils/vite.config.js
  export default defineConfig({
    build: {
      // 其他配置...

      // 参考：https://cn.vitejs.dev/config/build-options.html#build-rollupoptions
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: [/lodash.*/],

        output: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量。即使不设置，构建工具也会为我们自动生成。个人倾向于不设置
          /*
          globals: {
            lodash: 'lodash'
          }
          */
        },
      },
    },
  });
  ```

### components 构建

- 添加依赖 `@vitejs/plugin-vue`

  ```shell
  pnpm install -D @vitejs/plugin-vue --filter components
  ```

- 创建构建配置 `vite.config.js`(排除依赖 @memoui/utils 和 vue)

  ```js
  // components/vite.config.js
  import { defineConfig } from 'vite';
  import vue from '@vitejs/plugin-vue';

  export default defineConfig({
    plugins: [vue()],
    build: {
      lib: {
        entry: './src/index.ts',
        name: 'MonouiComponents',
        fileName: 'monoui-components',
      },
      minify: false,
      rollupOptions: {
        external: [/@openxui.*/, 'vue'],
      },
    },
  });
  ```

- 添加构建脚本 `"build": "vite build"` -- 构建 `pnpm --filter @monoui/components run build` -- 修改 components/package.json 的入口字段

  ```json
    // components/package.json
    "scripts": {
      "build": "vite build"
    },
  ```

  ```json
  // components/package.json
  {
    "main": "./dist/monoui-components.umd.js",
    "module": "./dist/monoui-components.mjs",
    "exports": {
      ".": {
        "require": "./dist/monoui-components.umd.js",
        "module": "./dist/monoui-components.mjs"
      }
    }
  }
  ```

### 整体构建

- /package.json 添加构建脚本 `"build": "pnpm --filter './packages/**' run build"` -- 构建 `pnpm --filter "./packages/**" run build`

## examples 项目搭建

- 项目目录搭建

  ```js
  examples
  └── demo1
     ├── package.json
     ├── index.html
     ├── vite.config.ts
     ├── tsconfig.json
     ├── public
     └── src
         ├── App.vue
         └── main.ts
  ```

- package.json 完善：依赖安装 -- 脚本编写 -- 设为私有，避免发布为 npm 包

  ```shell
  # 安装 components
  pnpm install -S @monoui/components --filter demo1
  ```

  ```json
    "scripts": {
      "dev": "vite dev",
      "build": "vite build"
    },
  ```

- 文件完善：index.html -- vite.config.js -- main.ts -- App.vue

  ```html
  <!-- index.html -->
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>DEMO</title>
    </head>
    <body>
      <div id="app"></div>
      <script type="module" src="/src/main.ts"></script>
    </body>
  </html>
  ```

  ```js
  // vite.config.js
  import { defineConfig } from 'vite';
  import vue from '@vitejs/plugin-vue';

  export default defineConfig({
    plugins: [vue()],
  });
  ```

  ```ts
  // main.ts
  import { createApp } from 'vue';
  import App from './App.vue';

  const app = createApp(App);

  app.mount('#app');
  ```

  ```vue
  <!-- App.vue -->
  <template>
    <div>
      <Button>1111</Button>
      <Input />
    </div>
  </template>

  <script setup lang="ts">
  import { Button, Input } from '@monoui/components';
  </script>
  ```

- 运行项目

## TypeScript 集成

### 项目代码创建 TypeScript 配置

- tsconfig.base.json 创建: 编译选项 compilerOptions 大部分都是重复的，因此我们需要建立一个基础配置文件 tsconfig.base.json，供其他配置文件继承。

  ```json
  {
    "compilerOptions": {
      // 项目的根目录
      "rootDir": ".",
      // 项目基础目录
      "baseUrl": ".",
      // tsc 编译产物输出目录
      "outDir": "dist",
      // 编译目标 js 的版本
      "target": "es2022",
      //
      "module": "esnext",
      // 模块解析策略
      "moduleResolution": "node",
      // 是否生成辅助 debug 的 .map.js 文件。
      "sourceMap": false,
      // 产物不消除注释
      "removeComments": false,
      // 严格模式类型检查，建议开启
      "strict": true,
      // 不允许有未使用的变量
      "noUnusedLocals": true,
      // 允许引入 .json 模块
      "resolveJsonModule": true,

      // 与 esModuleInterop: true 配合允许从 commonjs 的依赖中直接按 import XX from 'xxx' 的方式导出 default 模块。
      "allowSyntheticDefaultImports": true,
      "esModuleInterop": true,

      // 在使用 const enum 或隐式类型导入时受到 TypeScript 的警告
      "isolatedModules": true,
      // 检查类型时是否跳过类型声明文件，一般在上游依赖存在类型问题时置为 true。
      "skipLibCheck": true,
      // 引入 ES 的功能库
      "lib": [],
      // 默认引入的模块类型声明
      "types": [],
      // 路径别名设置
      "paths": {
        "@monoui/*": ["packages/*/src"],
        "@monoui/components": ["package/components"]
      }
    },
    "include": [
      // 项目包含哪些文件
    ],
    "exclude": [
      // 在 include 包含的文件夹中需要排除哪些文件
    ]
  }
  ```

- tsconfig.node.json 创建: 我们将所有 node 环境下执行的脚本、配置文件划分为一个 ts project，准备其配置文件 tsconfig.node.json

  ```json
  {
    // 继承基础配置
    "extends": "./tsconfig.base.json",
    "compilerOptions": {
      // 该 ts project 将被视作一个部分，通过项目引用(Project References)功能集成到一个 tsconfig.json 中
      "composite": true,
      // node 脚本没有 dom 环境，因此只集成 esnext 库即可
      "lib": ["ESNext"],
      // 集成 Node.js 库函数的类型声明
      "types": ["node"],
      // 脚本有时会以 js 编写，因此允许 js
      "allowJs": true
    },
    "include": [
      // 目前项目中暂时只有配置文件，如 vite.config.ts，以后会逐步增加
      "**/*.config.*"
    ],
    "exclude": [
      // 暂时先排除产物目录，packages/xxx/dist/x.config.js 或者 node_modules/pkg/x.config.js 不会被包含进来
      "**/dist",
      "**/node_modules"
    ]
  }
  ```

- tsconfig.src.json 创建：对于所有模块中 src 目录下的源码文件，它们几乎都是组件库的实现代码，大多要求浏览器环境下特有的 API(例如 DOM API)，且相互之间存在依赖关系。我们创建 tsconfig.src.json 将它们划入同一个 ts project 中。

  ```json
  {
    // 继承基础配置
    "extends": "./tsconfig.base.json",
    "compilerOptions": {
      "composite": true,
      // 组件库依赖浏览器的 DOM API
      "lib": ["ESNext", "DOM", "DOM.Iterable"],
      "types": ["node"]
    },
    "include": ["typings/env.d.ts", "packages/**/src", "packages/components"],
    "exclude": ["packages/components/vite.config.ts"]
  }
  ```

- tsconfig.json 创建：到此，IDE 还是无法正常提供类型服务，我们最终还是要在根目录建立一个总的 tsconfig.json，通过 项目引用(Project References)功能 将多个 compilerOptions.composite = true 的 ts project 聚合在一起，这样 IDE 才能够识别。

  ```json
  {
    "compilerOptions": {
      "target": "es2022",
      "moduleResolution": "node",
      // vite 会读取到这个 tsconfig 文件(位于工作空间根目录)，按照其推荐配置这两个选项
      // https://cn.vitejs.dev/guide/features.html#typescript-compiler-options
      "isolatedModules": true,
      "useDefineForClassFields": true
    },
    "references": [
      // 聚合 ts project
      { "path": "./tsconfig.src.json" },
      { "path": "./tsconfig.node.json" }
    ]
  }
  ```

- 查看 tsconfig 文件的配置选项和包含的文件

  ```json
  npx tsc -p tsconfig.src.json --showConfig
  ```

- 依赖安装：还要补充一些缺失的类型声明，我们在 tsconfig 文件中设置了 `"types": ["node"]`，代表注入 Node.js 各种库函数的类型声明，这需要我们在根目录下补充安装 @types/node
  ```shell
  pnpm i -wD @types/node
  ```
- env.d.ts 文件创建：我们在 tsconfig.src.json 的 include 字段中包含了 typings/env.d.ts，这是为了让 TypeScript 对于 Vite 的一些特定功能提供类型定义(参考：TypeScript 的智能提示)，我们应该实际创建这个文件。这个文件除了服务于 Vite，在后续可能将其他一些环境相关的类型定义放在这里。

  ```ts
  /// <reference types="vite/client" />
  ```

### demo 创建 Typescript 配置

- 单独创建 demo 的 tsconfig.json 配置

  ```json
  // examples/demo1/tsconfig.json
  {
    // 集成基础配置
    "extends": "../../tsconfig.base.json",
    "compilerOptions": {
      "baseUrl": ".",
      // Web 应用需要 DOM 环境
      "lib": ["ESNext", "DOM", "DOM.Iterable"],
      // Web 应用不需要 node 相关方法
      "types": [],
      // baseUrl 改变了，基础配置中的 paths 也需要一并重写
      "paths": {
        "@/*": ["src/*"],
        "@monoui/*": ["../../packages/*/src"],
        "@monoui/components": ["../../packages/components"]
      }
    },
    "include": [
      // demo 应用会引用其他子模块的源码，因此都要包含到 include 中
      "../../packages/**/src",
      "../../packages/components",
      "src"
    ],
    "exclude": ["../../packages/components/vite.config.ts"]
  }
  ```

## monorepo 即刻响应

- 为 `demo1/vite.config.ts` 设置别名，使其定位源码而非构建后的 npm 包

  ```ts
  import { defineConfig } from 'vite';
  import vue from '@vitejs/plugin-vue';
  import { join } from 'node:path';

  export default defineConfig({
    plugins: [vue()],
    resolve: {
      // 添加别名，使其定位源码
      alias: [
        {
          find: /^@monoui\/(components)$/,
          replacement: join(__dirname, '../..', 'packages', '$1', 'index.ts'),
        },
        {
          find: /^@monoui\/(.+)$/,
          replacement: join(__dirname, '../..', 'packages', '$1', 'src'),
        },
      ],
    },
  });
  ```

## TypeScript 类型检查

### 类型检查

- 对所有源码进行类型检查：报错

  ```shell
  # 根目录执行
  # -p 指定对应的 tsconfig 文件，--noEmit 使构建产物不被输出，--composite false 使得 buildInfo 文件不被输出。
  npx tsc -p tsconfig.src.json --noEmit --composite false
  ```

- 安装 vue-tsc 用于对 vue 文件进行类型检查：由于源码是 Vue 组件，所以 tsc 命令会报错，我们需要借助 vue-tsc 来支持

  ```shell
  pnpm i -wD vue-tsc

  npx vue-tsc -p tsconfig.src.json --noEmit --composite false
  ```

- 添加类型检查脚本

  ```json
  // package.json
  "scripts": {
    "type:node": "tsc -p tsconfig.node.json --noEmit --composite false",
    "type:src": "vue-tsc -p tsconfig.src.json --noEmit --composite false",
    "build": "pnpm run type:src && pnpm --filter ./packages/** run build"
  },
  ```

### 生成 d.ts 类型声明

- 插件安装 vue-tsc 插件生成 d.ts -- 修改脚本命令 -- 运行脚本,所有的产物都会被生成到 outDir 字段指定的根目录下的 dist

  ```shell
  npx vue-tsc -p tsconfig.src.json --composite false --declaration --emitDeclarationOnly
  ```

  ```json
  {
    "script": {
      "type:src": "vue-tsc -p tsconfig.src.json --composite false --declaration --emitDeclarationOnly"
    }
  }
  ```

- 新建脚本文件 `scripts/dts-mv.ts`，实现将 d.ts 产物移动到对应的包中 -- 在根目录下建立 scripts 目录，专门用于存放构建相关的脚本，并在 tsconfig.node.json 里面补充这个新的脚本目录
  ```ts
  // scripts/dts-mv.ts
  import { join } from 'node:path';
  import { readdir, cp } from 'node:fs/promises';
  // 以根目录为基础解析路径
  const fromRoot = (...paths: string[]) => {
    return join(__dirname, '..', ...paths);
  };
  // 包的 d.ts 产物目录
  const PKGS_DTS_DIR = fromRoot('dist/packages');
  // 包的目录
  const PKGS_DIR = fromRoot('packages');
  // 单个包的 d.ts 相对目录
  const PKG_DTS_RELATIVE_DIR = 'dist';
  // 包的代码入口相对目录
  const PKG_ENTRY_RELATIVE_DIR = (pkgName: string) => {
    if (pkgName === 'components') {
      return '';
    } else {
      return 'src';
    }
  };
  async function main() {
    const pkgs = await match();
    const tasks = pkgs.map(resolve);
    await Promise.all(tasks);
  }
  // 寻找所有需要移动的dts包
  async function match() {
    const res = await readdir(PKGS_DTS_DIR, { withFileTypes: true });
    return res.filter(item => item.isDirectory()).map(item => item.name);
  }
  // 处理单个包的 dts 移动
  async function resolve(pkgName: string) {
    try {
      const sourceDir = join(PKGS_DTS_DIR, pkgName, PKG_ENTRY_RELATIVE_DIR(pkgName));
      const targetDir = join(PKGS_DIR, pkgName, PKG_DTS_RELATIVE_DIR);
      const sourceFiles = await readdir(sourceDir);
      const cpTasks = sourceFiles.map(file => {
        const source = join(sourceDir, file);
        const target = join(targetDir, file);
        console.log(`[${pkgName}]: moving: ${source} => ${target}`);
        return cp(source, target, {
          force: true,
          recursive: true,
        });
      });
      await Promise.all(cpTasks);
      console.log(`[${pkgName}]: moved successfully!`);
    } catch (e) {
      console.log(`[${pkgName}]: failed to move!`);
    }
  }
  main().catch(e => {
    console.error(e);
    process.exit(1);
  });
  ```
- 安装 tsx ，用于运行 ts 脚本，由于 tsc 不具备清空输出目录的功能，为了避免混淆输出产物，我们可以选择安装工具 rimraf 来负责清空产物目录。

  ```shell
  pnpm install -wD tsx

  pnpm install -wD rimraf
  ```

- 修改脚本，将清空产物目录、构建类型、构建产物三个主要步骤按照合理的流程组合起来。只需执行一条 pnpm run build 就可以完成整套构建流程。

  ```json
  // package.json
  {
    // ...
    "scripts": {
      // ...
      "clean:type": "rimraf ./dist",
      "type:node": "tsc -p tsconfig.node.json --noEmit --composite false",
      "type:src": "vue-tsc -p tsconfig.src.json --noEmit --composite false",
      "type:src": "pnpm run clean:type && vue-tsc -p tsconfig.src.json --composite false --declaration --emitDeclarationOnly",
      "mv-type": "tsx ./scripts/dts-mv.ts",
      "build:ui": "pnpm run type:src && pnpm --filter ./packages/** run build",
      "build:ui": "pnpm run type:src && pnpm --filter ./packages/** run build && pnpm run mv-type"
    }
  }
  ```

- 给所有子包补充类型声明文件入口字段
  ```js
  // components/components/package.json
  {
      "types": "./dist/index.d.ts",
  }
  ```

## 集成 lint 代码规范工具

### 集成 Eslint

- 依赖安装

  ```shell
  pnpm i -wD eslint

  # 由于我们要具备解析 TypeScript 的能力，所以要安装 typescript-eslint 系列工具。同理，为了能够解析 Vue 语法，也要安装 vue-eslint-parser
  pnpm i -wD @typescript-eslint/parser @typescript-eslint/eslint-plugin vue-eslint-parser

  # import 模块引入相关的规则、Vue 相关规则并不包含在默认规则集、typescript-eslint 规则集以及 Airbnb 规则集中，所以我们要额外安装对应的 plugin，引入这些规则集。
  pnpm i -wD eslint-plugin-import eslint-plugin-vue

  # 安装 Airbnb 规则集，便于我们一键继承。
  pnpm i -wD eslint-config-airbnb-base eslint-config-airbnb-typescript

  # 最后给大家推荐 eslint-define-config，这个库能够让在我们编写 .eslintrc.js 配置文件时，提供完善的类型支持，大幅度提升体验，强烈推荐安装！
  pnpm i -wD eslint-define-config
  ```

- eslint 配置
  ```js
  // .eslintrc.js
  const { defineConfig } = require('eslint-define-config');
  const path = require('path');
  module.exports = defineConfig({
    // 指定此配置为根级配置，eslint 不会继续向上层寻找
    root: true,
    // 将浏览器 API、ES API 和 Node API 看做全局变量，不会被特定的规则(如 no-undef)限制。
    env: {
      browser: true,
      es2022: true,
      node: true,
    },
    // 设置自定义全局变量，不会被特定的规则(如 no-undef)限制。
    globals: {
      // 假如我们希望 jquery 的全局变量不被限制，就按照如下方式声明。
      // $: 'readonly',
    },
    // 集成 Airbnb 规则集以及 vue 相关规则
    extends: ['airbnb-base', 'airbnb-typescript/base', 'plugin:vue/vue3-recommended'],
    // 指定 vue 解析器
    parser: 'vue-eslint-parser',
    parserOptions: {
      // 配置 TypeScript 解析器
      parser: '@typescript-eslint/parser',
      // 通过 tsconfig 文件确定解析范围，这里需要绝对路径，否则子模块中 eslint 会出现异常
      project: path.resolve(__dirname, 'tsconfig.eslint.json'),
      // 支持的 ecmaVersion 版本
      ecmaVersion: 13,
      // 我们主要使用 esm，设置为 module
      sourceType: 'module',
      // TypeScript 解析器也要负责 vue 文件的 <script>
      extraFileExtensions: ['.vue'],
    },
    // 在已有规则及基础上微调修改
    rules: {
      'import/no-extraneous-dependencies': 'off',
      'import/prefer-default-export': 'off',
      // vue 允许单单词组件名
      'vue/multi-word-component-names': 'off',
      'operator-linebreak': ['error', 'after'],
      'class-methods-use-this': 'off',
      // 允许使用 ++
      'no-plusplus': 'off',
      'no-spaced-func': 'off',
      // 换行符不作约束
      'linebreak-style': 'off',
    },
    // 文件级别的重写
    overrides: [
      // 对于 vite 和 vitest 的配置文件，不对 console.log 进行错误提示
      {
        files: ['**/vite.config.*', '**/vitest.config.*'],
        rules: {
          'no-console': 'off',
        },
      },
    ],
  });
  ```
- 建立一个 ESLint 专用的文件 tsconfig.eslint.json，在其中包含所有希望被规范化的源码文件
  ```json
  // tsconfig.eslint.json
  {
    // eslint 检查专用，不要包含到 tsconfig.json 中
    "extends": "./tsconfig.base.json",
    "compilerOptions": {
      // 参考 https://typescript-eslint.io/linting/typed-linting/monorepos
      "noEmit": true
    },
    // 只检查，不构建，因此要包含所有需要检查的文件
    "include": [
      "**/*",
      // .xxx.js 文件需要单独声明，例如 .eslintrc.js
      "**/.*.*"
    ],
    "exclude": [
      // 排除产物目录
      "**/dist",
      "**/node_modules"
    ]
  }
  ```
- 不希望应用 ESLint 检查的内容，我们可以通过 .eslintignore 文件将之排除

  ```yml
  # .eslintignore
  node_modules
  dist

  !.eslintrc.js
  !.stylelintrc.js
  !.prettierrc.js
  !.lintstagedrc.js
  !.commitlintrc.js
  ```

- 添加 eslint 的脚本 -- 执行命令 -- 修改问题
  ```json
  {
    // 其他配置
    "scripts": {
      "lint:script": "eslint --ext .js,.jsx,.ts,.tsx,.vue --fix ./"
      // 其他脚本
    }
  }
  ```

### 集成 StyleLint

- 依赖安装

  ```shell
  pnpm i -wD stylelint

  stylelint-config-standard-scss：一键集成完整的 sass 规则集。继承了很多东西，包括 sass 规则实现的插件、css 标准规则集 stylelint-config-standard 等。如果你使用 less，stylelint-config-standard-less 也是类似的效果。
  stylelint-config-recommended-vue：使 Stylelint 支持对 .vue 文件的 <style></style> 部分进行检查。
  stylelint-config-recess-order：一种推荐的 css 属性排序的规则。
  stylelint-stylistic：Stylelint 升级到 15.0.0 大版本后，计划废弃风格相关的规则，这部分内容分离出来由社区维护，需要单独安装。
  ```

- 建立 .stylelintrc.js，编写配置文件

  ```js
  // .stylelintrc.js
  module.exports = {
    // 继承的预设，这些预设包含了规则集插件
    extends: [
      // 代码风格规则
      'stylelint-stylistic/config',
      // 基本 scss 规则
      'stylelint-config-standard-scss',
      // scss vue 规则
      'stylelint-config-recommended-vue/scss',
      // 样式属性顺序规则
      'stylelint-config-recess-order',
    ],
    rules: {
      // 自定义规则集的启用 / 禁用
      // 'stylistic/max-line-length': null,
      'stylistic/max-line-length': 100,
    },
  };
  ```

- .stylelintignore 文件要忽略产物目录和依赖目录

  ```shell
  # .stylelintignore
  node_modules
  dist
  ```

- 在 button 包源码目录中建立 button.scss 文件，并且在 button.vue 中补充 <style></style> 部分，填写一些测试的 scss 样式，检查 stylelint 能否识别。

  ```css
  .test-class {
    transition:
      color 0.15s ease-in-out,
      background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
  }
  ```

  ```vue
  <script setup lang="ts">
  // packages/button/src/button.vue

  // 先前的内容。。。
  </script>

  <template>
    <!-- 先前的内容。。。 -->
  </template>

  <style lang="scss">
  .testClass {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    transition:
      color 0.15s ease-in-out,
      background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
    color: #212529;
    background-color: #e9ecef;
  }
  </style>
  ```

- 在 package.json 中加入 stylelint 检查的脚本，准备执行检查

  ```json
  // package.json
  {
    // 其他配置...
    "scripts": {
      "lint:style": "stylelint --fix ./**/*.{css,scss,vue,html}"
      // 其他脚本...
    }
  }
  ```

### Prettier 的使用

- 依赖安装

  ```
  pnpm i -wD prettier
  ```

- 创建配置文件 .prettierrc.js，创建 .prettierignore 忽略依赖目录与产物目录

  ```js
  // .prettierrc.js
  module.exports = {
    // 一行最多字符
    printWidth: 100,
    // 使用 2 个空格缩进
    tabWidth: 2,
    // 不使用缩进符，而使用空格
    useTabs: false,
    // 行尾需要有分号
    semi: true,
    // 使用单引号
    singleQuote: true,
    // 末尾需要有逗号
    trailingComma: 'all',
    // 大括号内的首尾需要空格
    bracketSpacing: true,
    // 标签闭合不换行
    bracketSameLine: true,
    // 箭头函数尽量简写
    arrowParens: 'avoid',
    // 行位换行符
    endOfLine: 'lf',
  };
  ```

  ```
  # .prettierignore
  node_modules
  dist
  ```

### 与 IDE 插件结合

- 安装插件 ESLint、Stylelint、Prettier --- 添加 .vscode/extensions.json 文件

  ```json
  {
    "recommendations": [
      "vue.volar",
      "vue.vscode-typescript-vue-plugin",
      "esbenp.prettier-vscode",
      "stylelint.vscode-stylelint",
      "dbaeumer.vscode-eslint"
    ]
  }
  ```

- 添加 settings.json 项目级 IDE 选项的配置

  ```json
  // .vscode/settings.json
  {
    // 已有配置...

    // 关闭 IDE 自带的样式验证
    "css.validate": false,
    "less.validate": false,
    "scss.validate": false,
    // 指定 stylelint 生效的文件类型(尤其是 vue 文件)。
    "stylelint.validate": ["css", "scss", "postcss", "vue"],

    // 启用 eslint 的格式化能力
    "eslint.format.enable": true,
    // eslint 会在检查出错误时，给出对应的文档链接地址
    "eslint.codeAction.showDocumentation": {
      "enable": true
    },
    // 指定 eslint 生效的文件类型(尤其是 vue 文件)。
    "eslint.probe": ["javascript", "typescript", "vue"],
    // 指定 eslint 的工作区，使每个子模块下的 .eslintignore 文件都能对当前目录生效。
    "eslint.workingDirectories": [{ "mode": "auto" }]
  }
  ```

- 让 IDE 帮我们自动修复错误，调整格式，从而避免大量手动操作。我们继续在 settings.json 中配置

  ```json
  // .vscode/settings.json
  {
    // 已有配置。。。

    // 设置默认格式化工具为 Prettier
    "editor.defaultFormatter": "esbenp.prettier-vscode",

    // 默认禁用自动格式化(手动格式化快捷键：Shift + Alt + F)
    "editor.formatOnSave": false,
    "editor.formatOnPaste": false,

    // 启用自动代码修复功能，保存时触发 eslint 和 stylelint 的自动修复。
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true,
      "source.fixAll.stylelint": true
    },

    // volar 可以处理 vue 文件的格式化
    "[vue]": {
      "editor.defaultFormatter": "Vue.volar"
    },

    // json、yaml 等配置文件保存时自动格式化
    "[json]": {
      "editor.formatOnSave": true
    },
    "[jsonc]": {
      "editor.formatOnSave": true
    },
    "[yaml]": {
      "editor.formatOnSave": true
    }
  }
  ```

- 为了更好地与 Lint 插件配合，我们再补充一些 IDE 文本格式相关的配置。

  ```json
  // .vscode/settings.json
  {
    // 已有配置...

    // 行尾默认为 LF 换行符而非 CRLF
    "files.eol": "\n",

    // 键入 Tab 时插入空格而非 \t
    "editor.insertSpaces": true,

    // 缩进大小：2
    "editor.tabSize": 2,

    // 自动补充闭合的 HTML 标签
    "html.autoClosingTags": true
  }
  ```

### 集成 commitlint 与 husky

#### commitlint 安装

- 依赖安装
  ```shell
  pnpm i -wD @commitlint/config-conventional @commitlint/cli
  ```
- 根目录新建 `.commitlintrc.js`, 继承默认的 @commitlint/config-conventional 规范集

  ```js
  // .commitlintrc.js
  module.exports = {
    extends: ['@commitlint/config-conventional'],
  };
  ```

  ```
  @commitlint/config-conventional 规定了这样的 Git 提交规范：
  type(scope?): subject

  type：本次提交的类型，默认规范集支持以下类型。
      feat：添加新功能
      fix：Bug 修复
      build：构建相关的修改
      chore：对项目功能没有影响的修改
      ci：持续集成方面的修改
      docs：文档的修改
      perf：性能优化
      refactor：代码重构
      revert：代码回退
      style：样式相关调整
      test：测试相关代码
  scope：本次提交涉及哪个子模块，此部分可不填。
  subject：本次提交的描述信息。

  eg:
  feat(button): add click event.
  fix(input): fix the error of v-model.
  docs: add README.md for button.
  ```

#### 通过 husky 集成到 Git hooks 中

- 依赖安装 -- 添加脚本，使得依赖安装时自动生成 .husky 目录

  ```
  pnpm i -wD husky

  npx husky install
  ```

  ```json
  // package.json
  {
    // 其他配置...
    "scripts": {
      "prepare": "husky install"
      // 其他脚本...
    }
  }
  ```

- 添加 commit-msg 钩子

  ```shell
  # 生成 commit-msg 钩子文件
  npx husky add .husky/commit-msg

  # 使用 commitlint 命令
  - undefined
  + npx --no -- commitlint -e $HUSKY_GIT_PARAMS
  ```

### 增量 Lint 检查
