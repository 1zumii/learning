## 圣杯布局

```html
<body>
    <div id="header">圣杯布局</div>
    <div id="container">
        <div class="column center"></div>
        <div class="column left"></div>
        <div class="column right"></div>
    </div>
    <div id="footer"></div>
</body>
```

```css
body {
    margin: 0;
}

#header,#footer {
    width: 100%;
    height: 100px;
    background-color: dimgray;
}

#header {
    text-align: center;
    color: white;
    line-height: 100px;
}

#container {
    background-color: greenyellow;
    height: 500px;
    padding-left: 200px;
    padding-right: 300px;
}

.column {
    float: left;
    height: 500px;
}

.center {
    background-color: indianred;
    width: 100%;
}

.left {
    background-color: aquamarine;
    width: 200px;
    margin-left: calc(-100% - 200px);
}

.right {
    background-color: deepskyblue;
    width: 300px;
    margin-right: -300px;
}

#footer {
    clear: both;
}
```

