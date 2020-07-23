| 运算符 | 逻辑表达式 | 描述                                                         |
| ------ | ---------- | ------------------------------------------------------------ |
| `and`  | `x and y`  | 如果 x 为 False，x and y 返回 False，否则它返回 y 的计算值。 |
| `or`   | `x or y`   | 如果 x 是 True，它返回 x 的值，否则它返回 y 的计算值。       |
| `not`  | `not x`    | 如果 x 为 True，返回 False 。如果 x 为 False，它返回 True。  |

以下假设变量 a 为 10, b为 20:

```python
>>> a and b
20
>>> a or b
10
>>> not (a and b)
False
```