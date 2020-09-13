1. [属性标志和属性描述符](https://zh.javascript.info/property-descriptors)

## 属性标志

对象的属性，除`value`外，还有三个特殊的 attributes
- **`writable`**：如果为 `true`，则值可以<u>被修改</u>，否则它是**只可读**的
- **`enumerable`**：如果为 `true`，则会被<u>在循环中列出</u>，否则**不会被列出**
- **`configurable`**：如果为 `true`，则此特性<u>可以被删除</u>，这些属性也<u>可以被修改</u>，否则不可以

### 查看属性标志

[Object.getOwnPropertyDescriptor()](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) 

```js
let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);
```

- `obj`：需要从中获取信息的对象
- `propertyName`：属性的名称
- 返回值：一个所谓的“属性描述符”对象，包含值和所有的标志

### 修改属性标志

[Object.defineProperty()](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

```js
Object.defineProperty(obj, propertyName, descriptor);
```

- `obj`：应用描述符的对象

- `propertyName`：要应用描述符对象的**属性**

- `descriptor`：要应用的属性描述符对象

  如果该属性**存在**，`defineProperty`会更新其标志。否则，它会使用给定的值和标志**创建属性**；在这种情况下，如果没有提供属性标志，则会假定它是`false`。

### 只读 writable

- 在**非严格模式**下，在对不可写的属性`writable:false`等进行写入操作时，不会出现错误，但操作仍然不会成功

- 违反标志的行为，只在**严格模式**下会出现 **Errors**

- 只读无法修改属性的value，但是可以使用`Object.defineProperty()`覆盖，或者**指向新对象**

```js
let user = {
	name: "John"
}
Object.defineProperty(user, "name", {
	writable: false
})
user.name = "Pete"
console.log(user)	// { name: 'John' }
Object.defineProperty(user, "name", {
value: "kkk",
	writable: false
})
console.log(user)	// { name: 'kkk' }
user = {
	name: 'jjj'
}
console.log(user)	// { name: 'jjj' }
```

### 不可枚举 enumerable

- 属性设置`enumerable:false`之后，就不会出现在`for..in`循环中了
- 不可枚举的属性也会被`Object.keys()`排除
- `Object.getOwnPropertyNames()`返回对象的自有属性，包括可枚举和**不可枚举**的属性，不包括继承自原型的属性

*以上三种遍历对象的方式都不会包含Symbol*

```js
let user = {
    name: "John",
    getName() {
        return this.name
    }
}
const arr1 = []
for (let k in user) {
    arr1.push(k)
}
console.log(1, arr1, 'for..in')
console.log(1, Object.keys(user), 'Object.keys()')
console.log(1, Object.getOwnPropertyNames(user), 'Object.getOwnPropertyNames()')

Object.defineProperty(user, 'getName', {
    enumerable: false
})
const arr2 = []
for (let k in user) {
    arr2.push(k)
}
console.log(2, arr2, 'for..in')
console.log(2, Object.keys(user), 'Object.keys()')
console.log(2, Object.getOwnPropertyNames(user), 'Object.getOwnPropertyNames()')
```

```bash
1 [ 'name', 'getName' ] for..in
1 [ 'name', 'getName' ] Object.keys()
1 [ 'name', 'getName' ] Object.getOwnPropertyNames()
2 [ 'name' ] for..in
2 [ 'name' ] Object.keys()
2 [ 'name', 'getName' ] Object.getOwnPropertyNames()
```

