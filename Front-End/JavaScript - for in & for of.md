- [Js中for in 和for of的区别 - 掘金](https://juejin.im/post/5aea83c86fb9a07aae15013b)

- [JS中for of和for in的区别 - segmentfault](https://segmentfault.com/q/1010000006658882)

1. 推荐在循环对象属性的时候，使用`for...in`,在遍历数组的时候的时候使用`for...of`。
2. `for...in`循环出的是key，`for...of`循环出的是value
3. 注意，`for...of`是ES6新引入的特性。修复了ES5引入的`for...in`的不足
4. `for...of`不能循环普通的对象，需要通过和`Object.keys()`搭配使用