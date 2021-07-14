### 题目

给定一个正整数，返回相应的列标题，如Excel表中所示。

#### Example 1

Input: 28

Output: "AB"

#### Example 2

Input: 29

Output: "AC"

#### 注意事项

1 -> A

2 -> B

3 -> C

 ...

26 -> Z

27 -> AA

28 -> AB

### 解

```python
class Solution:
    """
    @param n: a integer
    @return: return a string
    """
    def convertToTitle(self, n):
        # write your code here
        num_start = ord('A')	# A对应的unicode值
        stack_output=[]			# 倒序输出
        
        while n!=0:
            num_char = n%26
            if num_char == 0:
                stack_output.append('Z')	# 以Z来表示0
                if n != 0:
                    n = n-1
                else:
                    stack_output.append(chr(num_char+num_start-1))
                n = n//26
                
		stack_output.reverse()
        return ''.join(stack_output)
```

26进制，但要避免0出现，在取余时遇到0（即遇到进位）时，高位退1位，使得地位能用未进位时的Z（26）表示