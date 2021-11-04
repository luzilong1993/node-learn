const log4js = require('log4js');
const querystring = require('querystring');

log4js.configure({
    appenders: { cheese: { type: "file", filename: "cheese.log" } },
    categories: { default: { appenders: ["cheese"], level: "error" } }
});
const logger = log4js.getLogger("cheese");
logger.level = "debug";


let qs = 'x=3&y=4';
const params = new URLSearchParams(qs)
logger.debug(querystring.parse(qs))
logger.debug(params)

var qo = {
    x: 3,
    y: 4
}
var parsed = querystring.stringify(qo)
console.log(parsed)
new URLSearchParams(qo);
console.log(new URLSearchParams(qo).toString());

