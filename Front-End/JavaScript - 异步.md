## 一、基础概念

### 1.1 函数对象和实例对象

- 函数对象：将函数作为对象使用时

- 实例对象：new 函数产生的对象，简称对象

```javascript
function Fn(){...}
console.log(Fn.prototype)	// Fn为函数对象
const f = new Fn()		// f为实例对象
```

> // Promise函数对象的方法
>
> Promise.all()
>
> Promise.resolve()
>
> Promise.reject()
>
> 
>
> // Promise实力对象的方法
>
> Promise.prototype.then()
>
> Promise.prototype.catch()
>
> Promise.prototype.finally()
>
> 
>
> *以上在MDN的Promise左侧*

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

- `pending` => `resolved`，value（成功的结果数据）
- `pending` => `rejected`，reason（失败的结果数据）
- 如果抛出异常，且此时状态为 pending => reject(reason = error)

#### 执行流程

- 执行了异步操作后，`promise对象`的状态发生变化
- 执行回调函数`then()`，`catch()`
- 返回一个`新的promise对象`（由 then 和 catch 返回）

### 2.2 Promise的使用

#### Promise.all(iterable)

- `iterable`参数内所有promise都完成，或不包含promise => resolve(value**s**)
- 参数中有一个promise失败，返回失败 => reject(reason)

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

#### executor函数的执行

```javascript
new Promise((resolve,reject) => {
    console.log(2)
    resolve(3)
}).then(
	value => console.log(5)
)
console.log(7)
```

```bash
>>> 2		// executor不放入回调队列
>>> 7		// 同步执行
>>> 5 3		// 异步执行的回调函数
```

