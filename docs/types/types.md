---
outline: deep
---


# 类型列表

## `func` 函数

### `fn` 

```ts
/**
 *  定义一个普通函数
 *
 * @example
 *
 * type f = fn<[number,string],void> // (number,string) => void
 *
 * @typeParam P - 参数类型 示例`[number, string]`
 *
 * @typeParam R -  返回值类型
 *
 * @public
 */
export declare type fn<P extends any[] = any, R = unknown> = (...args: P) => R
```

### `promiseFn` 


```ts
/**
 * 定义一个`promise`函数
 *
 *
 * @example
 *
 * type f = promiseFn<[number,string],void> // (number,string) => Promise<void>
 *
 * @typeParam P - 参数类型 示例`[number, string]`
 *
 * @typeParam R -  返回值类型
 *
 * @public
 */
export declare type promiseFn<P extends any[] = any, R = unknown> = (...args: P) => Promise<R>
```


### `mergeFnWithPromiseFn` 


```ts
/**
 *
 * 兼容普通函数和`promise`函数类型
 *
 * @example
 *
 * type f = mergeFnWithPromiseFn<void, [string, number]> // fn<[string, number], void> | promiseFn<[string, number], void>
 *
 * type f = mergeFnWithPromiseFn<void, [string, number],false> // fn<[string, number], void>
 *
 * type f = mergeFnWithPromiseFn<void, [string, number],true> // promiseFn<[string, number], void>
 *
 *
 * @typeParam T - 函数返回值
 * @typeParam P - 函数参数 `[number,number]` = `(number,number) => void`
 * @typeParam isP - 是否是一个`promise`
 *
 * @public
 */
export declare type mergeFnWithPromiseFn<T = unknown, P extends any[] = any, isP extends boolean | undefined = undefined> = isP extends undefined
    ? fn<P, T> | promiseFn<P, T>
    : isP extends true
        ? promiseFn<P, T>
        : fn<P, T>
```


## `object` 对象

### `getKeys` 

```ts
/**
 * 获取 对象 的 所有 key type
 *
 * @example
 *
 * type f = getKeys<{ name: string; age: number }> // name | age
 *
 */
export type getKeys<T extends obj> = Equal<T, any[]> extends true ? never : keyof T
```


### `getValues`

```ts
/**
 * 获取 对象 的 所有 `value` type
 *
 * @example
 *
 * type f = getObjValues<{ name: string; age: number }> // string | number
 *
 *
 * @typeParam T - 默认需要一个`object`
 *
 * @public
 */
export type getValues<T extends obj> = Equal<T, any[]> extends true ? never : T[keyof T]
```


### `SuperObject`

```ts
/**
 *
 * 对象类型的集合方法 可直接获取到`keys and values`
 * 未来将会有更多方法被安装到 `SuperObject` 类型上
 *
 * @example
 *
 * type S = SuperObject<{ name: string; age: number }> // 等价于下方类型
 * type S = {
 *     allKeys: "name" | "age";
 *     allValues: string | number;
 * }
 *
 *
 * @typeParam T - 默认需要一个 `object`
 *
 * @public
 */
export type SuperObject<T extends obj> =
// 如果是数组直接返回never
    T extends any[]
        ? never
        : T extends object
            ? {
                // 如果是对象 返回一系列类型方法
                allKeys: getKeys<T>
                allValues: getValues<T>
            }
            : never
```

### `objWithValue`

```ts
/**
 *  指定 `obj` 的 `value`类型
 *
 * @example
 *
 * type S = objWithValue<string | number> // string | number
 *
 * @typeParam T - `value` 类型
 *
 * @public
 */

export type objWithValue<T> = { [key: string]: T }
```

### `Get`

```ts
/**
 * 获取对象某个值的类型
 *
 * type S = {
 *     name: string;
 *     age: number;
 *     [key: string]: any;
 * }
 * type f = Get<S, "name"> // string
 * type f = Get<S, "age"> // number
 * type f = Get<S, "name.age"> // never
 * type f = Get<S, "name.age.name"> // never
 *
 *
 * @public
 */
export type Get<T extends Record<string, any>, K extends string, P = keyof T> = K extends P ? T[K] : K extends `${infer L}.${infer R}` ? L extends P ? Get<T[L], R> : never : never
```

### `ObjectKeyPaths`

```ts
/**
 *
 * 获取对象的所有key路径
 *
 * type value = ObjectKeyPaths<{ name : { age: number}}> // 'name.age' | 'name'
 *
 * @public
 *
 */

export type ObjectKeyPaths<T, K extends keyof T = keyof T & (string | number)> =
  | K
  | (K extends string | number
  ? T[K] extends object
    ? `${K}${ObjectKeyPaths<T[K]> extends infer L extends string | number
      ? `.${L}` | (L extends number ? `${"." | ""}[${L}]` : never)
      : never}`
    : never
  : never);
```

## `verify` 验证


### `Expect` 


```ts
/**
 * 验证`true`类型 如果泛型参数不为 `true` 将编译不通过
 *
 *
 * @example
 *
 * type S = Expect<true> // 通过
 * type S = Expect<false> // 编译器报错
 *
 *
 * @typeParam T - `extends true` 需要一个推导类型为 `true` 的类型
 *
 * @public
 */
export declare type Expect<T extends true> = T
```


### `IsFalse` 

```ts
/**
 * 同 {@link Expect} 用法相同 不过取了个反
 *
 * @example
 *
 * type S = IsFalse<false> // 通过
 * type S = IsFalse<true> // 编译器报错
 *
 *
 * @typeParam T - `extends false` 需要一个推导类型为 `false` 的类型
 *
 * @public
 */
export declare type IsFalse<T extends false> = T
```


### `IsAny` 


```ts
/**
 * `0 extends 1` 永远返回`false`, (`0` 不可分配给 `1`), 因此`0 extends (1 & T)` 也不会满足,因为 `( 1 & T)` 比 `1` 的类型范围 更窄 .
 * 但是当`T` 是 `any` 时 , 由于 `any` 是故意不健全的类型(顶级类型), 并且充当了几乎所有其他类型的超类型和子类型, 因此比较`any`时其他类型会被忽略 就变成了 `0 extends any`, 自然返回 `true`.
 * 需要注意的时这仅仅适用 `strictNullChecks` 启用 (默认启用)
 * 
 * @remarks
 * IsAny<any> => true
 * IsAny<number> => false
 *
 * @see https://stackoverflow.com/questions/49927523/disallow-call-with-any/49928360#49928360
 *
 * @public
 */
export declare type IsAny<T> = 0 extends 1 & T ? true : false
```

### `Equal` 

```ts
/**
 * 这是一个创造性的使用条件类型的可分配行规则的解决方案. 它依赖于在未知时被延迟推导的条件类型`T` ，延迟类型条件的可分配依赖于内部 `isTypeIdenticalTo` 检查,这仅是用于 1. 两种条件类型具有相同的约束 2. 两个条件的真假分支是同一类型
 *
 * @example
 * Equal<number,object> => false
 * Equal<number,number> => true
 *
 * @see https://github.com/Microsoft/TypeScript/issues/27024
 *
 * @public
 */
export declare type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false
```


### `Extends` 

```ts
/**
 *
 * 用于检查类型 `E` 是否继承于 类型 `V`
 *
 * @example
 *
 * type S = Extends<{ name: string }, object> => true
 *
 *
 * @typeParam E - 被比较类型
 * @typeParam V - 比较类型
 *
 * @public
 *
 */
export declare type Extends<E, V> = E extends V ? true : false
```

