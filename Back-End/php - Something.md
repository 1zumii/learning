#### 1.类型约束

- [php类型约束 - segmentfaul](https://segmentfault.com/a/1190000007226476)
- [类型约束 - php](https://www.php.net/manual/zh/language.oop5.typehinting.php)
- 函数调用的参数与定义的参数类型不一致时，会抛出一个可捕获的错误。

#### 2.匿名函数(闭包)

- [关于php匿名函数中的use](https://blog.csdn.net/qmhball/article/details/53668113)

#### 3.[使用JSON](http://www.ruanyifeng.com/blog/2011/01/json_in_php.html)

- `json_encode( )`
- `json_decode( )`
- 只要 encode 一次，嵌套里的关联数组也会被转换成 json 

#### 4.[static](http://www.nowamagic.net/librarys/posts/php/21)

- 表示类的当前实例：`$this`

- 表示类本身：`self::` 

- php6 static::

- **Fatal error**: 

  > Using $this when not in object context
  >
  > 在PHP5中，static 声明的静态方法里不可以使用 $this 需要使用 self 来引用当前类中的方法或是变量。

#### 5.[返回类型声明](http://www.runoob.com/php/php-scalar-return-type.html)

- PHP 7 新特性
- `function returnIntValue(int $value): int`

#### 6.[max_execution_time](https://www.php.net/manual/zh/info.configuration.php#ini.max-execution-time)

- FatalErrorException:

  ```php
  Maximum execution time of 60 seconds exceeded
  ```

- 受限于**php.ini**里的`max_execution_time`

- [set_time_limit()](https://www.php.net/manual/zh/function.set-time-limit.php)

- 最大执行时间 ＝ 

  ```php
  php.ini: max_execution_time 数值 
  
  - 当前脚本已经执行的时间 
  
  + set_time_limit()设定值
  ```
  
- [PHP 大文件上传问题 - 知乎](https://www.zhihu.com/question/19602751/answer/81023132)

- [PHP 超时处理全面总结 - segmentfault](https://segmentfault.com/a/1190000000313184#articleHeader7)
#### 7.[Filter 函数](https://www.w3school.com.cn/php/php_ref_filter.asp)

- [FILTER_VALIDATE_IP](https://www.w3school.com.cn/php/filter_validate_ip.asp): 过滤器把值作为 IP 进行验证

#### 8.等性运算符

- 比较运算符

  - x == y：只判断值
  - x === y：判断值和类型是否相等

- 数组运算符

  - x == y：只判断具有相同的键/值对
  - x === y：判断具有相同的键/值对，且顺序相同类型是否相同

#### 9.[strpos函数](https://www.w3school.com.cn/php/func_string_strpos.asp)

- `strpos(string,find,start)`
- **string**：被搜索的字符串
- **find**：要查找的字符串
- 如果存在，返回**index**；[若不存在](https://blog.csdn.net/shadow_zed/article/details/80134385)，返回的是`false`（使用===）
- **注意**：如果返回的**index**为0，在**if**判断中 0 被视作`false`

