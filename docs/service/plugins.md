---
outline: deep
---

# 自带插件


## `pocketValue` 触发器(默认无需配置)

当你的请求不可用时 兜底响应类型 防止不可用的参数导致整个项目崩溃

能够捕捉到的错误

- `axios` 内部错误: 协议错误等

- 请求错误: 404, 500, 502, 503, 504 等

```ts
@instantiation()
@modules({
})
@initializeConfiguration({
    baseURL: 'http://localhost:8081/',
    debugger: false
})
export class Service extends ServiceCore {
}

const http = new Service().getAxios();

const result = await http({
    url: 'xxx',
    pocketValue: [1,2,3]
}) 
// xxx路由是不存在的 该请求将为报错 返回兜底值

// result = [1,2,3]

```





## `MultiVersionSwitching` 拦截器

版本控制插件, 允许快速切换请求版本

```ts
@instantiation()
@modules({
    interceptorModule: [MultiVersionSwitching],
})
@initializeConfiguration({
    baseURL: 'http://localhost:8081/version/',
    // 定义请求url上的占位符 通常情况下为需要替换 version 的位置
    versionPlaceholder: 'version',
    // 定义替换占位符的默认值
    version: 'v1',
    debugger: false
})

export class Service extends ServiceCore {

}

const http = new Service().getAxios()

http({
}) // 请求 http://localhost:8081/v1

http({
    version: 'v2'
}) // 请求 http://localhost:8081/v2
```


## `RetData` 拦截器

请求成功则 直接返回 `response.data` 参数


## `Cache` 拦截器 & `CacheTrigger` 触发器

实现请求缓存的功能

默认使用 `Map` 缓存数据

你也可定义自己的缓存逻辑 [参考](https://github.com/memo28Repo/memoRepo/blob/main/service/service/src/plugin/cache/impl/local.ts)

```ts
import {
    ExpirationTime,
    Cache,
    CacheTrigger,
    ServiceCore,
    initializeConfiguration,
    instantiation,
    modules,
    LocalCache
} from '@memo28/service';

@instantiation()
@modules({
    interceptorModule: [Cache],
    triggerInterceptor: [CacheTrigger]
})
@initializeConfiguration({
    baseURL: "http://localhost:8089",
    // 缓存方式 (可选)  默认 Map
    cacheImpl: new LocalCache()
})
class Service extends ServiceCore {
}

const http = new Service().getAxios();

const result = await http({
    url: '/get',
    pocketValue: 12,
    useCache: true, // 使用缓存 当缓存存在 且 在缓存过期时间内 则直接返回缓存
    // 定义过期时间
    // 10秒后过期
    cacheExpirationTime: new ExpirationTime('second', 10).generateExpirationTime()
}) 
```



## 请求重试

```ts
import {
    Retry,
    ServiceCore,
    initializeConfiguration,
    instantiation,
    modules,
    RetryTrigger
} from '@memo28/service';

@instantiation()
@modules({
    interceptorModule: [Retry],
})
@initializeConfiguration({
    baseURL: "http://localhost:8089",
    // 重试次数
    retryCount: 3,
    // 重试间隔
}
class Service extends ServiceCore {
}

const http = new Service().getAxios();

const result = await http({
    url: '/get',
    pocketValue: 12,
    // 重试次数
    retryCount: 3,
}) 
```



