1. [属性标志和属性描述符 - JavaScript.info](https://zh.javascript.info/property-descriptors)
2. [属性的 getter 和 setter - JavaScript.info](https://zh.javascript.info/property-accessors)
3. [Object.defineProperty() - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

## 属性描述符

- `数据描述符`是一个具有值的属性，该值可以是可写的，也可以是不可写的
- `存取描述符`是由 getter 函数和 setter 函数所描述的属性
- 两种描述符共享的键值：configurable、enumerable

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

### 不可配置 configurable

- 不可配置`configurable:false`的属性**不能被删除**
- 不能修改`configurable`标志
- ~~不能修改`enumerable`标志~~
- 能将`writable: false`修改为`true`，反之亦然）
- 不能修改访问者属性的`get/set`，但是如果没有可以分配它们

## 访问器属性

- 本质上是用于获取和设置值的`函数`，但从<u>外部代码来看就像常规属性</u>
- `访问器描述符`可能有：
  - **`get`**：一个没有参数的<u>函数</u>，**在读取属性时**工作
  - **`set`**：带有一个参数的<u>函数</u>，**当属性被设置时**调用
  - **`enumerable`**：与数据属性的相同
  - **`configurable`**：与数据属性的相同
- 一个属性要么是访问器（具有 get/set 方法），要么是数据属性（具有 value），**但不能两者都是**

### Getter/Setter

```js
let obj = {
	get propName() {
	// 当读取 obj.propName 时，getter 起作用
	},
	set propName(value) {
	// 当执行 obj.propName = value 操作时，setter 起作用
	}
}
```

```js
let user = {
	name: "John",
	surname: "Smith"
}

Object.defineProperty(user, 'fullName', {
	get() {
		return `${this.name} ${this.surname}`
	},
	set(value) {
		[this.name, this.surname] = value.split(" ")
	}
})
```

### Getter/setter 可以用作「真实」属性值的包装器

```js
let user = {
	get name() {
		return this._name
	},
	set name(value) {
		if (value.length < 4) {
			alert("Name is too short, need at least 4 characters")
			return
		}
		this._name = value
	}
}

user.name = "Pete"
alert(user.name)	// Pete

user.name = ""		// Name 太短了……
```

> 众所周知的约定：以下划线 "_" 开头的属性是内部属性，不应该从对象外部进行访问。

