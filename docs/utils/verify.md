---
outline: deep
---

# 验证相关`api`


## `Chinese`

```ts
/**
 *
 * 验证输入是否为中文
 *
 * @public
 *
 */
export declare class Chinese extends VerificationFlow<str> {
    private msg?;
    constructor(s: str, msg?: string | undefined);
    verification(args?: str): Panic<str>;
}
```


## `Emoji`

```ts
/**
 *
 * 验证emoji，不通过时 get 不会返回错值
 *
 * @public
 */
export declare class Emoji extends VerificationFlow<str> {
    private msg?;
    constructor(phone?: str, msg?: string | undefined);
    verification(args?: string): Panic<string>;
}
```

## `Mail`

```ts
/**
 * 验证邮箱, 不通过时 get 不会返回错值
 *
 * @example new Mail('asasd').set('asdfaf').get()
 *
 * @public
 */
export declare class Mail extends VerificationFlow<str> {
    private msg?;

    constructor(phone?: str, msg?: string | undefined);

    verification(args?: string): Panic<string>;
}
```

## `Phone`

```ts
/**
 * 验证手机号 验证不通过时 get 不会返回错误值
 * @example new Phone('asdfa').set('asdfa').get()
 *
 * @public
 */
export declare class Phone extends VerificationFlow<str> {
    private msg?;

    constructor(phone?: str, msg?: string | undefined);

    verification(args?: string): Panic<string>;
}
```

## `isObjectEmpty`

```ts
/**
 *
 * 对象是否为空
 *
 * @public
 */
export declare function isObjectEmpty(val: object): boolean;
```

## `isArrayEmpty`

```ts
/**
 *
 * 数组是否为空
 *
 * @param val - 数组
 */
export declare function isArrayEmpty(val: unknown[]): boolean;
```

## `isEmpty`

```ts
/**
 *
 * 判断传入的参数是否为空
 *
 * @public
 *
 */
export declare function isEmpty(val: any): boolean;
```

## `SNI`

```ts
/**
 * String Number includes的简称
 * @example
 *  const a = 1;
 *
 *  SNI(2, a) => [2,'2'].includes(a)
 *  SNI([1,2,3], a) => [1,2,3,'1','2','3'].includes(a)
 *
 * @public
 */
export declare function SNI(n: number | string | (number | string)[], value: any): boolean;
```

## `VerificationFlow`

实现一个验证类

看到 `Mail` 和 `Phone` 都继承了  `VerificationFlow` 并传入一个 `value` 的 `泛型`

```ts
declare class Mail extends VerificationFlow<str> {
}
```

```ts
/**
 * 验证核心
 *
 * @remarks
 *
 * @public
 */
export declare class VerificationFlow<T = unknown> extends AnomalousChain implements Verify<T> {
    value: T;

    protected skip(errors: ErrorsNewResult | null): this;

    constructor(args: T);

    /**
     *
     * 通常继承 {@link VerificationFlow} 后该方法都必须重写为您的验证逻辑 用于判断验证值是否正确
     *
     * @param args - 验证值
     *
     * @public
     */
    verification(args?: T): Panic<T>;

    continuousReporting(type: keysForStoreEmit, value: storeEmit[keysForStoreEmit]): this;

    /**
     *
     * 检查和验证值
     *
     * 调用 `verification` 判断是否返回一个带有错误的 {@link Panic} 类型的值
     *
     * 如果存在错误则返回 `false` 反之
     *
     * @param args - 验证的值
     *
     * @return boolean
     *
     * @private
     *
     *
     */
    private inspectionAndVerification;

    /**
     *
     * 重新赋值时需校验 无误后赋值
     *
     * @param args - 新值
     *
     * @public
     */
    set(args: T): this;

    /**
     *
     * 获取值
     *
     * 获取值前会先验证 取决于您的验证逻辑
     *
     * 通常在一些验证不通过的情况下 建议直接 throw 抛出 强制停止程序继续执行
     *
     * @public
     */
    get(): T;
}
```

我们实现一个当验证不通过时 报错不往下走的验证类

:::tip
通常我们建议将验证类作为参数传递 这样便可在参数传递阶段就进行校验 而不污染后续方法的业务逻辑判断
:::


```ts
// 检查验证码
export class ThrowVerificationCode extends VerificationFlow<str> {

    verification(args?: str): Panic<str> {
        const val = args 
        if (val.trim().length < 4) {
            toast('验证码不足4位')
            throw new Error("验证码不足4位")
        }
        return [null, val]
    }
}

// 登录
// 验证码的验证在参数传递时检查
function loginHandler(code: ThrowVerificationCode) {
    login({
        // 传入验证码
        code: code.get()
    })
}


loginHandler(new ThrowVerificationCode("12")) // 验证吗不足4位 直接报错终止程序

```
