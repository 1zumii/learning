## webpack
- 模块化打包
- 将多个文件打包成 `bundle.js`
- 重点
    - 前端模块化
    - Webpack打包核心思路
    - Webpack中的关键人物
    - 不要执着于API
### 前端模块化的优点
- 作用域封装 
    立即执行函数 Immediately-Invoked Function Expression
- 重用性
- 解耦
### 模块化方案的进化
1. AMD 
2. Common JS
3. ES6 Module
### webpack打包过程
1. 从入口文件开始，分析整个应用的依赖树
2. 将灭个依赖模块包装起来，放到数组中等待调用
3. 实现模块加载方法，并放到模块执行的环境中
4. 把执行入口文件的逻辑放在一个函数表达式中，并立即执行这个函数
### npm
- `npm install` 默认会带上 `--save` 的选项，将依赖写入 `package.json` *npm 5以后*
- `npm install --save-dev` 将依赖写入 `package.json` 的 `devDependencies`
- `npm install --only=prod` 只安装生产环境要求的包 *默认两边都安装*
- `npm install --only=dev` 只安装开发环境要求的包
- 语义化版本
    - `^version`
        ^1.0.1 => 1.x.x
    - `~version`
        ~1.0.1 => 1.0.x
- 遇到问题，先看依赖有没有问题
- 不全局安装`webpack-cli`的时候
    在`package.json`中添加
    ```json
    "scripts": {
        "build": "webpack"
    }
    ```
### webpack核心特性
- `webpack.config.js`中 module.rules.use 的数组，配置顺序和加载顺序**相反**
- loader => 文件加载器，文件的转义、编译
- `webpack-dev-server`编译在内存中，从而实现热加载
### babel
- 在`package.json`中配置`preset`字段
- 根目录下的`.babelrc`文件中配置
### webpack性能优化
- 打包结果优化
	- TerserPlugin
	- WebpackBundleAnalyzerPlugin
- 构建过程优化
- Tree-Shaking 