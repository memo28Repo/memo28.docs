---
outline: deep
---


# @memo28/service



## 安装


```shell
npm i @memo28/service
```


```shell
yarn add @memo28/service
```

```shell
pnpm add @memo28/service
```



## 快速开始


```ts
import {MultiVersionSwitching, ServiceCore, initializeConfiguration, modules, instantiation} from '@memo28/service'

// 初始化 axios 装饰器(必须)
@instantiation()
/**
 *
 * 配置拦截器和触发器插件装饰器(可选)
 *
 * MultiVersionSwitching 自带版本控制拦截器插件
 *
 * RetData, Header, ErrorCode 为用户自定义拦截器插件
 *
 */
@modules({
    interceptorModule: [MultiVersionSwitching, RetData, Header, ErrorCode],
})
// 配置请求基本参数装饰器(可选)
@initializeConfiguration({
    baseURL: 'http://localhost:8081/version/',
    debugger: false
})
export class Service extends ServiceCore {

}

const http = new Service().getAxios() // 获取请求实例


http({
    url: 'xxx'
}) //  发起请求
```
