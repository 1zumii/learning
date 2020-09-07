1. [React之diff算法 - 简书](https://www.jianshu.com/p/3ba0822018cf)
2. [React Diff 算法原理解析 - 简书](https://www.jianshu.com/p/d9d54d27ff36)
3. [浅谈react diff实现 - 掘金](https://juejin.im/post/6844903833420693512)
4. [浅谈React中的diff - CSDN](https://blog.csdn.net/sexy_squirrel/article/details/79801940)

## Diff 策略

React 用三大策略将传统的树的diff算法O(n<sup>3</sup>)复杂度，转化为O(n)复杂度

- Tree Diff
  - Web UI中DOM节点跨层级的移动操作特别少，可以忽略不计
- Component Diff
  - 拥有相同类的两个组件 生成相似的树形结构
  - 拥有不同类的两个组件 生成不同的树形结构
- Element Diff
  - 对于同一层级的一组子节点，通过`key`区分

