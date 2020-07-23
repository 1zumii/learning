[参考文章](https://blog.csdn.net/qq_33744228/article/details/87861804)

### 正确步骤

- 在小程序根目录下执行命令：`npm init`

- 继续安装的第三方包

  ```bash
  npm i @vant/weapp -S --production
  ```

  需要注意的是 **package.json** 和 **node_modules** 必须在 **miniprogram** 目录下

- 开发工具：`工具` -> `构建npm`

- 详情里面：选中`使用npm模块`