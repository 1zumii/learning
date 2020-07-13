1. [帮你彻底搞懂JS中的prototype、\_\_proto\_\_与constructor](https://blog.csdn.net/cc18868876837/article/details/81211729)

```javascript
function myInstanceOf(left, right) {
    left = left.__proto__;
    right = right.prototype;
    while (true) {
        if (!left) {
            return false;
        }
        if (left === right) {
            return true;
        }
        left = left.__proto__;
    }
}
```

