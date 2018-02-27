const pdf2ppm = require('./lib/node-pdftoppm');
/* 
const path = require('path');


const filePath = path.join(__dirname, './sample/test.pdf');
pdf2ppm(filePath, './', 'hello', (error, data) => {
    if (error) {
        console.error('error', error);
    }
    console.log('result', data);
});

 */
module.exports = pdf2ppm;