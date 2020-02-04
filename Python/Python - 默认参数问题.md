```python
"""
实验题4：数组连乘问题编制赫夫曼编码
【问题描述】 写一程序完成多个二维数组的连乘，并要求找出运算量最小的乘积顺序。(使得依此次序计算矩阵连乘积需要的数乘次数最少)
【测试数据】A10*30*B30*70*C70*1*D1*200
"""
import random                           # 导入随机数模块

class DoubleArray:
    count=0                             # 类变量，计数 运算量
    # Initialize
    def __init__(self,x=random.randint(1,100),y=random.randint(1,100)):
        self.row=x                      # 行 row
        self.column=y                   # 列 column
    # Operator Overloading
    def __mul__(self, other):
        if other.column==self.row:      # other × self
            mid=other.column
            DoubleArray.count=other.row*mid*self.column
            return DoubleArray(other.row,self.column)
        else:                           # self × other
            mid=self.column
            DoubleArray.count=self.row*mid*other.column
            return DoubleArray(self.row,other.column)
# main
list_array=[DoubleArray()]              # first item in list
times=random.randint(1,10)
for t in range(0,times):
    temp_x=list_array[-1].column        # ensure double arrays can multiple each other
    list_array.append(DoubleArray(temp_x,random.randint(1,99)))
```

若未指定29行的`random.randint(1,99)`，构造器的两个参数都会变成`temp_x`
正常使用确定值的默认参数，仍正常运行