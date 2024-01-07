---
outline: deep
---

# 拦截器

## 理解拦截器

拦截器是一种特殊的插件，它可以拦截请求和响应，并对它们进行处理。

```ts
@instantiation()
@modules({
    interceptorModule: [Plugin1,Plugin2],
})
@initializeConfiguration({
})
export class Service extends ServiceCore {
}
```

请注意插件的执行顺序 `Plugin1 -> Plugin2`

> 请求

`Plugin1` 会将请求拦截并处理请求参数 当然你也可以选择不处理

当`Plugin1` 不返回任何值时，`Plugin2` 接受到一个纯净的请求参数 否则将接收到 `Plugin1` 处理过后的请求参数

::: info

响应同理

:::

:::tip
所以建议在插件中对任何参数字段都不应该采取删除操作，而应该提供更多的信息在返回值中
:::



## 如何自定义拦截器


你的拦截器以 `class` 方式定义并且实现 `interceptorImpl`  接口


恭喜你 已定义了一个拦截器

但它没有任何逻辑

该 `interceptorImpl` 接口接受两个泛型分别为`请求类型(可选)`和`响应类型(可选)` 


:::info

`initializeConfigurationTypes` 是个增强类型 包含了`axios`的所有参数 同时也包含了 `多版本请求,请求重试,请求兜底`插件参数

:::

```ts
import { interceptorImpl , initializeConfigurationTypes } from '@memo28/service'

class Core implements interceptorImpl<initializeConfigurationTypes & Req, Res> {
    
}
```



```ts
import { interceptorImpl , initializeConfigurationTypes } from '@memo28/service'

class Core implements interceptorImpl<initializeConfigurationTypes & Req, Res> {
    
    // 定义请求成功参数
    
    // 接受原始请求参数 或 上一个插件处理过的请求参数
    requestSuc(req: initializeConfigurationTypes & Req): Promise<initializeConfigurationTypes & Req> | initializeConfigurationTypes & Req {
        // 返回给下一个插件的请求参数
        return req
    }
    
    
    // 响应成功
    // 响应流程 与请求同理
    responseSuc(res: Res): Promise<Res> | Res {
        // 返回给下一个插件的响应参数
        return res
    }


    // 请求失败拦截器
    requestFail(error: any): any {
        
    }

    // 响应失败拦截器
    responseFail(error: any): any {

    }
}
```
