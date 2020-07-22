- [利用css transition属性实现一个带动画显隐的微信小程序部件](https://blog.csdn.net/weixin_42338390/article/details/80643875)

```html
<!-- xxx.wxml -->
<view 
    class="notification {{notificationVisible?'notification-active':''}}"
    style="top: {{notificationVisible?menuButtonTop:-200}}px"
>
    ...
</view>
```

```js
// xxx.js
Page({
	// 页面的初始数据
	data: {
		... ...
		notificationVisible: false,
		... ...
	},
})
```

```css
/* xxx.wxss */
.notification {
    position:fixed;
    left: 5%;
    max-height: 177rpx;
    width: 450rpx;
    background: rgba(250,250,250,0.6);
	backdrop-filter: blur(10px);
    border-radius: 10px;
    padding: 15px 25px;
    overflow: hidden;
    opacity: 0;
    transition: all 0.5s ease-in-out;
}
.notification-active {
    opacity: 1;
}
```

> 通过 data 中的真假值，使得 wxml 中标签的 class 按条件加入
> 借添加 class 的方式来达到样式发生变化的效果，来触发 transition

