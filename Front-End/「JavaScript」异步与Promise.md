## 一、基础概念

### 1.1 函数对象和实例对象

- 函数对象：将函数作为对象使用时
- 实例对象：new 函数产生的对象，简称对象

```javascript
function Fn(){...}
console.log(Fn.prototype)	// Fn为函数对象
const f = new Fn()		// f为实例对象
```

- Promise函数对象的方法
  - Promise.all()
  - Promise.resolve()
  - Promise.reject()
- Promise实例对象的方法
  - Promise.prototype.then()
  - Promise.prototype.catch()
  - Promise.prototype.finally()

*以上在MDN的Promise左侧*

### 1.2 回调函数

- 把函数的`指针`作为参数传递给另一个函数，当这个指针被用来调用其所指向的函数时，就称之为**回调函数**
- 回调函数<u>不是由该函数的实现方直接调用</u>，而是在特定的事件或条件发生时由另外的一方调用的，用于对该事件或条件进行响应。

> *以下是来自知乎作者常溪玲的解说*
>
> 你到一个商店买东西，刚好你要的东西没有货，于是你在店员那里留下了你的电话，过了几天店里有货了，店员就打了你的电话，然后你接到电话后就到店里去取了货。在这个例子里，你的电话号码就叫回调函数，你把电话留给店员就叫登记回调函数，店里后来有货了叫做触发了回调关联的事件，店员给你打电话叫做调用回调函数，你到店里去取货叫做响应回调事件。

#### 同步回调函数

- 立即执行，完全执行完了才结束，**不会放入**`回调队列`中
- 例如
  - 数组遍历相关的回调函数
  - Promise的`executor`函数
  - `then()`和`catch()`是同步执行，指定成功/失败的回调函数，其参数`onResolved`和`onRejected`才是异步回调函数

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
    value => {...},		// onResolved
    reason => {...}		// onRejected
)
```

#### 旧的异步解决方案

- 纯回调函数
- 在真正的执行异步操作前，就需要指定好`successCallback`和`failureCallback`
- 使用Promise，可以在异步操作得到结果**之后**指定两个回调函数（指定回调更加灵活）

```javascript
/*使用纯回调函数*/
createAudioFileAsync(audioSettings,successCallback,failureCallback)
```

- 纯回调函数形式会产生`回调地狱`的问题，难以阅读、处理出错
- 使用Promise，可以链式调用，解决回调地狱的问题
- 异常传透：链式调用的错误处理只需要在最后使用`catch()`方法

```javascript
// 回调地狱
请求1(function(请求结果1){
    请求2(function(请求结果2){
        请求3(function(请求结果3){
            请求4(function(请求结果4){
                请求5(function(请求结果5){
                    请求6(function(请求结果3){
                        ...
                    },failureCallback)
                },failureCallback)
            },failureCallback)
        },failureCallback)
    },failureCallback)
},failureCallback)

// 友好点的方式
const 请求结果1 = 请求1();
const 请求结果2 = 请求2(请求结果1,failureCallback); 
const 请求结果3 = 请求3(请求结果2,failureCallback); 
const 请求结果4 = 请求4(请求结果3,failureCallback); 
const 请求结果5 = 请求5(请求结果4,failureCallback); 
    
