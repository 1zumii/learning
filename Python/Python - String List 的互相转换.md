#### 1.字符串转列表

```python
str1 = "hi hello world"
print(str1.split(" "))
```

输出：

```python
['hi', 'hello', 'world']
```

#### 2.列表转字符串

```python
list = ["hi","hello","world"]
print(" ".join(list))
```

输出：

```python
hi hello world
```

**注意**：若 list 包含数字，不能直接转化成字符串
会报错`TypeError: sequence item 0: expected str instance, int found`
因而，应先将所有 item 转化为 str 