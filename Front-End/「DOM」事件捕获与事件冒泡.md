1. [JavaScript事件捕获和事件冒泡 - Web前端工程师面试题讲解](https://www.bilibili.com/video/BV1m7411L7YW)
2. [你真的理解事件冒泡和事件捕获吗？](https://juejin.im/post/5cc941436fb9a03236394027#heading-8)
3. [JS基础知识（十一）DOM0和DOM2级事件](https://blog.csdn.net/qq_23389687/article/details/80166843)

## 事件流

- 事件触发时，会产生`事件流`
- 事件流的方式：*事件发生顺序*
  - 事件冒泡：从内层开始，向上传播
  - 事件捕获：从外层开始，向下传播，直到具体的元素

- DOM事件流的三个阶段
  - 事件捕获
  - 目标阶段 => 触发目标元素事件
  - 事件冒泡

## 事件绑定

- 给当前元素的某个事件绑定方法，目的是让当前元素某个事件被触发时，做出一些反应
- `DOM0级`事件绑定
  - currentElement.**onclick** = function
- `DOM2级`事件绑定
  - 标准浏览器：currentElement.**addEventListener**(event, **function**, useCapture)
  - IE6-8：currentElement.attachEvent()
- DOM0和DOM2绑定的方法是毫无联系的：相同事件，先绑定的先执行

## 事件代理

```html
<ul class="color_list">        
    <li>red</li>        
    <li>orange</li>        
    <li>yellow</li>        
    <li>green</li>        
    <li>blue</li>        
    <li>purple</li>    
</ul>
<div class="box"></div>
```

> 我们想要在点击每个\<li>标签时，输出\<li>当中的颜色（innerHTML）

### 常规操作

遍历每个\<li>，然后在每个\<li>上绑定一个点击事件

```javascript
const color_list = document.querySelector(".color_list")
const colors = color_list.getElementsByTagName("li")
const box = document.querySelector(".box")
for (let n = 0; n < colors.length; n++) {
    colors[n].addEventListener("click", function () {
        console.log(this.innerHTML)
        box.innerHTML = this.innerHTML
    })
}
```

### 利用事件冒泡机制的事件代理

```javascript
function colorChange(e) {
    const e = e || window.event   //兼容性的处理         
    if (e.target.nodeName.toLowerCase() === "li") {
        box.innerHTML = "该颜色为 " + e.target.innerHTML
    }
}
color_list.addEventListener("click", colorChange, false)
```

点击了\<li>后会冒泡到\<ul>，此时就会触发绑定在\<ul>上的点击事件，再利用 target 找到事件实际发生的元素，就可以达到预期的效果。