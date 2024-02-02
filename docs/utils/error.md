---
outline: deep
---

# `Errors`

 [抛弃trycatch，用go的思想去处理js异常](https://juejin.cn/post/7207707775774031930)



## `Errors`

```ts
/**
 * 错误对象
 *
 * @remarks
 * 提供一系列错误对象方法
 *
 * @public
 */
export declare class Errors {
    /**
     *  生成一个错误
     *
     *   @remarks
     *  Errors.News('err')
     *
     *  Errors.News('err', { classify: 1 }) //  给错误分类
     *
     *  @param {string} msg - 错误信息
     *  @param {NewOpt} opt - 错误参数
     *
     *  @public
     */
    static New(msg: string, opt?: NewOpt): ErrorsNewResult;
    /**
     * 对比多个错误是否为同一种类型
     *
     *
     * @remarks
     * Errors.As(Errors.News('err', { classify: 1 }),
     * Errors.News('err2', { classify: 1 })) // true
     *
     * Errors.As(Errors.News('err', { classify: 1 }),
     * Errors.News('err2', { classify: 2 })) // false
     *
     * @public
     */
    static As(...errors: ErrorsNewResult[]): boolean;
    /**
     * @description 是否是一个 由Errors.New生成的错误对象
     * @param value
     * @returns
     *
     * @public
     */
    static Is(value: any): boolean;
}
```


## `ErrorsNewResult`

```ts
/**
 *
 * 一个错误对象应该包含
 *
 * @public
 *
 */
export interface ErrorsNewResult {
    /**
     *  获取报错信息
     *
     *  @public
     */
    unWrap(): string
    /**
     *  返回调用栈
     *
     *  @public
     */
    trace(): string
    /**
     *  报错详细信息
     *  @public
     */
    info(): ErrorsNewResultInfo
}
```


## `Panic`

```ts
/**
 *  错误处理返回类型
 *
 *  @public
 */
export type Panic<T = unknown> = [ErrorsNewResult | undefined | false | null | true, T]

```

抛出错误应该使用 `Panic` 抛出一个恐慌对象
