### 显式声明

- 在`全局作用域`中声明
- 使用`全局对象window`来声明

### 隐式声明

- 直接声明

```javascript
(function () {
    a = 1
})()
console.log(a)	// 1
```

### 连续赋值时产生的隐式声明全局变量问题

```javascript
(function () {
    let a = b = c = 1
    console.log(a)
    console.log(b)
    console.log(c)
})()
console.log(c)
console.log(b)
console.log(a)
```

> 1
> 1
> 1
> 1
> 1
> D:\CodeAbout\temporaryAbout\xx.js:9
> console.log(a)
>             ^
>
> ReferenceError: a is not defined
>     at Object.<anonymous> (D:\CodeAbout\temporaryAbout\xx.js:9:13)
>     at Module._compile (internal/modules/cjs/loader.js:778:30)
>     at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
>     at Module.load (internal/modules/cjs/loader.js:653:32)
>     at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
>     at Function.Module._load (internal/modules/cjs/loader.js:585:3)
>     at Function.Module.runMain (internal/modules/cjs/loader.js:831:12)
>     at startup (internal/bootstrap/node.js:283:19)
>     at bootstrapNodeJSCore (internal/bootstrap/node.js:623:3)

- b，c 成为了隐式声明的全局变量
- 无论使用 let 或者 var 都会出现的问题