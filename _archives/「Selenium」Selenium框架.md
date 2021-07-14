### 1.[unittest单元测试框架](https://blog.csdn.net/u011541946/article/details/70238473)：

- 测试固件[^test fixture]

  - `setUp( )`：执行测试代码之前的准备部分
  - `tearDown( )`：测试结束之后的清扫代码

- 测试用例[^test case]

  - unittest中管理的最小单元是测试用例
  - 包括测试固件，和具体测试业务的函数或者方法

- 测试套件[^test suite]

  - 测试用例的集合

- 测试执行器[^test runner]

  - 用来执行加载测试用例，并执行用例，且提供测试输出

### 2.[Page Object Model](https://blog.csdn.net/u011541946/article/details/70238979)：

- 页面对象模型
- 每一个页面对应一个页面类，页面的元素写到这个页面类中