<!--
 * @Description:
 * @Author: lijin
 * @Date: 2023-08-09 17:40:21
 * @LastEditTime: 2023-08-11 15:49:04
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
    - "packages/*"
    - "examples/*"
    - "docs"
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
  import lodash from "lodash";
  export function useLodash() {
    return lodash;
  }
  ```

  ```js
  // packages/utils/src/index.ts
  export _ from "./hello";
  export _ from "./useLodash";
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
  export * from "./button";
  export * from "./input";
  ```

## 模块构建

### utils 构建

- 打包配置

  ```ts
  // utils/vite.config.ts

  import { defineConfig } from "vite";

  export default defineConfig({
    build: {
      // 产物输出目录，默认值就是 dist。我们使用默认值，注释掉此字段。
      // outDir: 'dist',

      // 参考：https://cn.vitejs.dev/config/build-options.html#build-lib
      lib: {
        // 构建的入口文件
        entry: "./src/index.ts",

        // 产物的生成格式，默认为 ['es', 'umd']。我们使用默认值，注释掉此字段。
        // formats: ['es', 'umd'],

        // 当产物为 umd、iife 格式时，该模块暴露的全局变量名称
        name: "MonouiUtils",
        // 产物文件名称
        fileName: "monoui-utils",
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
  import { defineConfig } from "vite";
  import vue from "@vitejs/plugin-vue";

  export default defineConfig({
    plugins: [vue()],
    build: {
      lib: {
        entry: "./src/index.ts",
        name: "MonouiComponents",
        fileName: "monoui-components",
      },
      minify: false,
      rollupOptions: {
        external: [/@openxui.*/, "vue"],
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
  <!DOCTYPE html>
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
  import { defineConfig } from "vite";
  import vue from "@vitejs/plugin-vue";

  export default defineConfig({
    plugins: [vue()],
  });
  ```

  ```ts
  // main.ts
  import { createApp } from "vue";
  import App from "./App.vue";

  const app = createApp(App);

  app.mount("#app");
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
  import { Button, Input } from "@monoui/components";
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
  import { defineConfig } from "vite";
  import vue from "@vitejs/plugin-vue";
  import { join } from "node:path";

  export default defineConfig({
    plugins: [vue()],
    resolve: {
      // 添加别名，使其定位源码
      alias: [
        {
          find: /^@monoui\/(components)$/,
          replacement: join(__dirname, "../..", "packages", "$1", "index.ts"),
        },
        {
          find: /^@monoui\/(.+)$/,
          replacement: join(__dirname, "../..", "packages", "$1", "src"),
        },
      ],
    },
  });
  ```
