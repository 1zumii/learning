[基础概念理解 - 知乎](https://zhuanlan.zhihu.com/p/53260098)

[Docker命令大全 - Runoob.com](https://www.runoob.com/docker/docker-command-manual.html)

### 1.[Docker镜像](https://www.jikexueyuan.com/course/867_3.html?ss=1)

- 查看镜像：`docker images`
- **镜像ID**：每个镜像有唯一的ID。长度64个字符，通常只是用前12个
- 镜像Tag：每个镜像都可以打上一个或多个标签
- 镜像Repository：每个镜像存储在一个仓库中
- `Repository:TAG`：唯一标识了一个镜像
- 删除镜像：`docker rmi [OPTIONS] IMAGE [IMAGE...]`
  - `-f`：强制删除
  - `--no-prune`：不移除该镜像的过程镜像，默认移除

### 2.[Docker容器](https://www.jikexueyuan.com/course/867_4.html?ss=1)

每个Docker容器运行在独立的虚拟环境中，虚拟环境包括多个方面，最重要的是**独立的文件系统**。在这个文件系统中的读写操作，既不影响宿主机的文件系统，也不影响其他容器的文件系统。

#### 2.1.运行容器 [docker run](https://www.runoob.com/docker/docker-run-command.html)

- `-it`：创建交互式容器
  - **-i**: 交互式操作
  - **-t**: 终端
- `-d`：创建守护式进程，容器启动后会自动进入后台

- `--name`：指定容器的名称

- 容器运行成功后，会返回64字符的`容器ID`，作为唯一标识

##### Example

```bash
asus@DESKTOP...
$ docker run -d ubuntu /bin/bash
e1437bff1caa9e604dc0adeaddb30b14015f5b63fcfc856f436c40788af11b23

asus@DESKTOP...
$ docker run -itd ubuntu /bin/bash
6e4889d44f4a7e352f42ad4589b7e66da86b106752a6236790919f59cb0a2739

asus@DESKTOP...
$ docker ps
CONTAINER ID        IMAGE		COMMAND             CREATED             STATUS	...
6e4889d44f4a        ubuntu		"/bin/bash"         5 seconds ago       Up 5 seconds

asus@DESKTOP...
$ docker ps -a
CONTAINER ID        IMAGE		COMMAND             CREATED             STATUS	...
6e4889d44f4a        ubuntu		"/bin/bash"         9 seconds ago       Up 9 seconds
e1437bff1caa        ubuntu		"/bin/bash"         24 seconds ago      Exited (0) 24 seconds ago
```

- **ubuntu**: ubuntu 镜像名称，如果只指定了仓库名称，没有指定tag，默认使用tag为'last'
- **/bin/bash**：放在镜像名后的是命令，希望有个交互式 Shell，因此用的是 /bin/bash

#### 2.2.查看容器信息 [docker ps [OPTIONS]](https://www.runoob.com/docker/docker-ps-command.html)

- OPTIONS说明：
  - `-a `：显示所有的容器，包括未运行的
  - `-f`：根据条件过滤显示的内容
- 容器状态
  - created - 已创建
  - restarting - 重启中
  - running - 运行中
  - removing - 迁移中
  - paused - 暂停
  - exited - 停止
  - dead - 死亡

- 查看容器详细信息：`docker inspect [ID]`

  - `-f`：查看容器的详细信息

    ```bash
    $ docker inspect -f '{{.NetworkSettings.IPAddress}}' [ID]
    ```

#### 2.3.进入容器

在使用 **-d** 参数时，容器启动后会进入后台。通过以下指令进入：

- `docker attach`：如果从这个容器退出，会导致容器的停止
- `docker exec`

#### 2.4.容器状态相关命令

- 启动已停止运行的容器：`docker start [ID]`
- 停止容器：`docker stop [ID]`
- 重启容器：`docker restart [ID]`
- 删除容器：`docker rm [ID]`
  - `-f`：强制删除一个运行中的容器
  - [Docker 清理命令](https://www.runoob.com/w3cnote/docker-clear-command.html)

