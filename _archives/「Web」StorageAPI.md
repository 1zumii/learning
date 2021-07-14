### [Web Storage API](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)

- [Window.localStorage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage)

  - 生命周期是永久
  - 在关闭窗口或标签页之后将会删除这些数据

- [Window.sessionStorage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage)

  - 生命周期为当前窗口或标签页
  - 相同浏览器的不同页面间可以共享相同的 localStorage （页面属于相同域名和端口）

- [区别](https://juejin.im/post/5b3a0fd4e51d4555c3022a61)

- Api

  - `Storage.getItem()`
  - `Storage.setItem()`
  - `Storage.removeItem()`
  - `Storage.clear()`