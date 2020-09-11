1. [Generator 函数的语法 - 阮一峰](https://github.com/ruanyf/es6tutorial/blob/gh-pages/docs/generator.md)
2. [Generator - javascript.info](https://zh.javascript.info/generators#generator-han-shu)
3. generator *n.*生成器
4. yield *v.*产出

## Generator

- 按需一个接一个地 return/yield 多个值
- 与 iterator 完美配合使用，从而可以轻松地创建数据流

## Generator函数

- `function*`

- 返回的是一个`Object [Generator]`

- `next()` 返回一个具有两个属性的对象

  ```javascript
  {
  	value: yield, // 产出的值
  	done: false
  }
  ```
  
  ```javascript
  {
  	value: return, // 返回的值
  	done: true
  }
  ```
  
- generator 函数是可迭代的

  - 可以使用`for..of`循环遍历
  - 可以使用`iterator`的所有相关功能

## Generator组合

- 使用`yield*`，将一个 generator **组合**到另一个 generator 中

```javascript
function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) {
        yield i
    }
}
function* generatePasswordCodes() {
    // 0..9
    yield* generateSequence(48, 57)
    // A..Z
    yield* generateSequence(65, 90)
    // a..z
    yield* generateSequence(97, 122)
}
let str = ''
for (let code of generatePasswordCodes()) {
    str += String.fromCharCode(code)
}
console.log(str) // 0..9A..Za..z
```

## 双向的next()

### 1. 没有参数：获取generator的下一次的值

```js
function* gen() { 
    yield 1;
    yield 2;
    yield 3;
}

let g = gen(); // "Generator { }"
g.next();      // "Object { value: 1, done: false }"
g.next();      // "Object { value: 2, done: false }"
g.next();      // "Object { value: 3, done: false }"
g.next();      // "Object { value: undefined, done: true }"
```

### 2. 有参数：向generator传值

- `yield`表达式本身没有返回值，或者说总是返回`undefined`。`next`方法可以带一个参数，该参数就会被当作上一个`yield`表达式的返回值

```js
function* gen() {
    while (true) {
        var value = yield null
        console.log('insides', value)
    }
}

let g = gen()
console.log('outside', g.next(1))
console.log('outside', g.next(2))
```

> // 没有“inside 1”，是因为第一次调用没有记录任何内容，因为生成器最初没有产生任何结果
> outside { value: null, done: false }
> insides 2
> outside { value: null, done: false }

## generator.prototype.throw()

## generator.prototype.return()

