## [跨域 Cross-Origin](https://zhuanlan.zhihu.com/p/63629321) 

### [同源策略](https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy)

- 同源：协议、域名、[端口]都相同

- 举例：`http://store.company.com/dir/page.html`

  *http://默认端口是80*

| URL                                               | isSameOrigin | reason       |
| ------------------------------------------------- | :----------: | ------------ |
| `http://store.company.com/dir2/other.html`        |     同源     | 只有路径不同 |
| `http://store.company.com/dir/inner/another.html` |     同源     | 只有路径不同 |
| `https://store.company.com/secure.html`           |     失败     | 协议不同     |
| `http://store.company.com:81/dir/etc.html`        |     失败     | 端口不同     |
| `http://news.company.com/dir/other.html`          |     失败     | 主机不同     |

### 跨域资源共享 Cross Origin Resource Sharing

- 简单请求
- 非简单请求

### 反向代理

*\front\package.json*

```json
// create-react-app的版本在低于2.0的时候，可以如下配置proxy
"proxy": {
    "/": {
        "target": "http://127.0.0.1:8000"
    }
}
```

```json
// 高于2.0的时候只能配置为string类型
"proxy": "http://127.0.0.1:8000"
```

## [package.json中的proxy字段](https://segmentfault.com/a/1190000014891894?utm_medium=referral&utm_source=tuicool)

- [在开发环境中代理API请求](https://www.html.cn/create-react-app/docs/proxying-api-requests-in-development/)
- [How to get "create-react-app" to work with your API](https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/)
- 目前只了解到可以与create-react-app的react-scripts结合使用

### [React使用http-proxy-middle解决跨域问题](https://www.fakin.cn/2450.html)

- 在`src`目录下创建`setupProxy.js`

```javascript
const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        proxy('/mock/e74f9a536a03ab6cda9c05801f3fab0b/bms', {
            target: 'https://www.fastmock.site/',
            changeOrigin: true
            secure:false,
        }
    ))
};
```

- `module`变量来自于`webpack.config.js`
- 如果是使用create-react-app创建的项目，需要npm run eject弹出被封装的webpack配置，[从而得到](https://segmentfault.com/q/1010000011750316)[webpack.config.js](https://segmentfault.com/q/1010000011750316)
- [弹出配置的报错问题](https://juejin.im/post/5c4ac72d6fb9a049b2223ecb)