---
outline: deep
---

# 配置


## `Monitoring` 配置类

```ts
import {Monitoring, Run} from '@memo28.monitoring/sdk-browser'

const monitoring = new Monitoring()
    // 修改配置请使用set开头的函数配置
    .setErrorTrackingEnabled(false)
;

new Run(monitoring)
```

默认配置 

- `errorTrackingEnabled` - 是否启用错误监控(可用)。 默认 `true`

- `errorSamplingRate` - 错误采样率。 默认

- `performanceTrackingEnabled` - 是否启用性能监控(可用)。 默认 `true`

- `performanceSamplingRate` - 性能采样率。 默认

- `captureUserDetails` - 是否上报用户信息(可用)。 默认 `true`

- `captureDeviceDetails` - 是否上报设备信息(可用)。 默认 `true`

- `captureNetworkRequests` - 是否上报网络请求(可用)。 默认 `true`

- `captureUserInteractions` - 是否上报用户交互。 默认 `true`

- `clearCacheOnError` - 在错误发生时是否清除缓存。 默认 `false`

:::info
**实时性要求高的应用**： 如果你的应用要求实时性较高，用户不能看到错误或过时的数据，可以考虑在错误发生时清除缓存，以便下一次用户访问时重新获取最新的数据。

**对用户体验要求高的应用**： 有些应用在发生错误时会尽力提供良好的用户体验，通过清除缓存可以减少用户看到错误页面的可能性。

**缓存数据可能导致错误**： 如果你的错误是与缓存数据相关的，并且你认为清除缓存可以解决或减少这类错误，那么这个配置就是有意义的。
:::

- `customErrorTypes` - 自定义错误类型(可用)。 默认 `['window.error', 'unhandledrejection', 'user-defined', 'cross domain']`

- `crossOriginErrorTracking` - 是否跨域错误监控(可用)。 默认 `true`

- `whitelistUrls` - 需要监控接口的白名单。 默认 `[]`

- `blacklistUrls` - 需要监控接口的黑名单。 默认 `[]`

- `reportingEndpoint` - 上报地址。

- `reportingInterval` - 上报频率(可用)。 默认 `10000`

- `maxRetries` -  最大重试次数(可用)。 默认 `3`


