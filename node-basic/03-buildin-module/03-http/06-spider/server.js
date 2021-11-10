const http = require('http');
const https = require('https');
const cheerio = require('cheerio');


function filterData(data) {
    const $ = cheerio.load(data);
    $('.section-item-box').each((index,el) => {
        console.log($(el).text());
    })
    // console.log(data);
}
const server = http.createServer((req, res) => {
    let data = '';
    https.get('https://www.meizu.com', (result) => {
        result.on('data', (chunk) => {
            data += chunk
        })

        result.on('end', () => {
            filterData(data)
        })
    })
})

server.listen(9000, () => {
    console.log('爬虫运行中');
})