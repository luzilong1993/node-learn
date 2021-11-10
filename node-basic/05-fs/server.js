const fs = require('fs');
// const fsPromises = require('fs').promises;

/*
关于文件夹的操作
*/
// 创建文件夹
// fs.mkdir('logs',(err) => {
//     if(err) throw err;
//     console.log('文件夹创建成功');
// })

// 重命名文件夹
// fs.rename('./logs','log',() => {
//     console.log('文件夹名字修改成功');
// })


// 删除文件夹
// fs.rmdir('./log',() => {
//     console.log('删除成功');
// })

// 读取文件夹
// fs.readdir('./logs',(err,result) => {
//     console.log(result);
// })


/*
关于文件的操作
*/
// 写入文件
// fs.writeFile('./logs/log1.log','hello1 \n world',(err) => {
//     console.log('写入成功');
// })

// 修改文件
// fs.appendFile('./logs/log1.log','!!!',() => {
//     console.log('追加成功');
// })

// 删除文件
// fs.unlink('./logs/log1.log',() => {
//     console.log('删除成功');
// })

// 读取文件
// fs.readFile('./logs/log1.log','utf-8',(err,content) => {
//     console.log(content);
// })
// fs.readFile('./logs/log1.log',(err,content) => {
//     console.log(content.toString());
// })

// fs.readFile('./logs/log1.log',(err,content) => {
//     console.log(content.toString());
// })
// const content = fs.readFileSync('./logs/log1.log');
// console.log(content.toString());
// console.log('continue...');

// ;(async () => {
//     let data = await fsPromises.readFile('./logs/log1.log');
//     console.log(data.toString());
// })()

// for (let i = 0; i < 10; i++) {
//     fs.writeFile(`./logs/log${i}.log`, `log-${i}`, (err) => {
//         console.log('done..');
//     })
// }

// 目录遍历的方法
// function readDir(dir) {
//     fs.readdir(dir, (err, dirs) => {
//         dirs.forEach((value, index) => {
//             let joinDir = `${dir}/${value}`;
//             fs.stat(joinDir, (err1, stats) => {
//                 if (stats.isDirectory()) {
//                     readDir(joinDir)
//                 } else {
//                     fs.readFile(joinDir, (err, values) => {
//                         console.log(values.toString());
//                     })
//                 }
//             })
//         })
//     })
// }

// readDir('./')


fs.watch('./logs/log0.log',(err) => {
    console.log('文件有变化');
})