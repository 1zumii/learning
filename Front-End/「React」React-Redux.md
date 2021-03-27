[Redux 中文文档](https://cn.redux.js.org/)

![](../_images/image-20200410122210454.png)

> 应用中所有的 state 都以一个对象树的形式储存在一个单一的 *store* 中。 惟一改变 state 的办法是触发 *action*，一个描述发生什么的对象。 为了描述 action 如何改变 state 树，你需要编写 *reducers*。

## 原则

1. 单一数据源

   整个应用的`state`被储存在一棵 object tree 中，并且这个 object tree 只存在于**唯一**一个`store`中

2. State 是只读的

   唯一改变`state`的方法就是触发`action`，`action`是一个用于描述**已发生**事件的普通对象

## store



## action

一些`action`的示例

```js
{ type: 'ADD_TODO', text: 'Go to swimming pool' }
{ type: 'TOGGLE_TODO', index: 1 }
{ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' }
```

## reducer

