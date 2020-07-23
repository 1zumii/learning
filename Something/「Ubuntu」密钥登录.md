1. [ubuntu下sudo权限建立用户密钥登录](http://blog.sina.com.cn/s/blog_979b9b9e0102wcwh.html)
2. [ssh修改登录端口禁止密码登录并免密登录](https://www.jianshu.com/p/b294e9da09ad)
3. [xxx is not in the sudoers file.This incident will be reported.的解决方法](https://www.cnblogs.com/zox2011/archive/2013/05/28/3103824.html)

## 创建用户

- 创建用户有两条命令：`adduer`和`useradd`，对应着两条删除用户的命令：`deluser`和`userdel`
- 区别
  - adduser：会自动为创建的用户指定主目录、系统shell版本，会在创建时输入用户密码
  - useradd：需要使用参数选项指定上述基本设置，如果不使用任何参数，则创建的用户无密码、无主目录、没有指定shell版本

```bash
$ adduser daddy
```

## 更改为密钥登录

### 生成密钥对

- 切换至新建的用户 *daddy*

- 在新用户上生成密钥对

  ```bash
  $ ssh-keygen -t rsa -C "xxx@xx.com"
  ```

- 将生成的公钥写入`authorized_keys`（原本不存在，利用 cat 新建）

  ```bash
  $ cd  /home/daddy
  $ cd .ssh
  $ cat id_rsa.pub >> authorized_keys
  $ chmod 600 authorized_keys  
  ```

- 可使用 WinSCP 将私钥`id_rsa`保存到本地，服务器端的密钥对就可以删除了

### 修改ssh配置

- 编辑远程服务器上的`sshd_config`文件

  ```bash
  $ vim /etc/ssh/sshd_config
  ```

  找到如下选项并修改(通常情况下，前两项默认为no，地三项如果与此处不符，以此处为准)

  ```ini
  #启用密钥验证
  RSAAuthentication yes
  PubkeyAuthentication yes
  #指定公钥数据库文件
  AuthorsizedKeysFile.ssh/authorized_keys
  ```

- 编辑保存完成后，重启ssh服务使得新配置生效

  ```bash
  $ systemctl restart sshd.service
  ```

### 禁止ssh口令登录

- 编辑远程服务器上的`sshd_config`文件

  ```bash
  $ vim /etc/ssh/sshd_config
  ```

  找到如下选项并修改

  ```ini
  PasswordAuthentication no
  ```

- 编辑保存完成后，重启ssh服务使得新配置生效

  ```bash
  $ systemctl restart sshd.service
  ```

## 将用户添加成sudoer

- 切换到root用户下

- 添加`sudoers文件`的写权限

  ```bash
  $ chmod u+w /etc/sudoers
  ```

- 编辑`sudoers文件`

  ```bash
  $ vim /etc/sudoers
  ```

  找到  root ALL=(ALL) ALL ，在其下方添加如下任意一条

  > xxx	 ALL=(ALL)	ALL
  > %xxx	ALL=(ALL)	ALL
  > xxx	 ALL=(ALL)	NOPASSWD: ALL
  > %xxx	ALL=(ALL)	NOPASSWD: ALL

- 撤销`sudoers文件`写权限

  ```bash
  $ chmod u-w /etc/sudoers
  ```

  