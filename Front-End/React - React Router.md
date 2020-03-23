1. [简明React Router v4教程 - 掘金](https://juejin.im/post/5a7e9ee7f265da4e7832949c)
2. [React Router 使用总结 - 掘金](https://juejin.im/post/5a6a9a7c51882573264703b0)
3. [你不知道的 React Router 4 - ZhiHu](https://zhuanlan.zhihu.com/p/28585911)

#### `<Route>`

- `<component>`

- `render`

- - 接受一个函数

  - 函数参数：(props)=>{...}

  - - history
    - location
    - match
    - staticContext

- `children`：总是会被渲染，无论路由与当前的路径是否匹配

- 只能给 `<Route>`元素提供一种来定义要渲染的内容

- 由 `<Route>` 渲染的元素将会带有一系列的 props

- - `match` 对象
  - 当前的 `location` 对象
  - `history`对象（由 router 创建）

#### match

- 当路由与路径匹配的时候，match 对象将会被作为 **prop** 传入

- `url`：当前路径与路由相匹配的部分

- `path`：路由的`path ` 

- `isExact`：`path === pathname`

- `params`：

- -  一个包含着`pathname`被`path-to-regexp`捕获的对象
  - 接收到的是 **string** 类型

#### `<Link>`

- 作用：接受点击然后触发地址 url 的变更
- `<a>`：载入一整个新的页面
- `<Link>` ：URL 将会更新，页面不载入整个新页面（并渲染内容）

#### [`<Switch>`](https://www.jianshu.com/p/ed5e56994f13)

- 功能：

- - 渲染第一个被location匹配到的
  - 并且作为子元素的 `<Route>`/`<Redirect>`

- 配合`<Route>`的 exact属性

#### History

- [Histories](https://react-guide.github.io/react-router-cn/docs/guides/basics/Histories.html#browserHistory)

- [history - 掘金](https://juejin.im/entry/59b9552b6fb9a00a5b1a87af)

- [history - segment fault](https://segmentfault.com/a/1190000010251949)

- 三种类型：

- - browserHistory
  - hashHistory
  - createMemoryHistory

- 属性：

- - location
  - location数组

- 方法：

- - `push()`
  - `replace()`
  - `goBack()`
  - `goForward()`
  - `go()`



[动态路由](https://github.com/wayou/wayou.github.io/issues/16)：

- react-route v4 引入