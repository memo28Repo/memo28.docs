---
outline: deep
---

# 触发器


## 理解触发器

一组在请求触发前和响应返回后执行的插件，可以用来执行一些自定义的逻辑。


触发器顺序

```ts
@instantiation()
@modules({
    triggerInterceptor: [Plugin1,Plugin2],
})
@initializeConfiguration({
})
export class Service extends ServiceCore {
}
```

## 如何定义触发器


```ts

class Trigger implements triggerInterceptorImpl<Req, Res, B> {

    displayName = '插件名'

    // 响应返回时候触发 不管响应成功还是响应失败
    async beforeTrigger(config: Req):Promise<Res | void | beforeTriggerResultTypes<B>> {
        
        // 但返回值为 beforeTriggerResultTypes 类型时将不会触发请求 
        
        // 而是返回 beforeTriggerResultTypes.data 数据
    }


    
    // 请求触发器 在请求拦截器之前执行
    async afterTrigger<T = unknown>(res: Res, req: Req): Promise<T | void> {
        
        
    }

    // 触发响应触发器和请求触发器时候都会触发的回调
    async logsCallback(type: 'afterTrigger' | 'beforeTrigger', data: void | Res | Req, res?: unknown): void {
    }
}
```
