1. [模块 (Module) 简介 - JavaScript.info](https://zh.javascript.info/modules-intro)
2. [导出和导入 - JavaScript.info](https://zh.javascript.info/import-export)
3. [动态导入 - JavaScript.info](https://zh.javascript.info/modules-dynamic-imports)
4. [Module 的语法 - 阮一峰](https://github.com/ruanyf/es6tutorial/blob/gh-pages/docs/module.md)
5. [Module 的动态加载 - 阮一峰](https://github.com/ruanyf/es6tutorial/blob/gh-pages/docs/module-loader.md)
6. [module.exports - Node.js](https://github.com/nodejs/node/blob/master/doc/api/modules.md#moduleexports)
7. [AMD 规范](https://zhaoda.net/webpack-handbook/amd.html)

## ES6 的模块

- 自动采用严格模式，不管是否在模块头部加上`"use strict"`
- 禁止`this`指向全局对象，值是 undefined
- 每个模块都有自己的顶级作用域`top-level scope`，一个模块中的顶级作用域变量和函数在其他脚本中是不可见的
- 模块代码仅在**第一次导入**时被解析
- 导入的是`值的引用`，意味着多方导入时，其中的一方的修改，一定会影响到其他地方的
- `export default`**只能**有一个

### 使用场景

> 在实际开发中，浏览器模块很少被以“原始”形式进行使用。通常，我们会使用一些特殊工具，例如 Webpack，将它们打包在一起，然后部署到生产环境的服务器。
>
> 使用打包工具的一个好处是 —— 它们可以更好地控制模块的解析方式，允许我们使用裸模块和更多的功能，例如 CSS/HTML 模块等。

### 特例：导出了一个主要的默认导出和一些命名的导出

```javascript
// 📁 user.js
export default class User {
    constructor(name) {
        this.name = name;
    }
}

export function sayHi(user) {
    alert(`Hello, ${user}!`);
}
```

导入默认的导出以及命名的导出

```javascript
// 📁 main.js
import {default as User, sayHi} from './user.js';

new User('John');
```

将所有东西 * 作为一个对象导入，那么 default 属性正是默认的导出

```javascript
// 📁 main.js
import * as user from './user.js';

let User = user.default; // 默认的导出
new User('John');
```

### 静态加载

- import 语句属于`静态加载`
- 具有**提升效果**，会提升到整个模块的头部，**首先**执行
- **编译阶段**执行，在代码运行之前

```javascript
// 报错
if (x === 1) {
  import { foo } from 'module1';
} else {
  import { foo } from 'module2';
}
```

### 动态加载

- `import(module)` 表达式加载模块并返回一个 promise
- 该 promise 的 resolve 为一个包含其所有导出的模块对象
- 动态导入在常规脚本中工作时，**不需要** \<script type="module">

## CommonJS modules

- 对`module.exports`属性的分配，不允许在任何 callback 中运行

  - 正常运行

  ```js
  /* a.js */
  const EventEmitter = require('events');
  
  module.exports = new EventEmitter();
  
  // Do some work, and after some time emit
  // the 'ready' event from the module itself.
  setTimeout(() => {
    module.exports.emit('ready');
  }, 1000);
  
  
  /* run.js */
  const a = require('./a');
  a.on('ready', () => {
    console.log('module "a" is ready');
  });
  ```

  - 错误示范
  ```js
  /* x.js */
  setTimeout(() => {
    module.exports = { a: 'hello' };
  }, 0);
  /* y.js */
  const x = require('./x');
  console.log(x.a);	// undefined
  ```

- `module.exports.f = ...`可以简写为`exports.f = ...`

- 如果给`exports`赋予新的值，则其不再绑定在`module.exports`上

  ```js
  module.exports.hello = true; // Exported from require of module
  exports = { hello: false };  // Not exported, only available in the module
  ```
  
- 当`module.exports`属性被完全的赋值了一个新的对象，`exports`也会被重新赋值

## AMD 规范

- 最初由 [require.js](http://requirejs.org/) 库实现

- 主要为**浏览器环境**设计的，而 CommonJS 是用于服务器和桌面环境

- 模块通过`define`函数定义在闭包中

  ```js
  define(id?: String, dependencies?: String[], factory: Function|Object);
  ```

  

