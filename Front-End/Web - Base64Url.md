1. [Base64编码原理与应用](http://blog.xiayf.cn/2016/01/24/base64-encoding/)
2. [Data URI scheme 详细介绍 - 掘金](https://juejin.im/post/5d79b49551882539aa5ad496)

3. [MIME 类型 - MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types)

## Base64编码

- 标准Base64编码字符集：52个大小写英文字母，10个数字，两个符号（+ /）
- 编码的目的：将`二进制数据`转成`文本数据`，对于非二进制数据需要先转换成二进制
- 编码过程
  - 每连续`6bit`（2<sup>6</sup> = 64）计算其十进制值
  - 得到的十进制值，在字符集索引表中，找到对应的字符
  - 编码是每3个原始字符编码成4个字符，如果原始字符串长度不能被3整除，使用`0`来补充原始字符串

- 标准Base64编码通常用`=`字符来替换最后因<u>补齐长度</u>出现的`A`

- 应用：`Data URLs`

## Data URI scheme

> data:\[\<mime type>]\[;charset=\<charset>][;\<encoding>],\<encoded data>

- data：协议头
- MIME type：浏览器通常使用MIME类型，而不是文件扩展名，来确定如何处理文档
- charset：源文本的字符集编码方式，默认编码是 charset=US-ASCII, 即数据部分的每个字符都会自动编码为 %xx

- \<encoding>：数据编码方式（默认US-ASCII，BASE64两种）

