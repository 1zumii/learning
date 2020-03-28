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

### 1.5 [参考模型相关概念](https://www.icourse163.org/learn/SCUT-1002700002?tid=1206622278#/learn/content?type=detail&id=1211470284&cid=1214124648)

#### 实体 Entity

- 每层中活动的元素
- 负责完成封装、解封装等基本功能
- 对等实体：Peer Entity，收发双方对应层上的实体

#### 虚拟通信

收发双方的对应层之间有一根直接的通道（虚通道）。沿着虚通道，`PDU`（协议数据单元）从发方到达收方

协议数据单元PDU

## 第二章 物理层

### 2.1 [概述](https://www.icourse163.org/learn/SCUT-1002700002?tid=1206622278#/learn/content?type=detail&id=1211470294&sm=1)

#### 主要功能

- 提供透明的比特流传输
- 不关心其中信息(0、1)，只负责正确搬运

#### 物理层的特性

- 机械特性
- 电气特性
- 功能特性
- 规程特性

#### 信号

- 物理层上数据的传输
- 模拟信号：对应时域的信号的取值是**连续**的
- 数字信号：对应时域的信号的取值是**离散**的
- 码元：不同离散值的基本波形

#### 物理带宽

- 传输过程中振幅**不会明显衰减**的频率范围
- 单位：赫兹
- 取决于介质材料的物理特性

#### 数字带宽

- 单位时间内，流经的信息总量

#### 物理带宽和数字带宽的关系

- 奈奎斯特定理：**无噪声**信道的情况
- 香农定理：**有噪声**信道的情况

### 2.2 [有导向的传输介质](https://www.icourse163.org/learn/SCUT-1002700002?tid=1206622278#/learn/content?type=detail&id=1211470295&cid=1214124676&replay=true)

#### 传输介质

- 引导性：有线
- 非引导性：无线

#### 有线传输介质

- 同轴电缆
- 双绞线
  - 非屏蔽双绞线`UTP`：在**局域网**中使用最多
  - 屏蔽双绞线`STP`
  - 网屏式双绞线
- 光纤
  - 带宽高、距离远，损耗低，不受电磁辐射干扰，易断裂
  - 通常以光缆形式存在

### 2.3 [复用技术](https://www.icourse163.org/learn/SCUT-1002700002?tid=1206622278#/learn/content?type=detail&id=1211470296&cid=1214124680&replay=true)

#### 特点

- 多用户共享同一根信道
- 干线起点共用，干线终点分离

#### 频分多路复用FDM技术

- 波分多路复用WDM技术
- 密集波分多路复用DWDM技术

#### 时分多路复用TDM技术

- 统计时分多路复用STDM技术

#### 码分多路复用CDMA技术

- 广泛用于3G

### 2.4 [调制技术](https://www.icourse163.org/learn/SCUT-1002700002?tid=1206622278#/learn/content?type=detail&id=1211470297&cid=1214124684&replay=true)

#### 调制机制使用信号来传输比特

- 基带传输`Baseband Transmission`
- 通带传输`Passband Transmission`

### 2.5 [公共交换电话网 PSTN](https://www.icourse163.org/learn/SCUT-1002700002?tid=1206622278#/learn/content?type=detail&id=1211470298&sm=1)

#### 主要构成

- 本地回路`Local Loop`
- 干线`Trunks`
- 交换局`Switching Offices`（包含端局）

#### 本地回路

- 传输模拟信号
- 经过**调制解调器**传到端局

#### 调制解调器

- 用于将计算机产生的数字比特流转变为载波输出（模拟信号）
- Modem，又称“猫”

#### 干线

- 多路复用
- 连接交换局（包括端局）的连接
- 通常使用光纤
- 端局里有**编解码器**`codec`
  - 模拟信号数字化/数字信号模拟化
  - 脉冲编码调制PCM

#### 交换局

- 电路交换`Circuit Switching`
  1. 建立连接
  2. 传数据
  3. 拆除连接
- 包交换`Packet Switching`（分组交换）