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

### 5. 元素的显示模式 display

- 块级元素`{display: block}`
  - 独占一行
  - 有 height，width，margin，padding 属性
  - 宽度默认是**父级**元素的`100%`
- 行内元素`{display: inline}`
  - 相邻的行内元素在一行上，一行可显示多个
  - **没有** height，width 属性
  - 有**左右**的 margin、padding
  - 默认宽度为内容的宽度
- 只能容纳文本/行内元素
  
- 行内块元素`{display: inline-block}`
  - 例如：\<img/>，\<input/>，\<td/>
  - 相邻的行内块元素在一行上
  - 默认宽度为本身内容的宽度
  - 有 **height**，**width**，margin，padding 属性

### 6. 单行文字垂直居中

```css
// 文字的行高 = 盒子的高度
// 文字的行高 = 上空隙 + 文字高度 + 下空隙
div {
    height: 40px;
    line-height: 40px;
}
```

### 7. 背景 background

- 颜色`backgroud-color`：<u>transparent</u>，*color*

- 图片`background-image`：<u>none</u>，url(<i style="color:green">url</i>)

- 平铺`background-repeat`：<u>repeat</u>，no-repeat，repeat-x，repeat-y

- 固定`backgroud-attachment`：<u>scroll</u>，fixed（*可制作视差滚动效果*）

- **位置**`background-position`：（x，y）

  - 方位：top，center，bottom，left，right

    ```css
    /* 
     * 盒子靠上，居中的位置 
     */
    backgroup-position: center top;
    ```

  - 精确单位：百分数|带单位的长度值

  - 如果只指定x，则y默认为`center`

  - 方位和单位可以混合使用

### 8. 图片整合 Sprites

- 又称，雪碧图、精灵图
- 需要的图片整合成一张大图，**减少**HTTP的请求次数

### 9. CSS三大特性

- 层叠性：就近原则
- 继承性
- 优先级 *由低到高*
  - 继承 / *
  - 元素选择器
  - 类选择器，伪类选择器
  - ID选择器
  - 行内样式
  - `!important`

### 10. padding撑开盒子

- 如果指定了width/height时，也指定了padding，盒子的实际宽高会被padding撑大
- 不指定width/height，直接指定padding，盒子的宽高不会被padding撑大

### 11. 元素水平居中

#### 块级元素

- 一定要指定**宽度**
- 左右的外边距为`auto`

```css
width: 200px
margin: 20px auto
```

#### 行内元素和行内块元素

- 给其父元素添加

```css
text-align: center
```

### 12. 外边距重叠

- [外边距重叠 - MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)

- **块级**元素的**垂直**方向的`margin`会触发
- 边界折叠，只会挑选**最大**边界范围留下

#### 没有内容将父元素和后代元素分开

```html
<body>
    <div class="father">
        <div class="son"></div>
    </div>
</body>
```

```css
.father {
    background-color: deeppink;
    height: 200px;
    width: 150px;
    margin-top: 15px;
}

.son {
    background-color: deepskyblue;
    height: 70px;
    width: 55px;
    margin-top: 5px;
}
```

![div.son](image-20200507141434147.png)

![div.father](image-20200507141458540.png)

- 解决方式
  - 父元素定义边框
  - 父元素指定padding
  - 父元素添加属性：`overflow: hidden`

#### 同一层相邻元素之间

```html
<body>
    <div class="a"></div>
    <div class="b"></div>
</body>
```

```css
div {
    width: 100px;
    height: 100px;
}

.a {
    background-color: deepskyblue;
    margin-bottom: 15px;
}

.b {
    background-color: deeppink;
    margin-top: 5px;
}
```

实际结果不会是15px + 5px，而是取两者中的较大值：15px

![image-20200507141919788](image-20200507141919788.png)

![image-20200507141937823](image-20200507141937823.png)