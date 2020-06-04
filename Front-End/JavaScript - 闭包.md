[闭包 - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures)

## 闭包

- `函数`和对其周围状态（lexical environment，**词法环境**）的引用捆绑在一起构成闭包`closure`
- 在 JavaScript 中，每当函数被创建，就会在函数生成时生成闭包。

```javascript
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12
```

`add5`和`add10`都是闭包。它们共享相同的函数定义，但是保存了不同的词法环境。在`add5`的环境中`x`为 5。而在`add10`中，`x`则为 10。