# monorepo 项目搭建

## 常用命令

```shell
# -w 代表在根目录操作
pnpm install -wD eslint typescript vite

# --filter 选项过滤子模块
pnpm install -S lodash --filter util

# 指定内部模块之间的互相依赖
pnpm install -S util --filter ui
```

## 搭建步骤

- 创建项目目录：目录如下 -- 创建 `pnpm-workspace.yaml` 文件，填写 monorepo 所包含的文件夹 -- 创建 `.npmrc` 文件，填写 npm 配置

  ```js
  // 项目目录
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

- 依赖安装

-
