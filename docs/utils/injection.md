---
outline: deep
---

# `Injection`


## `Injection`

```ts
/**
 * 链式调用 注入元数据属性
 *
 * `Injection` 类允许你通过链式调用的方式注入和检索对象的元数据属性。
 *
 *
 * @typeParams K - 属性key的类型
 *
 * @public
 */
export declare class Injection<K = string> {
    private target;
    /**
     * 构造函数，可选参数 `target` 用于初始化目标对象。
     *
     * @param target - 目标对象，可选
     */
    constructor(target?: object);
    /**
     * 设置目标对象。
     *
     * @param target - 目标对象
     * @returns 当前 `Injection` 实例，支持链式调用
     */
    setTarget(target: object): this;
    /**
     * 为目标对象设置指定键的值。
     *
     * @param key - 属性键
     * @param value - 要注入的值
     * @returns 当前 `Injection` 实例，支持链式调用
     */
    setValue<V = unknown>(key: K, value: V): this;
    /**
     * 获取目标对象指定键的值。
     *
     * @param key - 属性键
     * @returns 指定键的值
     */
    getValue<V = unknown>(key: K): V;
    /**
     * 获取目标对象所有元数据键的数组。
     *
     * @returns 元数据键的数组
     */
    getKeys(): K[];
}
```


```ts
// 示例用法
const metadata = new Injection<"as" | 'keys'>()
    .setTarget({})
    .setValue("as", 1)
    .setValue('keys', 12)
    .getValue('keys'); // 12
```