// async\await -> 回调地狱的终极解决方案，无需回调函数
async function 请求() {
    try{
        const 请求结果1 = await 请求1();
        const 请求结果2 = await 请求2(请求结果1,failureCallback); 
        const 请求结果3 = await 请求3(请求结果2,failureCallback); 
        const 请求结果4 = await 请求4(请求结果3,failureCallback); 
        const 请求结果5 = await 请求5(请求结果4,failureCallback); 
    }catch(error){
        failureCallback(error)
    }
}
```

#### 具体表达

- 语法层面：Promise是一个**构造函数**
- 功能层面：Promise对象封装一个**异步操作**并可以获取其结果

#### Promise的状态改变

- `pending` => `fulfilled`，value（成功的结果数据）
- `pending` => `rejected`，reason（失败的结果数据）
- 如果抛出异常，且此时状态为 pending => reject(reason = error)

#### 执行流程

- 执行了异步操作后，`promise对象`的状态发生变化
  - <u>状态改变时</u>，如果已经指定了回调函数 onResolved，onRejected 将会**立即**`异步执行`**所有**的成功/失败的回调
- 执行回调函数`then()`，`catch()`
- 返回一个`新的promise对象`（由 then 和 catch 返回）

### 2.2 Promise的使用

<u>异步请求**并行**操作</u>

#### Promise.all(iterable)

- `iterable`参数内所有promise都完成，或不包含promise => resolve(value**s**)
- 参数中有一个promise失败，返回失败的promise => reject(reason)

#### Promise.race(iterable)

- 返回一个`promise`
- 一旦迭代器中的某个 promise 解决或拒绝，返回的 promise 就会解决或拒绝

### 2.3 关键问题

#### 指定多个回调函数

当promise改变为对应状态时，**都**会调用

```js
const p = new Promise((resolve,reject) => {
    resolve(100)
})
p.then(value => {
    console.log('value1',value)
})
p.then(value => {
    console.log('value2',value)
})
```

```bash
>>> value1 100
>>> value2 100
```

#### 得到数据的时间

- 如果先指定回调，当状态发生改变时，回调函数就会调用，得到数据
- 如果先改变状态，当回调函数指定的时候，回调函数就会调用，得到数据

> 引申：then方法是同步顺序执行的，其中传入的 onResolved，onRejected 才是异步执行的函数
>
> - 执行到 then 时，状态已改变，则会将回调函数，**立即**放入微队列中 => 立即异步执行
> - 如果状态还未改变，则回调函数会监听其 Promise 的状态变化。一旦状态改变，则将对应的回调放入微队列中。

#### executor函数的执行

```javascript
new Promise((resolve,reject) => {
    console.log(2)
    resolve(3)
}).then(
    value => console.log(5, value)
)
console.log(7)
```

```bash
>>> 2		// executor不放入回调队列
>>> 7		// 同步执行
>>> 5 3		// 异步执行的回调函数
```

#### promise.then()返回的新promise实例对象

- 新promise对象的`结果状态`
  - 由`then()`指定的回调函数，执行的结果决定
  - 如果抛出异常，新promise的状态变为`rejected`，reason为抛出的异常
  - 如果返回非promise实例对象的任意值（无返回，视为返回`undefined`），新promise的状态变为`fulfilled`，value为返回的值
  - 如果返回的是另一个`新的promise`，则直接返回此promise实例对象，此promise的结果作为新promise的结果

```javascript
new Promise((resolve,reject) => {
    resolve(2)		// pending => resolve
}).then(
    value => console.log('onResolved1',value),	// 相当于return undefined
    reason => console.log('onRejected1',reason)
).then(
    value => console.log('onResolved2',value),
    reason => console.log('onRejected2',reason)
)
```

```bash
>>> onResolved1 2
>>> onResolved2 undefined
```

```javascript
new Promise((resolve,reject) => {
	setTimeout(() => {
		console.log(3)
		resolve(4)
	},1000)
}).then(
	value => {
		console.log(8)
		setTimeout(() => {
			console.log(10)
			return 11
		},1000)
	}
).then(
	value => console.log(15,value),
	reason => console.log(16,reason)
)
```

```bash
>>> 3
>>> 8
>>> 15 undefined
>>> 10
```

#### 异常传透

- 一般来说，不要在`then()`方法里面定义`onRejected`，在最后使用`catch()`

- 前面操作出了异常，都会传到最后的`catch()`中

- `then()`方法里面未定义`onRejected`，等同于定义了

  ```javascript
  // 默认定义
  reason => {throw reason}
  // 可理解为
  reason => new Promise((resolve,reject) => {
      reject(reason)
  })
  ```

  ```javascript
  new Promise((resolve,reject) => {
  	setTimeout(() => {
  		console.log(3)
  		resolve(4)
  	},1000)
  }).then(
  	value => {throw 7}			// 抛出的异常在13行被接收
  ).then(
  	value => {
  		console.log(10,value)
  	},
  	reason => {
  		console.log(13,reason)
  	}
  ).catch(
  	reason => console.log(16,reason)
  ).then(
 	value => console.log(18,value),
  	reason => console.log(19,reason)
  )
  ```

  ```bash
  异常传透需要保证then方法中不定义onRejected回调函数，若定义，则异常直接被接收
  >>> 3
  >>> 13 7
  >>> 18 undefined
  ```

- 跟传统的try/catch代码块不同的是，如果没有使用`catch`方法指定错误处理的回调函数， Promise对象抛出的错误**不会**传递到外层代码，即不会有任何反应。

#### 中断Promise链

- 返回一个`pending`的 Promise 

  ```javascript
  return new Promise(() => {})
  ```

#### 手写Promise.race()方法的个人理解

```javascript
/*
 *返回一个 promise，一旦某个 promise 解决或拒绝， 返回的 promise 就会解决或拒绝。
 */
