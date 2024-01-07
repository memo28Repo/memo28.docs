---
outline: deep
---

# API 列表


## `callComponentGlobally`

以`api`的方式调用 全局组件 

:::info
仅在浏览器环境中生效
:::

```ts
import {callComponentGlobally} from '@memo28/vue'

/**
 *
 *
 *
 * Component 定义组件
 * Props 定义组件的参数
 * Container 挂在在某个元素上(可选
 *
 */
const component = callComponentGlobally(Component, Props, Container)

component.render() // 渲染并且返回组件实例

component.destruction() // 销毁组件
```
