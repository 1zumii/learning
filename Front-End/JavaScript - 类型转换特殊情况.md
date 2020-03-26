1. [参考 1](https://segmentfault.com/a/1190000011853970)
2. [参考 2](https://segmentfault.com/a/1190000011854066)

#### 举例

```javascript
String([])       // ""
Number([])       // 0
Boolean([])      // true
Number(true)     // 1
Number(false)    // 0
```

```javascript
[] == 0      // true
![] == 0     // true
[] == ''     // true
!![] == ''   // false
'' == true   // false
```

#### 相等运算符 `==`

- 如果一个值是`null`, 另一个是`undefined`，则它们相等
- 如果一个值是`数字`，另一个是`字符串`，先将字符串转换为数字，然后使用转换后的值进行比较。

- 如果其中一个值是`true`，则将其转换为`1`再进行比较。如果其中一个值是`false`，则将其转换为`0`再进行比较。
- 如果一个值是**对象**，另一个值是**数字**或**字符串**，则将对象转换为原始值，然后再进行比较。
  - 对象通过`toString()`方法或者`valueOf()`方法转换为原始值，JavaScript语言核心的内置类先尝试使用`valueOf()`，再尝试使用`toString()`，除了日期类，日期类只能使用`toString()`转换，那些不是JavaScript语言核心中的对象则通过各自的实现中定义的方法转换为原始值。
  - 原始值：不可变更的值，包括 undefined、null、布尔值、数字、和字符串
  - `toString()`：返回一个反映这个对象的字符串。
  - `valueOf()`：一个对象那个如果存在任意原始值，它就默认将对象转换为表示它的原始值。
- **其他不同类型**之间的比较均**不相等**

#### 问题

```javascript
'1' == []	// true
```

