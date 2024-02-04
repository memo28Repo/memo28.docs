---
outline: deep
---

# 扩展基础类型（String, Number

## `String`

```ts
interface String {
    /**
     *
     * 对比字符串 或者 数字 是否相等
     *
     * @param val - 对比的值
     *
     * @public
     */
    equal(val: string | number): boolean


    /**
     *
     * 快速打印log
     *
     * @param mark
     *
     * @public
     */
    log(mark?: string): string;

    /**
     *
     * 首字母大写
     *
     * @public
     */
    capitalize(): string


    /**
     *
     * 转义 RegExp 字符串中特殊的字符 "^", "$", "", ".", "*", "+", "?", "(", ")", "[", "]", ", ", 和 "|" in .
     *
     * '[lodash](https://lodash.com/)'.escapeRegExp();
     * // '\[lodash\]\(https://lodash\.com/\)'
     *
     * @see https://www.lodashjs.com/docs/lodash.escapeRegExp
     *
     * @public
     *
     */
    escapeRegexp(): string
}
```

## `Number`

```ts
interface Number {
    /**
     *
     * 对比字符串 或者 数字 是否相等
     *
     * @param val - 对比的值
     *
     * @public
     */
    equal(val: string | number): boolean


    /**
     *
     *
     * @param mark
     *
     * @public
     */
    log(mark?: string): string | number;
}

```

## 拓展类型提示

```tsconfig.json
// tsconfig.json

{
   "types": ["@memo28/utils/index.d.ts"],
}
```