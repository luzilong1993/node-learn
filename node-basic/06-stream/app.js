// 流的操作
const fs = require('fs');
const zlib = require('zlib');

const gzip = zlib.createGzip();

const readStream = fs.createReadStream('./logs.txt');
const writeStream = fs.createWriteStream('./logs2.gzip');


readStream.pipe(gzip).pipe(writeStream);

// writeStream.write(readStream);