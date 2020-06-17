1. [shell bash终端中输出的颜色和格式详解(超详细)](https://blog.csdn.net/u010632165/article/details/92811856)
2. [自定义bash提示符 -- Bash prompt basics](http://adamcavendish.is-programmer.com/posts/35659.html)
3. [bash各个配置文件说明](https://www.cnblogs.com/joneykk/archive/2010/05/06/2499801.html)

## 操作流程

- 打开`~/.bashrc`（如没有则新建）

- 添加

  ```bash
  export PS1="\[\e[1;34m\]\u\[\e[0m\] \[\e[1;32m\]\w\[\e[0m\]\n\[\e[1;35m\]\\$\[\e[0m\] "
  ```

- 刷新配置`source ~/.bashrc`

## 格式说明

- 颜色
  - `\[\e[1;34m\]`和`\[\e[0m\]`包裹需要更换颜色的部分
  - 34：蓝色
  - 32：绿色
  - 35：品红
- 提示符转义码
  - \u：当前用户名
  - \n：换行
  - \w：当前路径,$HOME将会被缩写为'~'
  - **\\\\$**：如果当前用户ID为0(root)，则显示'#'，否则显示'$'

