const path = require('path');
const mime = require('mime');
const fs = require('fs');

function myReadFile(file) {

    return new Promise((resolve, reject) => {
        fs.readFile(file,(err, data) => {
            if (err) {
                resolve('你访问的是一个文件夹，且文件夹里没有');
            } else {
                resolve(data);
            }
        })
    })
}

async function readStaticFile(filePathName) {
    const ext = path.parse(filePathName).ext;
    const mimeType = mime.getType(ext) || 'text/html';
    let data;
    //判断文件是否存在
    if (fs.existsSync(filePathName)) {
        if (ext) {
            data = await myReadFile(filePathName)
        } else {
            data = await myReadFile(path.join(filePathName, '/index.html'))
        }
    } else {
        data = '文件或者文件夹没有发现';
    }
    return {
        mimeType,
        data
    }
}

module.exports = readStaticFile;