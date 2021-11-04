const log4js = require('log4js');
const url = require('url');

log4js.configure({
    appenders: { cheese: { type: "file", filename: "cheese.log" } },
    categories: { default: { appenders: ["cheese"], level: "error" } }
});
const logger = log4js.getLogger("cheese");
logger.level = "debug";

const urlString = 'https://www.baidu.com:443/path/index.html?id=2#tag=3';
const myUrl = new URL(urlString);
logger.debug(myUrl);
logger.debug(myUrl.host);
logger.debug(url.res)

function resolve(from, to) {
    const resolvedUrl = new URL(to, new URL(from, 'resolve://'));
    if (resolvedUrl.protocol === 'resolve:') {
        // `from` is a relative URL.
        const { pathname, search, hash } = resolvedUrl;
        return pathname + search + hash;
    }
    return resolvedUrl.toString();
}

const urlFormat = {
    href: 'https://www.baidu.com/path/index.html?id=2#tag=3',
    origin: 'https://www.baidu.com',
    protocol: 'https:',
    username: '',
    password: '',
    host: 'www.baidu.com',
    hostname: 'www.baidu.com',
    port: '',
    pathname: '/path/index.html',
    search: '?id=2',
    hash: '#tag=3'
}



logger.debug(resolve('/one/two/three', 'four'));
logger.debug(resolve('http://example.com/', '/one'));
logger.debug(resolve('http://example.com/one', '/two'));
logger.debug(resolve('http://www.http.url/a', '../'))
logger.debug(resolve('http://www.http.url/a', 'c'))

logger.debug(url.format(urlFormat))