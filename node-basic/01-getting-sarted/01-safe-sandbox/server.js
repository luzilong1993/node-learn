const https = require('https');

https.get('https://www.fastmock.site/mock/6769202015ae511049c862c80a9d80fe/test/test', (res) => {
    console.log(res);
    let str = '';
    res.on('data',(chunk) => {
        str+=chunk
    })
    res.on('end',() => {
        console.log(str);
    })
})