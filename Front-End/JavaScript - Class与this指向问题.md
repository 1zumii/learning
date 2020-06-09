## Symbol

- 新的原始类型

- 不能用`new`调用，通过`Symbol()`创建

- 完全唯一：创建时如果不保留其的`引用`，就无法使用

  ```javascript
  console.log(Symbol() === Symbol())			// false
  console.log(Symbol('1') === Symbol('1'))	// false
  ```

- 被用作对象的 key

  ```javascript
  let myObj = {}
  let fooSym = Symbol('foo')
  let otherSym = Symbol('bar')
  myObj['foo'] = 'bar'
  myObj[fooSym] = 'baz'
  myObj[otherSym] = 'bing'
  console.log(myObj.foo === 'bar')		// true
  console.log(myObj[fooSym] === 'baz')	// true
  console.log(myObj[otherSym] === 'bing')	// true
  ```

- 不唯一的Symbol：Symbol.for()

  > 和 **Symbol()** 不同的是，用 **Symbol.for()** 方法创建的的 symbol 会被放入一个全局 symbol 注册表中。**Symbol.for() 并不是每次都会创建一个新的 symbol**，它会首先检查给定的 key 是否已经在注册表中了。假如是，则会直接返回上次存储的那个。否则，它会再新建一个。

  - `Symbol.for()`方法创建的的 symbol 会被放入一个`全局 symbol 注册表`中
  - Symbol.for() 并不是每次都会创建一个新的 symbol，它会首先检查给定的 key 是否已经在注册表中了。假如是，则会直接返回上次存储的那个。否则，它会再新建一个。
  - `Symbol.keyFor(sym)` 方法用来获取 symbol 注册表中与某个 symbol 关联的键。也可以用于判断 Symbol 是否在全局注册表中。

  ```javascript
  let myObj = {}
  let fooSym = Symbol.for('foo')
  let otherSym = Symbol.for('foo')
  myObj[fooSym] = 'baz'
  myObj[otherSym] = 'bing'
  console.log(fooSym === otherSym)		// true
  console.log(myObj[fooSym] === 'bing')	// true
  console.log(myObj[otherSym] === 'bing')	// true
  ```

## 反射 Reflection

- 反射机制：指的是程序在**运行时**能够获取自身的信息

## 参考文章

- [[译]ES6 中的元编程：第一部分 — Symbol，了不起的 Symbol](https://juejin.im/post/5a0e65c1f265da430702d6b9)
- [JS的反射学习和应用](https://blog.5udou.cn/#/blog/detail/JSDe-Fan-She-Xue-Xi-He-Ying-Yong-2)

- [[译]深入理解 ES6 中的反射](https://juejin.im/post/5a0cf3745188254dd935f342#heading-4)

