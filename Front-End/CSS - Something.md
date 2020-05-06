### 1. 多类名

- 可以把一些标签元素共同的样式放到一个类中
- 标签调用公共的类，再调用自己独有的类
- 各个类名中间用空格隔开

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .class-a { ... }
        .class-b { ... }
    </style>
</head>
<body>
    <div class='class-a class-b'> ... </div>
</body>
</html>
```

### 2. 字体的粗细

- 一些字体只提供 `normal` 和 `bold` 两种值
- `lighter`：比从父元素继承来的值更细(处在字体可行的粗细值范围内)
- `bolder`：比从父元素继承来的值更粗(处在字体可行的粗细值范围内)
- `<number>`
  - 非 100 的整数倍的值将被四舍五入转换为 100 的整倍数
  - **无需单位**

### 3. 过渡 Transition

```css
transition: property duration timing-function delay 
```

- 属性`transition-property`
  - 需要变化的属性
  - 例如：width，height
  - 需要**所有**属性变化，简写为：`all`
- 持续时间`transition-duration`
  - 单位：s，必填
  - 例如：`.5s`
- 运动曲线`transition-timing-function` *可省略*
  - linear：匀速
  - ease：逐渐慢下来
  - ease-in：加速
  - ease-out：减速
  - ease-in-out：先加速后减速
- 延时`transition-delay` *可省略*
  - 单位：s
  - 可以设置延迟的触发时间

```css
.t {
    width: 200px;
    height: 100px;
    background-color: aqua;
    transition: all .5s ease .3s;
}

.t:hover {
    width: 400px;
    height: 200px;
    background-color: blue;
}
```

### 4. 复合选择器

- 后代选择器

  - 外层标签在前，内层标签在后
  - **所有**的后代

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
  	<meta charset="UTF-8">
  	<title>Document</title>
      <style>
          .father a { ... }
      </style>
  </head>
  <body>
  	<div class="father">
  		<div class="son">
  			<a href="" class="grandson"></a>
  		</div>
  		<a href="" class="son"></a>
  	</div>
  </body>
  </html>
  ```

  

- 子选择器 `>`

  - 只能选择元素**最近一级**的子元素
  - 不会选到所有的后代

  ```css
  .father > a { ... }
  ```

- 并集选择器 `,`

  ```css
  div, span { ... }
  ```

- 伪类选择器

  声明的**顺序**不能颠倒

  ```css
  // 链接伪类选择器
  a:link { ... }
  a:visited { ... }
  a:hover { ... }
  a:active { ... }
  ```

- focus选择器

  主要针对`<input/>`组件

  ```css
  input:focus { ... }
  ```

  