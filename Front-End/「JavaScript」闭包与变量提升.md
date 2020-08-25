[闭包 - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures)

[变量提升 - MDN](https://developer.mozilla.org/zh-CN/docs/Glossary/Hoisting)

[let和const命令 - 阮一峰](https://es6.ruanyifeng.com/#docs/let)

## 闭包

- `函数`和对其周围状态（lexical environment，**词法环境**）的引用捆绑在一起构成闭包`closure`
- 闭包是指使用一个特殊的属性 `[[Environment]]` 来记录函数自身的创建时的环境的函数。它具体指向了函数创建时的词法环境
- 在 JavaScript 中，每当函数被创建，就会在函数生成时生成闭包。

```javascript
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12
```

`add5`和`add10`都是闭包。它们共享相同的函数定义，但是保存了不同的词法环境。在`add5`的环境中`x`为 5。而在`add10`中，`x`则为 10。

## 变量提升

- 将`变量`或`函数`的**声明**，提升到当前作用域的顶端
- `var`声明的变量才会存在的现象
- `let`，`const`声明的变量不会出现
- 函数声明类似于`var`，即会提升到全局作用域或函数作用域的顶端
- 作用域
  - 全局作用域
  - 函数作用域
  - 块级作用域 *ES6*
- ES6 的块级作用域必须有**大括号**，如果没有大括号，JavaScript 引擎就认为不存在块级作用域
- 从 ES6 开始，`let`命令、`const`命令、`class`命令声明的全局变量，不属于顶层对象的属性

### 只提升声明，不提升初始化

```javascript
function foo() {
	console.log(a)	// undefined
	var a = 6
}
foo()
console.log(a)		// ReferenceError: a is not defined
```

- 变量 a 是存在于函数 foo 的作用域内，`var a`将会被提升到 foo 函数体的最前面
- 第6行，变量 a 只存在于函数 foo 的作用域内，而不在全局作用域内

