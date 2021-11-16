const template = require('art-template');
const path = require('path');
const fs = require('fs');
const { dataArray } = require('../model/list');

const list = (req, res, next) => {
    // console.log(req.parse);
    // let data = "<ul>";
    // for (let i = 0; i < 100; i++) {
    //     data += `<li>line ${i}</li>`
    // }
    // data += "</ul>";

    // let dataObj = {
    //     ret: true,
    //     data:[]
    // }
    // for (let i = 0; i < 100; i++) {
    //     dataObj.data.push(`line ${i}`);
    // }


    // res.set('Content-Type', 'application/json;charset=utf-8')

    // res.render('list',{
    //     data: JSON.stringify(dataArray)
    // })
    // res.render('list-html',{
    //     data: dataArray
    // })
    const pathJoin = path.resolve(__dirname, '../view/list-html.art')

    var html = template(pathJoin, {
        data: dataArray
    });

    fs.writeFileSync(path.join(__dirname, "../public/list.html"), html)

    res.send('ok.')
}

module.exports = {
    list
}