const http = require('http');
const path = require('path');
const readStaticFile = require('./readStaticFile');

http.createServer(async (req, res) => {
    let urlString = req.url;
    if (urlString !== '/favicon.ico') {
        let filePathName = path.join(__dirname, './public', urlString);
        const { mimeType, data } = await readStaticFile(filePathName);
        res.writeHead(200, {
            'content-type': `${mimeType};charset=utf-8`
        })
        res.end(data)
    }

    res.end();
}).listen(3000, () => {
    console.log('运行成功');
})