## 第一章 概述

### 1.3 [常用基本概念](https://www.icourse163.org/learn/SCUT-1002700002?tid=1206622278#/learn/content?type=detail&id=1211470282)

#### 拓扑

- **信道**的分布方式
- 常见结构：总线型、星型、环形、树形、网状

#### 协议

一系列规则和约定的规范性描述

#### 网络按规模划分

1. PAN
2. LAN
3. MAN
4. WAN
5. Internet

### 1.4 [参考模型](https://www.icourse163.org/learn/SCUT-1002700002?tid=1206622278#/learn/content?type=detail&id=1211470283&sm=1)

#### 典型分层模型

- OSI七层模型
- **TCP/IP四层模型**

#### TCP/IP参考模型

1. 应用层`Application Layer`
2. 传输层`Transport Layer`
3. 网络层`Internet Layer`
4. 网络接入层`Network Access Layer`

*教程中将网络接入层分为 Data Link Layer 和 Physical Layer*

### 1.4 [参考模型相关概念](https://www.icourse163.org/learn/SCUT-1002700002?tid=1206622278#/learn/content?type=detail&id=1211470284&cid=1214124648)

#### 实体 Entity

- 每层中活动的元素
- 负责完成封装、解封装等基本功能
- 对等实体：Peer Entity，收发双方对应层上的实体

#### 虚拟通信

收发双方的对应层之间有一根直接的通道（虚通道）。沿着虚通道，`PDU`（协议数据单元）从发方到达收方

协议数据单元PDU