关于`setContentPane()`和`getContentPane()`的应用

- 我们可以在`JFrame`对象中添加`AWT`或者`Swing`组件。但是，虽然它有`add`方法，却不能直接用于添加组件，否则会抛出异常——不信就试试。

	> Exception：adding container's parent to itself

- 造成这个现象的原因只有一个解释：JFrame不是一个容器，它只是一个框架。那么，应该怎么添加组件呢？ 

- JFrame有一个`Content Pane`，窗口能显示的所有组件都是添加在这个Content Pane中。

- JFrame 提供了两个方法：`getContentPane`和`setContentPane`就是用于获取和设置其Content Pane的。 

- 对JFrame添加组件有两种方式

  1. 用getContentPane()方法获得JFrame的内容面板，再对其加入组件：

     ```java
     frame.getContentPane().add(childComponent)
     ```

  2. 建立一个Jpanel或JDesktopPane之类的中间容器，把组件添加到容器中，用setContentPane()方法把该容器置为JFrame的内容面板： 

     ```java
     JPanel contentPane=new JPanel(); 
     ......//把其它组件添加到Jpanel中; 
     frame.setContentPane(contentPane); 
     //把contentPane对象设置成为frame的内容面板
     ```

     
