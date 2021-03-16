- [使用类字段制作绑定方法 - javascript.info](https://zh.javascript.info/class#shi-yong-lei-zi-duan-zhi-zuo-bang-ding-fang-fa)
- [函数绑定](https://zh.javascript.info/bind)：JavaScript 中的函数具有动态的`this`。它取决于调用上下文。

```js
// 因此，如果一个对象方法被传递到某处，或者在另一个上下文中被调用，则 this 将不再是对其对象的引用。
// 这个问题被称为"丢失this"。
class Button1 {
    constructor(value) {
        this.value = value;
    }

    click() {
        alert(this.value);
    }
}

let button1 = new Button1("hello");

setTimeout(button1.click, 1000); // undefined
```

**类字段**提供了另一种非常优雅的语法：

```js
class Button2 {
    constructor(value) {
        this.value = value;
    }
    click = () => {
        alert(this.value);
    }
}

let button2 = new Button2("hello");

setTimeout(button2.click, 1000); // hello
```

正常写法，类的方法保存在**实例对象**的`prototype`中

使用类字段的方式，类的方法直接保存在**实例对象**中

```js
/* button1 */
{
    value: <Number>,
    __proto__: {
        click: <Function>,
        constructor: class Button1,
        __proto__: <Object>
    }
}
/* button2 */
{
    click: () => {},
    value: <Number>,
    __proto__: {
        constructor: class Button2,
        __proto__: <Object>
    }
}
```

