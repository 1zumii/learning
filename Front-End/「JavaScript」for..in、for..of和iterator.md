- [for in 和 for of 的区别 - 掘金](https://juejin.im/post/5aea83c86fb9a07aae15013b)
- [Iterator 和 for...of 循环 - 阮一峰](https://es6.ruanyifeng.com/#docs/iterator)

## for ... in

- 循环对象的`key`
- 通常来说，**不应该**用 for...in 来处理数组

## for ... of 

- 调用对象的`[Symbol.iterator]`方法
  - 如果没找到，就会报错
  - 这个方法必须返回一个`迭代器 iterator` *一个有 next 方法的对象*
- ES6引入

- 数组的 for...of 会循环数组中的值

## iterator

- 一种数据结构只要部署了 Iterator 接口，就称这种数据结构是`可遍历的 iterable`