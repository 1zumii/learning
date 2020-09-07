1. [Generator 函数的语法 - 阮一峰](https://github.com/ruanyf/es6tutorial/blob/gh-pages/docs/generator.md)
2. [Generator - javascript.info](https://zh.javascript.info/generators#generator-han-shu)
3. generator n.生成器
4. yield v.产出

## Generator

- 按需一个接一个地 return/yield 多个值
- 与 iterator 完美配合使用，从而可以轻松地创建数据流

## Generator函数

- `function*`

- 返回的是一个`Object [Generator]`

- `next()` 返回一个具有两个属性的对象

  ```javascript
  {
      value: // 产出的值
      done: true/false
  }
  ```

  

