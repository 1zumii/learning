1. [密码学笔记 - ruanyifeng.com](http://www.ruanyifeng.com/blog/2006/12/notes_on_cryptography.html)
2. [公钥，私钥和数字签名这样最好理解 - CSDN](https://blog.csdn.net/21aspnet/article/details/7249401)
3. [SSH原理与运用（一）：远程登录 - ruanyifeng.com](https://www.ruanyifeng.com/blog/2011/12/ssh_remote_login.html)

## 加密

### 加密方法

- 单钥加密`private key cryptography`
  - 加密和解密过程都用同一套密码
- 双钥加密`public key cryptography`
  - 加密和解密过程用的是两套密码（公钥、私钥）

### 双钥加密

- `公钥`和`私钥`是**一一对应**的关系，有一把公钥就必然有一把与之对应的、独一无二的私钥，反之亦成立。
- `公钥`和`私钥`是成对的，它们**互相解密**。
  - 公钥加密 => 私钥解密
  - 私钥数字签名 => 公钥验证

### 数字签名

- [数字签名 - ruanyifeng.com](http://www.ruanyifeng.com/blog/2011/08/what_is_a_digital_signature.html)

- 对内容做一次数字`摘要`，将摘要结果用`私钥`加密作数字签名，数字签名和内容一并发送
- 收方用`公钥`对数字签名作验证，得到数字签名里的摘要结果。对**收到的内容**做一次数字摘要，以此与数字签名中的摘要结果作**比较**，可验证内容是否被修改。

### 数字证书

- 通过第三方**证书中心CA**`certificate authority`为公钥作认证
- CA用**自己的私钥**，对用户的公钥和一些相关信息加密，生成数字证书`Digital Certificate`

- 数字证书同数字签名和内容一并发送
- 收方用**CA的公钥**解开数字证书，得到用户的公钥 ...

## SSH原理与运用

- SSH是一种网络协议，用于计算机之间的**加密登录**
- 如果要在Windows系统中使用SSH，会用到`PuTTY`