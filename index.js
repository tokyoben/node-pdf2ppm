const pdf2ppm = require('./lib/node-pdftoppm');

const path = require('path');


const filePath = path.join(__dirname, './sample/test.pdf');
const destinationFolder = path.join(__dirname, './');
pdf2ppm(filePath, destinationFolder, 'hello', 'png', (error, data) => {
    if (error) {
        console.error('error', error);
    }
    console.log('result', data);
});


module.exports = pdf2ppm;