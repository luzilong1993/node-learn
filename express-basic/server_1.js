const express = require('express');

const app = express();

const middlewares = [
    (req, res, next) => {
        console.log(0);
        next()
        // res.send('hello')
    }, (req, res, next) => {
        console.log(1);
        next()
    }, (req, res,next) => {
        console.log(2);
        next()
    }
]

// use匹配是从上往下匹配，如果上面匹配，下面则不用匹配

// 回调函数被称为中间件，中间件可以挂载多个
// 中间件栈可以用数组去封装一下
app.use('/', middlewares)

app.use('/api', (req, res) => {
    res.send('world')
})

app.listen(3000, () => {
    console.log('express执行');
})