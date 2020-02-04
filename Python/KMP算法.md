```python
'''
【问题描述】对任意输入的一串字符，在某文档中进行匹配，并给出匹配结果。
【测试数据】
（1）输入的一行程序，与源代码匹配，源程序自行选择；
（2）输入的一串字符，在某文本文件中匹配，文本文件自行选择。
'''
import random                   # 导入随机数模块

# KMP:生成next[i]数组
def next_array(pattern):
    end=len(pattern)            # end of pattern
    re=[]                       # next array
    for i in range(0,end):      # Initialize end-1 times,i is time
        re.append(0)
    for i in range(1,end-1):    # not compare in the i,i is index of array
        j=i                     # pointer for compare from i
        k=0                     # pointer for compare from 0
        while (j<end)and(pattern[j]==pattern[k]):
            if k!=0:
                re[j]=k
            j+=1
            k+=1
        if (j<end)and(k!=0):
            re[j]=k
    print('next[i]:{}'.format(re))
    return re

cp_pattern=input("Pattern:")    # 模式串
operate_file=open("./test_DataStructure3.txt",mode="w")
# 随机生成串
for item in range(0,233):
    t=random.randint(1,3)
    if t==1:
        operate_file.write('a')
    elif t==2:
        operate_file.write('b')
    else:
        operate_file.write('c')
operate_file.flush()
operate_file.close()
# 读出
operate_file=open("./test_DataStructure3.txt")
list_read=operate_file.readlines()
cp_string=list_read.pop()
operate_file.flush()
operate_file.close()
# process
print("String:",end='')
for item in cp_string:
    print(item,end='')
print()
i=0                            # pointer of string
j=0                            # pointer of pattern
end_string=len(cp_string)-1    # ending index of string
end_pattern=len(cp_pattern)-1  # ending index of pattern
str_next=next_array(cp_pattern)# create next_array
# comparision
while (i<=end_string)and(j<=end_pattern):
    if cp_string[i]==cp_pattern[j]:
        i+=1
        j+=1
    else:
        if j!=0:               # 可回溯
            j=str_next[j]
        else:                  # 不可回溯
            i+=1
if j>end_pattern:
    print('start index:{}'.format(i-end_pattern-1))
else:
    print('Not found')
```

