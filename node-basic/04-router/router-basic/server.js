const http = require('http');
const fs = require('fs');
const mime = require('mime');

const server = http.createServer((req, res) => {
    const urlString = req.url;
    const type = mime.getType(urlString.split('.')[1]);
    console.log(type);
    // switch (urlString) {
    //     case '/':
    //         res.end('hello');
    //         break;
    //     case '/home':
    //         fs.readFile('./home.html', (err, content) => {
    //             res.end(content);
    //         });
    //         break;
    //     case '/app.js':
    //         fs.readFile('./app.js', (err, content) => {
    //             res.end(content);
    //         });
    //         break;
    //     case '/abc.jpg':
    //         fs.readFile('./abc.jpg', (err, content) => {
    //             res.end(content);
    //         });
    //         break;
    //     default:
    //         res.end('page 404.')
    // }
    res.writeHead(200, {
        'content-type': type
    })
    const file = fs.readFileSync(`./${urlString}`);
    res.end(file)
})

server.listen(3000, () => {
    console.log('启动成功');
})