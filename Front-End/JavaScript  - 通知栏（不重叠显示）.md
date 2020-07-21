```html
<head>
    <meta charset="UTF-8">
    <title>check</title>
    <style>
        body {
            background-color: #F7F8FA;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }

        .aaa {
            width: 150px;
            height: 75px;
            border-radius: 10px;
            background-color: deepskyblue;
            color: white;
            font-size: x-large;
            font-family: Helvetica;
            font-weight: 600;
            text-align: center;
            line-height: 75px;
        }
    </style>
</head>

<body>
    <div class="aaa" id="x">NOTIFY</div>
</body>
```

```javascript
const duration = 3;
let lastPromise = Promise.resolve('first');

function doSomething(info) {
    console.log(info)
}

function notify(params) {
    // console.log(lastPromise)
    lastPromise = lastPromise.then(value => {
        return new Promise((resolve, reject) => {
            doSomething(params)
            setTimeout(() => {
                const date = new Date()
                // resolve(`${date.getMinutes()}:${date.getSeconds()}`)
                resolve()
            }, duration * 1000)
        })
    })
}

const e = document.getElementById("x")
e.onclick = event => { notify(new Date().toLocaleTimeString()) }
```

- 每个消息通知都会展示一定时间
- 每一次调用时，如果当前已有通知栏在展示，或在等待，则会在所有前面的消息通知展示以后，再展示