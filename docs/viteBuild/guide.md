---
outline: deep
---

# @memo28/viteBuild

该项目对 `vite` 配置 进行了二次封装，使其更加易用。

且根据不同技术栈，预设了不同的插件配置

并且

## 安装

```shell
npm i @memo28/vitebuild lodash.escaperegexp lodash.random
```

```shell
yarn add @memo28/vitebuild lodash.escaperegexp lodash.random
```

```shell
pnpm add @memo28/vitebuild lodash.escaperegexp lodash.random
```

## tsconfig

- 默认别名配置

```json
{
  "baseUrl": "./src",
  "paths": {
    "~/*": [
      "./*"
    ]
  }
}
```