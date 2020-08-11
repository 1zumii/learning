- [关于javascript中的从堆栈内存到执行上下文](https://github.com/ershing/RookieAngle/blob/master/javascript/executionContext.md)
- [JS基础进阶：2. 详解执行上下文](https://mp.weixin.qq.com/s?__biz=MzI4NjE3MzQzNg==&mid=2649865900&idx=1&sn=a8fefbc436283b638eaeba1d7bd8496d&scene=19#wechat_redirect)
- [关于javascript中的变量对象和活动对象](https://github.com/ershing/RookieAngle/blob/master/javascript/javascriptVariableObject.md)
- [JS基础进阶：3. 变量对象](https://mp.weixin.qq.com/s?__biz=MzI4NjE3MzQzNg==&mid=2649865890&idx=1&sn=345db9d600329796d5dcfc0ee7eea303&scene=19#wechat_redirect)
- [关于javascript中的作用域和作用域链](https://github.com/ershing/RookieAngle/blob/master/javascript/scopeChain.md)
- [JS基础进阶：4. 作用域与作用域链](https://mp.weixin.qq.com/s?__biz=MzI4NjE3MzQzNg==&mid=2649865906&idx=1&sn=f6e6056218e5d382555b0168af518761&scene=19#wechat_redirect)
- [JavaScript高级程序语言设计：4.2 执行环境及作用域](https://www.ituring.com.cn/book/946)

## 变量在内存中的存放

- 栈内存：
  - 基本数据类型：存放变量名与变量（其字面量）
  - 引用数据类型：存放变量名与**地址指针**
- 堆内存：地址指针指向的实际内容存放在`堆`中

## 变量对象与活动对象

- 变量对象：在执行上下文的**创建**阶段
- 活动对象：在执行上下文的**执行**阶段

### 变量对象 Variable Object

- 未进入执行阶段之前，变量对象中的属性都**不能访问**

```javascript
VariableObject = {
  arguments: Arguments,
  FunctionName: reference to function FunctionName(){},
  Variables: undefined，
}
```

#### 创建变量对象的过程

1. 检查当前上下文中的`函数参数`
2. 检查当前上下文的`函数声明`
3. 检查当前上下文中的`变量声明` 
   - 每找到一个变量声明，就在变量对象中<u>以变量名建立一个属性</u>，属性值为 **undefined**
   - 因此，才会出现 var 的变量提升现象
   - var 声明的变量与函数同名，以函数为准
   - **let/const 声明的变量**，仍然会提前被收集到变量对象中，但不会赋值为 undefined

### 活动对象 Active Object

- 进入执行阶段之后，变量对象转变为了活动对象
- 活动对象的属性都**能**被访问
- 全局上下文有一个特殊的地方，它的活动对象，就是`window对象`

### Example

```js
//声明example函数
function example(x){
    var a = 10;
    function plus(){
        return a + x;
    }
    return plus();
}
//调用example函数
example(5);
```

```js
// Variable Object
{
    arguments:{x:undefined},
    plus:reference to function plus(){},
    a:undefined
}
```

```javascript
// Active Object
{
    arguments:{callee:example,x:5,length:1},
    plus:reference to function plus(){},
    a:undefined
}
```

> 当然了，arguments属性的值是Arguments对象，对于**变量对象**来说，由于创建阶段只是形参，所以**变量对象**只有x一个undefined的值，而通过传入确定的实参5初始化后，**活动对象**中的Arguments就多了指向自身函数callee和length两个属性了。

## 执行上下文 Execution Context

- 执行上下文定义了变量或函数有权访问的其他数据
- 当**调用**一个`函数`时，一个`新的执行上下文`就会被创建
- 每个执行上下文都有一个与之关联的`变量对象`

> 每个函数都有自己的执行上下文。当执行流进入一个函数时，该函数的执行上下文就会被推入执行上下文栈中。而在函数执行后，栈将其执行上下文弹出栈，把控制权返回给之前的执行上下文。ECMAScript程序中的执行流，正是由这个翻遍的机制控制着。
>		—— 《JavaScript高级程序语言设计（第三版）》

## 执行上下文的生命周期

### 1. 创建阶段

执行上下文是在函数**被调用**的时候才<u>创建</u>

- 创建`变量对象`
- 初始化`作用域链`
- 确定`this`指向
- 执行其他代码

### 2. 执行阶段

发生在函数<u>代码执行</u>阶段

- 变量对象转变为`活动对象`

- 变量赋值
- 函数引用
- 执行其他代码

### 3. 执行完毕阶段

- 执行完毕后**跳出**`执行上下文栈`，等待被回收

## 作用域

- 作用域规定了如何查找变量，也就是确定当前执行代码对**变量**的**访问权限**
- 可以理解为自身执行上下文中的`活动对象`可以被访问的区域

> 其实执行函数的时候，用到的变量值，都是从**活动对象**上面取到的，如果自己的执行上下文中的**活动对象**没有对应要用的值，那就要往上一层的执行上下文中的**活动对象**中找这个值……

## 作用域链 scopeChain

- 用途：保证对`执行上下文`有权访问的所有变量和函数的有序访问
- 作用域链是由<u>当前环境</u>与<u>上层环境</u>的一系列`变量对象`组成
- 作用域链的前端，始终都是当前执行的代码，所在环境的活动对象作为`变量对象`
- `全局执行上下文`的变量对象，始终都是作用域链的最后一个对象

- 延长作用域链
  - try-catch语句的catch块
  - with语句