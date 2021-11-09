const http = require('http');

const server = http.createServer((req, res) => {
    let url = req.url;
    const myUrl = new URL(url, 'http://localhost:3000');
    switch (myUrl.pathname) {
        case '/api/data':
            res.writeHead(200, {
                "content-type": "application/json",
                "Access-Control-Allow-Origin": "*"
            })
            res.write('{"ret": true,"data": "hello"}');
            break;
        default:
            res.write('404 page not found.')
    }

    res.end()
})

server.listen(8080, () => {
    console.log("localhost:8080");
})