Promise.race = function (promises) {
    // 返回新的 promise 对象
    return new Promise((resolve, reject) => {
        // 遍历所有 promise
        promises.forEach((p,index)=>{
            Promise.resolve(p).then(resolve,reject)
        })
    })
}
```

- 遍历的过程如果已经出现结果，`then()`方法立刻就能改变返回的 Promise 的状态
- 如果遍历的时候还未得到结果，`then()`方法是将回调函数 onResolved，onRejected **事先绑定**到对应的 promise 实例上，一旦出现结果，便可以触发回调，从而改变返回的 Promise 的状态
- 使用`Promise.resolve()`包装 promises 数组里的每一项，确保即便是非 promise 类型的输入，也可以作为一个 promise 实例返回结果，而无需再单独判断其类型

## 三、事件循环 Event Loop

- 调用栈
- 宏队列 MacroTasks
- 微队列 MicroTasks

### 执行过程

- JS 引擎首先必须先执行所有的初始化同步任务代码
- 每次准备取出第一个`宏任务`执行前, 都要将**所有**的`微任务`一个一个取出来执行

```javascript
setTimeout(() => {
    console.log("0")
}, 0)
new Promise((resolve, reject) => {
    console.log("1")
    resolve()
}).then(() => {
    console.log("2")
    new Promise((resolve, reject) => {
        console.log("3")
        resolve()
    }).then(() => {
        console.log("4")
    }).then(() => {
        console.log("5")
    })
}).then(() => {
    console.log("6")
})
new Promise((resolve, reject) => {
    console.log("7")
    resolve()
}).then(() => {
    console.log("8")
})
```

> 1 7 2 3 8 4 6 5 0

## 四、Promise 例题

[参考](https://juejin.im/post/5c9a43175188252d876e5903#heading-3)

### 例题一

```javascript
new Promise((resolve, reject) => {
    console.log("promise1")
    resolve()
}).then(() => {
    console.log("then11")
    new Promise((resolve, reject) => {
        console.log("promise2")
        resolve()
    }).then(() => {
        console.log("then21")
        // return Promise.resolve(undefined)
    }).then(() => {
        console.log("then23")
        // return Promise.resolve(undefined)
    })
    // return Promise.resolve(undefined)
}).then(() => {
    console.log("then12")
    // return Promise.resolve(undefined)
})
```

```bash
promise1
then11
promise2
then21
then12
then23
```

> 无返回值的then方法末尾，应视作返回一个fulfilled状态且值为undefined的Promise，return语句顺序执行

### 例题二

```javascript
new Promise((resolve, reject) => {
    console.log("promise1")
    resolve()
}).then(() => {
    console.log("then11")
    return new Promise((resolve, reject) => {
        console.log("promise2")
        resolve()
    }).then(() => {
        console.log("then21")
        // return Promise.resolve(undefined)
    }).then(() => {
        console.log("then23")
        // return Promise.resolve(undefined)
    })
}).then(() => {
    console.log("then12")
    // return Promise.resolve(undefined)
})
```

```bash
promise1
then11
promise2
then21
then23
then12
```

> 第6行return了一个then了两次的Promise。then方法会返回一个新的Promise供后续的then使用，所以第16行的then方法是绑定着第12行的then方法返回的Promise，状态取决于它。

## async/await

- async function：通过一个**隐式**的`Promise`返回其结果

- await：用于等待一个`Promise`对象
  - 返回其 then() 中的 reason
  - 如果 Promise 为 rejected，则抛出异常
  - 如果 await 其后得到的值不是一个 Promise 对象，则会将其包裹在`Promise.resolve()`中
- await **只能**在异步函数 async function 中使用
- async 会返回一个Promise，所以返回值可以使用 then()

### 多个await操作的串行和并行

- 串行

```javascript
const funcA = async params => {
	const resB = await getAsyncB()
	const resC = await getAsyncC()
}
```

- 并行

```javascript
const funcA = async params => {
	const promiseB = getAsyncB()
	const promiseC = getAsyncC()
	const resB = await promiseB
	const resC = await promiseC
}
```

> 利用了 promise 的 executor 是立即执行异步操作的特性

### async/await执行顺序

```js
async function async1() {
    console.log('async1 start')
    await async2()
    console.log('async1 end')
}

async function async2() {
    console.log('async2')
}

console.log('script start')

setTimeout(function () {
    console.log('setTimeout')
}, 0)

async1()

new Promise(function (resolve) {
    console.log('promise1')
    resolve()
}).then(function () {
    console.log('promise2')
})

console.log('script end')
```

```bash
script start
async1 start
async2
promise1
script end
promise2
async1 end
setTimeout
```

- [async/await执行顺序面试题 - CSDN](https://blog.csdn.net/lixinyi0622/article/details/87308047)
- [面试题 async/await - 掘金](https://juejin.im/post/6844903814659588110)
- 第3行 await 相当于开启了一个异步任务，async2 相当于 Promise 中的 executor，会立即执行。但是，第3行以后，相当于被挂起到了微队列中，类似于 then