![](image-20200129162559961.png)

### 1.File类的构造方法

```java
//在当前目录下创建一个与aaa.txt文件名相关联的文件对象
File f1 = new File("aaa.txt");
//指明详细的路径以及文件名，请注意双斜线
File f2 = new File("D:\\Java\\Hello.java");
```

### 2.File类中的常用方法

| 方法原型                                           | 说明                                                         |
| -------------------------------------------------- | ------------------------------------------------------------ |
| boolean exists()                               | 判断文件`是否存在`，存在返回true，否则返回false              |
| boolean isFile()                                   | 判断是否为`文件`，是文件返回true，否则返回false              |
| boolean isDirectory()                              | 判断是否为`目录`，是目录返回true，否则返回false              |
| String getName()                                   | 获得文件的`名称`                                             |
| String getAbsolutePath()                           | 获得文件的`绝对路径`                                         |
| long length()                                  | 获得文件的`长度`（字节数）                                   |
| boolean createNewFile()<br/>throws IOException | `创建`新文件，创建成功返回true，否则返回false，有可能抛出IOException异常，必须捕捉 |
| boolean delete()                                   | `删除`文件，删除成功返回true，否则返回false                  |

### 3.流的类型

|        |    字节流    | 字符流 |
| :----: | :----------: | :----: |
| 输入流 | InputStream  | Reader |
| 输出流 | OutputStream | Writer |

![image-20200129164809140](image-20200129164809140.png)

以`字节流`的方式读: 读8次，8个字节

以`字符流`的方式读: 读6次，6个字符

### 4.使用FileInputStream类读文件

- `FileInputStream`类称为文件输入流，继承于`InputStream`类，是进行文件读操作的最基本类；
- 它的作用是将文件中的数据输入到内存中，我们可以利用它来读文件；
- 由于它属于字节流，因此在读取Unicode字符（如中文）的文件时可能会出现问题。

| 构造方法                                                     | 说明                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| FileInputStream(File file)<br/>throws FileNotFoundException | 使用`File`对象创建文件输入流对象，如果文件打开失败，将抛出异常 |
| FileInputStream(String name)<br/>throws FileNotFoundException | 使用文件名或路径创建文件输入流对象，如果文件打开失败，将抛出异常 |

| 方法原型                                  | 说明                                                         |
| ----------------------------------------- | ------------------------------------------------------------ |
| int read()<br/>throws IOException         | 读取文件中的数据，一次读取一个字节，读取的数据作为返回值返回，如果读到文件末尾则返回-1，有可能抛异常，必须捕捉 |
| int read(byte[] b)<br/>throws IOException | 读取文件中的数据，将读到的数据存放到byte型数组中，并返回读取的字节的数量，未读到数据返回-1，有可能抛异常，必须捕捉 |
| void close()<br/>throws IOException       | 关闭流对象，有可能抛异常，必须捕捉                           |

### 5.FileInputStream/FileOutputStream小结

由于采用字节方式进行数据传输，不必考虑数据的格式问题，这两个类对文件操作的效率较高，可以使用这两个类完成复制文件的操作。

### 6.字符流

- `FileInputStram`类和`FileOutputStream`类对于Unicode编码的文件，可能出现乱码；
- 考虑到Java是跨平台的语言，要经常操作Unicode编码的文件，使用字符流操作文件是有必要的；
- 使用字符流将涉及到以下4个类：
  - FileReader类
  - FileWriter类
  - BufferedReader类
  - BufferedWriter类

### 7.FileReader类

该类将从文件中逐个地读取字符，效率比较低下，因此一般将该类对象包装到`缓冲流(BufferedReader)`中进行操作。

```Java
//通过文件对象创建文件读取流对象
FileReader fr = new FileReader(file);
//将文件读取流包装成缓冲读取流
BufferedReader br = new BufferedReader(fr);
```

BufferedReader常用方法：

| 方法原型                                 | 说明                                                         |
| ---------------------------------------- | ------------------------------------------------------------ |
| String readLine()<br/>throws IOException | 从缓冲读取流中读取一行字符，以字符串的形式返回，有可能抛异常，必须捕捉 |
| void close()<br/>throws IOException      | 关闭流对象，有可能抛异常，必须捕捉                           |

### 8.FileWriter类

与FileReader类相似，FileWriter类同样需要使用`缓冲流(BufferedWriter)`进行包装。

```Java
//通过文件对象创建文件输出字符流对象
FileWriter fw = new FileWriter(file);
//将文件输出字符流包装成缓冲流
BufferedWriter bw = new BufferedWriter(fw);
```

BufferedWriter类的常用方法：

| 方法原型                                      | 说明                                                         |
| --------------------------------------------- | ------------------------------------------------------------ |
| void write(String str)<br/>throws IOException | 将一行字符串写入到缓冲写入流中，有可能抛异常，必须捕捉       |
| void newLine()<br/>throws IOException         | 将一个回车换行符写入到文件中，从而达到换行的效果，有可能抛异常，必须捕捉 |

### 9.基本数据类型的读/写

- `FileInputStream`和`FileOutputStream`在读写文件时不考虑数据的类型；
- `FileWriter`和`FileReader`在读写文件时，将所有的数据都看做字符；
- 但有时候，我们需要将各种类型的数据写入文件或是从文件中读取，`DataInputStream类`和`DataOutputStream类`可以满足需要。

### 10.DataInputStream类

DataInputStream类可以输入任何类型的数据，但它不可以单独使用，需要要配合其它字节输入流一起使用

```Java
//将文件输入流包装成数据输入流，以便从文件中读取各种类型的数据
FileInputStream fis = new FileInputStream("data.dat");
DataInputStream dis = new DataInputStream(fis);
```

DataInputStream类的常用方法：

| 方法原型                                                  | 说明                                    |
| --------------------------------------------------------- | ----------------------------------------------- |
| final boolean readBoolean() throws IOException | 从数据输入流中读取一个`boolean`型数据 |
| final char readChar() throws IOException       | 从数据输入流中读取一个`char`型数据  |
| final int readInt() throws IOException         | 从数据输入流中读取一个`int`型数据   |
| final long readLong() throws IOException       | 从数据输入流中读取一个`long`型数据  |
| final float readFloat() throws IOException     | 从数据输入流中读取一个`float`型数据 |
| final float readDouble() throws IOException    | 从数据输入流中读取一个`double`型数据 |

### 11.对象的[序列化](http://www.runoob.com/java/java-serialization.html)

- 对象的序列化：把对象写到一个输出流中

- 对象的反序列化：从一个输入流中读取一个对象

- java语言要求只有实现了`java.io.Serializable接口`的类的对象才能被序列化和反序列化

- 如果一个可序列化的对象包含对某个不可序列化对象的引用，那么整个序列化操作将会失败，并且会抛出一个`NotSerializableException`。

- 父类可序列化，子类也可序列化

- [解决循环操作ObjectInputStream的readObject()方法的EOF异常](http://blog.sina.com.cn/s/blog_6145ed810100z17b.html)

- 实现序列化`ObjectOutputStream类`

  ```java
  public final void writeObject(Object x) throws IOException
  ```

- 反序列化`ObjectInputStream类` 

  ```java
  public final Object readObject() throws IOException, ClassNotFoundException
  ```

#### Example

```java
//序列化：
//将文件输出流包装成ObjectOutputStream，以便往文件中写入对象
ObjectOutputStream oout = new ObjectOutputStream(new FileOutputStream("filepath"));
//反序列化：
//将文件输入流包装成ObjectInputStream，以便往文件中读出对象
ObjectInputStream oin = new ObjectInputStream(new FileInputStream("filepath"));
```

