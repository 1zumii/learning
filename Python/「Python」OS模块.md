[Python OS 文件/目录方法](https://www.runoob.com/python/os-file-methods.html)

### 1.[os.rename()](https://www.runoob.com/python/os-rename.html) 

os.rename() 方法用于命名文件或目录，从 src 到 dst,如果dst是一个存在的目录, 将抛出`OSError`。

```python
os.rename(src, dst)
```

#### 参数

- `src` - 要修改的目录名
- `dst` - 修改后的目录名

#### 返回值

- *无返回值*

### 2.[os.listdir()](https://www.runoob.com/python/os-listdir.html)

1. os.listdir() 方法用于返回指定的文件夹包含的文件或文件夹的名字的列表。
2. 它不包括 **.** 和 **..** 即使它在文件夹中。

```python
os.listdir(path)
```

#### 参数

- `path` - 需要列出的目录路径

#### 返回值

- 返回指定路径下的文件和文件夹`列表`

### 3.[os.path.getmtime()](https://docs.python.org/zh-cn/3/library/os.path.html#os.path.getmtime)

1. [os.path](https://www.runoob.com/python/python-os-path.html)模块主要用于获取文件的属性。
2. os.path.getmtime() 用于获取文件最后修改时间

#### 参数

- `path` - 文件路径/[类路径对象](https://docs.python.org/zh-cn/3/glossary.html#term-path-like-object)

#### 返回值

- `时间戳` - 返回 path 的最后修改时间。
  - 返回值是一个浮点数，单位：秒。
  - 如果该文件不存在或不可访问，则抛出`OSError`异常。

