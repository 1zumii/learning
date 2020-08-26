## Function.prototype.call

```javascript
/**
 * 自定义call实现
 * @param context   上下文this对象
 * @param args      动态参数
 */
Function.prototype.myCall = function(context, ...args) {
    context = (typeof context === 'object' ? context : window)
    // 防止覆盖掉原有属性
    const key = Symbol()
    // 这里的this为需要执行的方法
    context[key] = this
    // 方法执行
    const result = context[key](...args)
    delete context[key]
    return result
}
```

```javascript
// 验证样例
function fun(arg1, arg2) {
    console.log(this.name)
    console.log(arg1 + arg2)
}
const _this = { name: 'YIYING' }
// 接受的是一个参数列表;方法立即执行
fun.myCall(_this, 1, 2)
```

## Function.prototype.apply

```javascript
/**
 * 自定义Apply实现
 * @param context   上下文this对象
 * @param args      参数数组
 */
Function.prototype.myApply = function(context, args) {
    context = (typeof context === 'object' ? context : window)
    // 防止覆盖掉原有属性
    const key = Symbol()
    // 这里的this为需要执行的方法
    context[key] = this
    // 方法执行
    const result = context[key](...args)
    delete context[key]
    return result
}
```

## Fuction.prototype.bind

```javascript
/**
 * 自定义bind实现
 * @param context     上下文
 * @returns {Function}
 */
Function.prototype.myBind = function(context) {
    context = (typeof context === 'object' ? context : window)
    return (...args)=>{
        this.call(context, ...args)
    }
}
```

## 重点

- 改变 this 的思路：将当前的函数，作为指定 this <u>对象的一个方法</u>来调用&nbsp;&nbsp;&nbsp;&nbsp;*myCall#13*
- 获取当前函数的引用：直接使用 this，因为 this 是指向调用此方法的对象，而调用 call/apply 的正是原函数&nbsp;&nbsp;&nbsp;&nbsp;*call验证样例#8*
- 使用 Symbol 确保暂时调用时，不会覆盖原来对象的属性
- 暂时调用以后，需要使用 delete 删除暂时调用方法的属性
- 提供的 this 是可选参数

> 在 function 函数运行时使用的 this 值。请注意，this可能不是该方法看到的实际值：如果这个函数处于非严格模式下，则指定为 null 或 undefined 时会自动替换为指向全局对象，原始值会被包装。

