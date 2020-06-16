1. [手写函数防抖和节流](https://www.bilibili.com/video/BV1pQ4y1M71e)
2. [JS的防抖与节流](https://mp.weixin.qq.com/s/Vkshf-nEDwo2ODUJhxgzVA)

## 防抖 Debounce

- 当续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次
- 如果设定的时间到来之前，又一次触发了事件，就重新开始延时

![image-20200616205028745](image-20200616205028745.png)

### 简单的防抖实现

```javascript
function debounce(fn, wait) {
    let timeout = null
    return function () {
        let context = this
        let args = arguments
        // 如果已有在计时中的计时器，则将此定时器清空
        if (timeout !== null)
            clearTimeout(timeout)
        // 每次触发事件都新创建一个定时器，直到定时器结束才调用回调，实现防抖的效果
        timeout = setTimeout(function () {
            fn.apply(context, args)
        }, wait)
    }
}
// 处理函数
function handle() {
    console.log(Math.random())
}
// 滚动事件
window.addEventListener('scroll', debounce(handle, 1000))
```

## 节流 Throttle

- 当持续触发事件时，保证一定时间段内只调用一次事件处理函数

![image-20200616205714417](image-20200616205714417.png)

### 简易版 - 时间戳实现

```javascript
const throttle = function (func, delay) {
    let prev = Date.now()
    return function () {
        let context = this	// 指向执行函数的对象
        let args = arguments
        let now = Date.now()
        if (now - prev >= delay) {
            // 上一次触发事件的时刻与此次将要触发的事件的时刻，相距时间超过规定的delay，才会执行回调
            func.apply(context, args)
            prev = Date.now()
        }
    }
}
function handle() {
    console.log(Math.random())
}
window.addEventListener('scroll', throttle(handle, 1000))
```

### 简易版 - 定时器实现

```javascript
const throttle = function (func, delay) {
    let timer = null
    return function () {
        let context = this
        let args = arguments
        if (!timer) {
            timer = setTimeout(function () {
                func.apply(context, args)
                timer = null
            }, delay)
        }
    }
}
function handle() {
    console.log(Math.random())
}
window.addEventListener('scroll', throttle(handle, 1000))
```

