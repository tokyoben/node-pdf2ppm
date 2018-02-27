# node-pdf2ppm

a simple node wrapper for pdftoppm package. 

## Quick Start

> npm install --save node-pdftoppm

```
const pdf2ppm = require('node-pdftoppm');
const path = require('path');

const filePath = path.join(__dirname, './sample/test.pdf');
pdf2ppm(filePath, './', 'hello', (error, data) => {
    if (error) {
        console.error('error', error);
    } else {
        console.log('result', data);
    }
});


```