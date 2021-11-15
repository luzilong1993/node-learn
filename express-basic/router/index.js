const express = require('express');
const { list } = require('../controller')
// 路由中间件
const router = express.Router();

router.get('/', list)

// 获取数据
router.get('/index', (req, res) => {
    const query = req.query;
    console.log(query);
    res.send(query)
})

// 添加数据
router.post('/index', (req, res) => {
    const data = req.body;
    console.log(data);
    res.send(data);
})

// 修改数据->覆盖式修改
router.put('/index', (req, res, next) => {
    const data = req.body;
    console.log(data);
    res.send('put response')
})

// 修改数据->增量修改
router.patch('/index', (req, res, next) => {
    const data = req.body;
    console.log(data);
    res.send('patch response')
})

// 删除数据
router.delete('/index', (req, res, next) => {
    const data = req.body;
    console.log(data);
    res.send('delete response')
})

module.exports = router
