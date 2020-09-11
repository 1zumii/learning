1. [属性标志和属性描述符](https://zh.javascript.info/property-descriptors)

## 属性标志

- 对象的属性，除`value`外，还有三个特殊的 attributes
  - **`writable`**：如果为 `true`，则值可以被修改，否则它是只可读的
  - **`enumerable`**：如果为 `true`，则会被在循环中列出，否则不会被列出
  - **`configurable`**：如果为 `true`，则此特性可以被删除，这些属性也可以被修改，否则不可以

