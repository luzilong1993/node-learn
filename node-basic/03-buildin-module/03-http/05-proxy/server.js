const http = require('http');
const { createProxyMiddleware } = require('http-proxy-middleware');

const server = http.createServer((req, res) => {
    let url = req.url;
    if (/\/loupan/.test(url)) {
        const proxy = createProxyMiddleware('/loupan', {
            target: 'https://gz.fang.ke.com',
            changeOrigin: true
        });

        proxy(req, res);
    } else {
        console.log('error');
    }
})

server.listen(8080, () => {
    console.log("localhost:8080");
})