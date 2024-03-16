# 链表 API 文档

链表库提供了一系列用于操作链表和链表节点的方法。

## 类：`LinkList<T>`

链表数据结构的实现。

### 构造器

#### `constructor()`

初始化一个空的链表。

### 方法

#### `append(value: T): void`

在链表末尾添加一个新的节点。

**参数**:
- `value: T` - 要添加的新节点的值。

#### `insert(index: number, value: T): void`

在链表的指定位置插入一个新节点。

**参数**:
- `index: number` - 插入位置的索引（从 0 开始）。如果索引大于链表长度，则插入到链表末尾。
- `value: T` - 新节点的值。

#### `remove(value: T): void`

删除链表中值为给定值的第一个节点。

**参数**:
- `value: T` - 要删除的节点的值。

#### `findIndex(predicate: (value: T) => boolean): number`

根据条件查找节点的索引。

**参数**:
- `predicate: (value: T) => boolean` - 一个函数，接受节点值作为参数，返回一个布尔值。

**返回**:
- 满足条件的第一个节点的索引，如果没有找到则返回-1。

#### `forEach(callback: (node: ListNode<T>, index: number) => void): void`

遍历链表，允许在满足特定条件时修改节点数据。

**参数**:
- `callback: (node: ListNode<T>, index: number) => void` - 回调函数，允许用户基于条件修改节点。

#### `toArray<A>(transformItem?: (node: ListNode<T>) => A): A[]`

将链表转换为数组。

**参数**:
- `transformItem?: (node: ListNode<T>) => A` - 可选的转换函数，允许对链表中的每个元素进行自定义处理。

**返回**:
- 转换后的数组。

#### `print(parintItem?: (node: ListNode<T>) => string): string`

打印链表。

**参数**:
- `parintItem?: (node: ListNode<T>) => string` - 可选的打印函数，允许对链表中的每个元素进行自定义格式化。

**返回**:
- 链表打印结构。

## 类：`ListNode<T>`

链表节点的实现。

### 构造器

#### `constructor(value: T, list?: LinkList<T>)`

初始化一个新的链表节点。

**参数**:
- `value: T` - 节点的值。
- `list?: LinkList<T>` - 链表的引用，可选。

### 属性

#### `value: T`

节点的值。

#### `next: ListNode<T> | null`

指向下一个节点的引用，如果没有下一个节点则为 `null`。

#### `escapePod: ListNodeEscapePod<T>`

逃生舱：用于保存节点的前后依赖关系。

#### `listRef: LinkList<T> | null`

指向链表的引用。

### 方法

#### `updateEscapePod(prev: ListNode<T> | null | undefined, next: ListNode<T> | null | undefined): void`

更新节点的逃生舱。

**参数**:
- `prev: ListNode<T> | null | undefined` - 前一个节点的引用。
- `next: ListNode<T> | null | undefined` - 下一个节点的引用。
