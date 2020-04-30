- VS Code自带Emmet语法
- 结尾都需要`Tab键`，以生效
- 中间不可用空格分隔

### 快速生成HTML结构

> !

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

### 生成多个相同标签 `*`

> div*3

```html
<body>
    <div></div>
    <div></div>
    <div></div>
</body>
```

### 父子关系标签 `>`

> Row>Col*5

```html
<body>
    <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
    </Row>
</body>
```

### 同层级关系标签 `+`

> Table#a+Table#b

```html
<body>
    <Table id="a"></Table>
    <Table id="b"></Table>
</body>
```

### 自带类名/id `./#`

> div.aaa+span#bbb

```html
<body>
    <div class="aaa"></div>
    <span id="bbb"></span>
</body>
```

### 自增符号 `$`

> CheckboxGroup>Checkbox#check-$*3

```html
<body>
    <CheckboxGroup>
        <Checkbox id="check-1"></Checkbox>
        <Checkbox id="check-2"></Checkbox>
        <Checkbox id="check-3"></Checkbox>
    </CheckboxGroup>
</body>
```

### 标签内部内容 `{}`

> div{abc$}*3

```html
<body>
    <div>abc1</div>
    <div>abc2</div>
    <div>abc3</div>
</body>
```

