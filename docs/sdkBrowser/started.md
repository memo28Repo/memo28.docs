---
outline: deep
---

# 上手



## 初始化

```ts
import {Monitoring, Run} from '@memo28.monitoring/sdk-browser'

const monitoring = new Monitoring()
    // 修改配置请使用set开头的函数配置
    .setErrorTrackingEnabled(false)
;

const run = new Run(monitoring)
```


## `setUserId`

为每一条错误日志设置用户id 以便区分用户

```ts
run.setUserId("userId")
```


## `getTrackingUserInteractionEvent`

你可以通过这个函数获取一个函数，这个函数可以用来记录用户交互事件，埋点等等...

```ts
const trackingUserInteractionEvent =  run.getTrackingUserInteractionEvent()

// 该函数用于自定义字段用于保存
trackingUserInteractionEvent.setExpandTheInformation({
    createTime: 'xxxx'
})

// 上报事件
trackingUserInteractionEvent.done()
```
