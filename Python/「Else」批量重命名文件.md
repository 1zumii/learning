按照文件的修改时间，重命名文件

```python
import os
import time
import re

dirPath = "D:/ScreenPicture/"
fileList = os.listdir(dirPath)
nameList = []
countRepeat = ord('A')

for f in fileList:
    if os.path.isfile(dirPath + f):  # 是文件
        # 原文件名
        fileName = os.path.basename(dirPath + f)
        catchGroup1 = re.match(r'(.+)\.(\w+)', fileName)
        preName = catchGroup1.group(1)              # 原来的文件名
        fileFormat = catchGroup1.group(2)           # 文件后缀

        # 文件修改时间
        createTime = os.path.getmtime(dirPath + f)  # 返回的是时间戳 - 秒数
        formatTime = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(createTime))
        catchGroup2 = re.match(r'(\d+)-(\d+)-(\d+) (\d+):(\d+):(\d+)', formatTime)
        newName = ''.join(catchGroup2.groups())

        if preName is not newName:
            if newName in nameList:
                newName = newName[:-1] + chr(countRepeat)
                if countRepeat is ord('Z'):
                    countRepeat = ord('A')
                else:
                    countRepeat += 1
            nameList.append(newName)
            os.rename(dirPath + fileName, dirPath + newName + '.' + fileFormat)
```

使用：

- `os.listdir()`：列出目录下所有（list形式）

- `os.path.isfile()`：判断是否为文件
- `re.match()`：正则匹配
- `正则匹配结果.group()`：捕获组
- `os.path.getmtime()`：获取文件修改时间属性（时间戳/秒）
- `time.strftime()`：格式化时间数组（得到格式化后的字符串）
- `chr()`：ASCII码 -> 字符
- `ord()`：字符 -> ASCII码
- `os.rename()`：重命名文件