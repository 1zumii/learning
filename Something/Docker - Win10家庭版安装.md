#### 1.下载Docker Toolbox for Windows

- [官方指导文档](https://docs.docker.com/toolbox/toolbox_install_windows/)
- To download the latest version of Docker Toolbox, go to [Toolbox Releases](https://github.com/docker/toolbox/releases) and download the latest `.exe` file.
- 参考指导：
  1. [如何在windows安装docker toolbox - CSDN](https://blog.csdn.net/xbinworld/article/details/78945879)
  2. [Windows Docker 安装 - runoob.com](https://www.runoob.com/docker/windows-docker-install.html)

#### 2.[解决docker-machine 初始化下载 book2docker.iso 过慢的问题](https://juejin.im/entry/5bec241ce51d455a175148fe)

1. 先运行一次Docker Quickstart Terminal，使得目录出现

   ./Users/<username>/.docker/machine/cache

2. [下载 book2docker.iso（最新版本）](https://github.com/boot2docker/boot2docker/releases)

3. 下好的.iso放入目录下，重新运行Docker Quickstart Terminal

#### 3.[解决点击Docker出现windows 正在查找bash.exe的问题](https://blog.csdn.net/A632189007/article/details/78601213)

由于安装时未勾选`Git for windows`，需要手动查找Git bash的位置。

例如：D:/Program Files/Git**/bin/bash.exe**

![image-20200204233451068](image-20200204233451068.png)

#### 4.[Docker虚拟机文件地址修改](https://blog.csdn.net/chengly0129/article/details/68947265)

默认情况下，`docker-machine`创建的虚拟机文件，是保存在C盘的`C:\Users\用户名\.docker\machine\machines\default` 目录下的，如果下载和使用的镜像过多，那么必然导致该文件夹膨胀过大，如果C盘比较吃紧，那么我们就得考虑把该虚拟机移到另一个盘上。具体操作如下：

1. 使用`docker-machine stop default`停掉Docker的虚拟机。

2. 打开VirtualBox，选择“管理”菜单下的“虚拟介质管理”，我们可以看到Docker虚拟机用的虚拟硬盘的文件disk。

3. 选中“disk”，然后点击菜单中的“复制”命令，根据向导，把当前的disk复制到另一个盘上面去。

4. 回到VirtualBox主界面，右键“default”这个虚拟机，选择“设置”命令，在弹出的窗口中选择“存储”选项。

5. 把disk从“控制器SATA”中删除，然后重新添加我们刚才复制到另外一个磁盘上的那个文件。

6. 确定，回到PowerShell，我们使用`docker-machine start default`就可以启动新地址的Docker虚拟机了。确保新磁盘的虚拟机没有问题。就可以把C盘那个disk文件删除了。

#### 5.[Docker toolbox换源](https://www.jianshu.com/p/7a6a5badb603)

1. 运行 Docker Quickstart Terminal

2. 依次执行

```bash
docker-machine ssh default
sudo sed -i "s|EXTRA_ARGS='|EXTRA_ARGS='--registry-mirror=<你的加速地址> |g" /var/lib/boot2docker/profile
exit
docker-machine restart default
```

3. 如果换源成功，执行`docker info`，可见

> Registry Mirrors:
>  https://dockerhub.azk8s.cn/

国内很多云服务商都提供了国内加速器服务，例如：

- [Azure 中国镜像](https://github.com/Azure/container-service-for-azure-china/blob/master/aks/README.md#22-container-registry-proxy)`https://dockerhub.azk8s.cn`
- [网易云加速器](https://www.163yun.com/help/documents/56918246390157312)`https://hub-mirror.c.163.com`
- [阿里云加速器(需登录账号获取)](https://cr.console.aliyun.com/cn-hangzhou/mirrors)

