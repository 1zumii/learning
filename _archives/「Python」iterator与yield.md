1. [迭代器 - 廖雪峰](https://www.liaoxuefeng.com/wiki/1016959663602400/1017323698112640)
2. [yield - 廖雪峰](https://www.liaoxuefeng.com/article/895920356978720)

### 可迭代对象 Iterable

- 可以**直接作用于** for 循环的对象统称为可迭代对象
- 集合数据类型：list，tuple，dict，set，str

- 生成器：generator，或是带`yield`的generator function

  *一边循环一边计算的机制*

### 迭代器 Iterator

- 可以被`next()`函数调用并不断返回下一个数据
- 直到没有数据时抛出`StopIteration`错误
- Python的`for`循环本质上就是通过不断调用`next()`函数实现的

### yield

```python
# 斐波那契数列
def fab(max):
    n, a, b = 0, 0, 1
    while n < max:
        yield b
        a, b = b, a + b
        n = n + 1
```

- yield 的作用就是把一个函数变成一个 generator
- 调用 fab(5) 不会执行 fab 函数，而是返回一个`iterable对象`

```bash
>>> f = fab(3) 
>>> f.__next__() 
1 
>>> f.__next__() 
1 
>>> f.__next__() 
2 
>>> f.__next__() 
Traceback (most recent call last): 
 File "<stdin>", line 1, in <module> 
StopIteration
```

- 生成一个 generator 看起来像函数调用，但不会执行任何函数代码 <i style="color:grey">代码段2行1</i>

- 直到对其调用`__next__()`才开始执行 <i style="color:grey">代码段2行2</i>

- 每执行到一个`yield`语句就会**中断**，并返回一个迭代值，下次执行时从`yield`的<u>下一个语句</u>继续执行 <i style="color:grey">代码段1行5</i>