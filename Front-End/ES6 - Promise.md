1. [Promise 对象 - 阮一峰](http://es6.ruanyifeng.com/#docs/promise)
2. [ES6 Promise的使用和理解 - 掘金](https://juejin.im/post/5b605b035188251a90189c61)
3. [从零一步一步实现一个完整版的Promise](https://juejin.im/post/5d59757f6fb9a06ae76405c6#heading-19)

### 三种状态

- `pending`（进行中）
- `fulfilled`（已成功）
- `rejected`（已失败）

### 两个函数

- resolve
- reject
- 由 JavaScript引擎提供，不用自己部署

### 构造函数

- 接受一个函数作为参数，`function(resolve, reject)`
- 该函数的两个参数分别是`resolve`和`reject`
- 无法取消 Promise，一旦新建 Promise 就会**立即**执行，无法中途取消。

### then 方法

- Promise 实例生成以后，可以用`then`方法分别指定`resolved`状态和`rejected`状态(可选指定)的回调函数

- 回调函数接收的参数值，由 Promise 的`resolve`和`reject`指定

  - 如：`resolve(value);` value 就将会传递给 then 中的 callback

- then 方法返回的是一个新的 Promise 实例（不是原来那个 Promise 实例）

### catch 方法

- 一般来说，不要在`then`方法里面定义`rejected`状态的回调函数，总是使用`catch`方法。
- 跟传统的try/catch代码块不同的是，如果没有使用`catch`方法指定错误处理的回调函数， Promise对象抛出的错误**不会**传递到外层代码，即不会有任何反应。