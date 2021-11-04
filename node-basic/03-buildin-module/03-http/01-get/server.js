const http = require('http');
const https = require('https');
const querystring = require('querystring');

const server = http.createServer((request, response) => {


    https.get('https://www.xiaomiyoupin.com/mtop/mf/resource/data/list', (result) => {
        let data = ''
        result.on('data', (chunk) => {
            data += chunk
        })
        result.on('end', () => {
            response.writeHead(200, {
                'content-type': 'application/json;charest=utf-8'
            })

            const string = new URLSearchParams(data);
            console.log(string);
            response.end(data);
            // response.end(JSON.stringify({
            //     "username": string.get('username'),
            //     "password": string.get('password')
            // }));
        })
    })




    // let data = ''
    // request.on('data', (chunk) => {
    //     data += chunk;
    // })
    // request.on('end', () => {
    //     response.writeHead(200, {
    //         'content-type': 'application/json;charest=utf-8'
    //     })
    //     // console.log(data);
    //     const string = new URLSearchParams(data);
    //     // response.end(JSON.stringify(querystring.parse(data)));
    //     response.end(JSON.stringify({
    //         "username": string.get('username'),
    //         "password": string.get('password')
    //     }));//username=tongyi&password=123  urlencoded
    // })
    // response.write('<div>hello</div>');
    // response.write('{"x":"x"}')
})


server.listen(8080, () => {
    console.log('端口启动');
})