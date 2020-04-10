### 通过npm使用React

- 淘宝定制的cnpm( gzip压缩支持 ) 命令行工具代替默认的npm

> $ npm install -g cnpm --registry = [https://registry.npm.taobao.org](https://registry.npm.taobao.org/)
> $ npm config set registry https://registry.npm.taobao.org

- 取消镜像：npm config set registry https://registry.npmjs.org
- [使用npm和cnpm](https://www.jianshu.com/p/f581cf9360a2)

### package-lock.json

- [package.json和package-lock.json的区别](https://blog.csdn.net/jigetage/article/details/84957147)
- [官方文档解释（译）](https://blog.csdn.net/ssfz123/article/details/79627095)

### nrm

- [npm源管理器nrm使用教程](https://segmentfault.com/a/1190000017419993)
- 列出可选择的源：`nrm ls`
- 切换使用的源：`nrm use <source_name>`