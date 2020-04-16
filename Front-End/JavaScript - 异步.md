## 一、基础概念

### 1.1 函数对象和实例对象

- 函数对象：将函数作为对象使用时

- 实例对象：new 函数产生的对象，简称对象

```javascript
function Fn(){...}
console.log(Fn.prototype)	// Fn为函数对象
const f = new Fn()			// f为实例对象
```

### 1.2 回调函数

- 把函数的`指针`作为参数传递给另一个函数，当这个指针被用来调用其所指向的函数时，就称之为**回调函数**
- 回调函数<u>不是由该函数的实现方直接调用</u>，而是在特定的事件或条件发生时由另外的一方调用的，用于对该事件或条件进行响应。

> 以下是来自知乎作者常溪玲的解说：
>
> 你到一个商店买东西，刚好你要的东西没有货，于是你在店员那里留下了你的电话，过了几天店里有货了，店员就打了你的电话，然后你接到电话后就到店里去取了货。在这个例子里，你的电话号码就叫回调函数，你把电话留给店员就叫登记回调函数，店里后来有货了叫做触发了回调关联的事件，店员给你打电话叫做调用回调函数，你到店里去取货叫做响应回调事件。

#### 同步回调函数

- 立即执行，完全执行完了才结束，**不会放入**`回调队列`中
- 例如
  - 数组遍历相关的回调函数
  - Promise的`executor`函数

```javascript
const arr = [a,b,c]
arr.forEach((item,index)=>{		// 遍历回调函数，同步回调函数
	console.log(item)
})
console.log('after forEach')
```

```bash
>>> a
>>> b
>>> c
>>> after forEach
```

#### 异步回调函数

- 不会立即执行，**放入**`回调队列`将来执行
- 例如
  - 定时器回调
  - ajax回调
  - Promise的成功、失败的回调

```javascript
setTimeout(() => {
    console.log('setTimeout')
},0)
console.log('before setTimeout')
```

```bash
>>> before setTimeout
>>> setTimeout
```

### 1.3 JavaScript的错误处理

#### 类型

- Error -> 所有错误的父类型

- ReferenceError
- TypeError
- RangeError
- SyntaxError

#### 处理

- 捕获：`try...catch`
- 抛出：`throw error`

## 二、Promise的理解和使用

### 2.1 Promise

```javascript
const p = new Promise((resolve,reject)=>{	// executor
    // 异步操作
    ...
    if(success){
        resolve(value)
    }else{
        reject(reason)
    }
})
p.then(
	value => ... ,		// onResolved
    reason => ... ,		// onRejected
)
```

#### 旧的异步解决方案

#### 具体表达

- 语法层面：Promise是一个**构造函数**
- 功能层面：Promise对象封装一个**异步操作**并可以获取其结果

#### Promise的状态改变

- `pending` => `resolved`，value（成功的结果数据）
- `pending` => `rejected`，reason（失败的结果数据）

#### 执行流程

- 执行了异步操作后，`promise对象`的状态发生变化
- 执行回调函数`then()`，`catch()`
- 返回一个`新的promise对象`

