-  [Iterator 和 for...of 循环 - 阮一峰](https://github.com/ruanyf/es6tutorial/blob/gh-pages/docs/iterator.md)
- [Iterable object 可迭代对象 - javascript.info](https://zh.javascript.info/iterable)

### Iterable Object

- 实现了`iterator`接口的对象
- 默认的 Iterator 接口：`Symbol.iterator`

- `for..of`默认调用对象的`[Symbol.iterator]`方法

### Iterator

- 返回一个`遍历器对象`
- 遍历器对象：
  - `next()` *必须部署*
    - 返回的结果的格式**必须**是 `{done: Boolean, value: any}`
    - 当 done=true 的时候，表示迭代结束，否则 value 是下一个值
  - `return()`：如果 for..of 循环提前退出（通常是因为出错，或者有break语句）就会调用
  - `throw()`

### 调用 Iterator 接口的场合

- 解构赋值
- 扩展运算符`...`
- yield*
- 其他场合
  - for...of
  - Array.from()
  - Map(), Set(), WeakMap(), WeakSet()
  - Promise.all()
  - Promise.race()