[static关键字的四种用法](https://www.cnblogs.com/dotgua/p/6354151.html?utm_source=itdadao&utm_medium=referral)

- 修饰成员变量：同类对象实例间通信

- 修饰成员方法：常用于工具类

- 静态块:

  1. 在创建对象时，`static`修饰的成员会首先被初始化；
  2. 第一次去使用一个类时，就会触发该类的成员初始化；
  3. 当我们使用了类方法，完成类的成员的初始化后，再`new`该类的对象时，`static`修饰的类成员没有再次初始化，这说明，`static`修饰的类成员，在程序运行过程中，只需要初始化一次即可，不会进行多次的初始化。

- 静态导包：采用`static`导入包后，在不与当前类的方法名冲突的情况下，无需使用`类名.方法名`的方法去调用类方法了，直接可以采用`方法名`去调用类方法。

- Python导包：

  ```python
  from module_name import class_name	#在不与当前类的方法名冲突的情况下
  ```

  