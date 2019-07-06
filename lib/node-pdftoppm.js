const spawn = require('cross-spawn');
const path = require('path');
const _ = require('lodash');



module.exports = function (input, outputDir, output, fileType, cb) {
    if (!cb && typeof fileType === 'function') {
        cb = fileType;
        fileType = undefined;
    }
    var option = [];
    if (fileType && fileType.toLowerCase() == 'png') {
        option = [input, '-png','-singlefile', path.join(outputDir, output)];
    } else {
        option = [input, path.join(outputDir, output)];
    }
    const pdf2ppm = spawn('pdftoppm', option, { stdio: 'inherit' });

    pdf2ppm.on('close', () => {
        // console.log('callback');

        // need to get split destination directory and output name

        // console.log('file', { output, outputDir });

        const listFiles = spawn('find', [outputDir, '-maxdepth', '1', '-name', '[' + output + ']*']);

        let fileList = [];

        listFiles.stdout.setEncoding('utf8');
        listFiles.stdout && listFiles.stdout.on('data', (data) => {
            fileList = fileList.concat(data.split('\n'));
        });
        listFiles.on('close', () => {
            fileList = _.filter(fileList, file => file.indexOf(output) !== -1);
            fileList = _.map(fileList, file => {

                const item = {};
                item.name = path.parse(file).name + path.parse(file).ext;
                item.path = file;
                return item;
            });

            cb(null, fileList); //cb array of files. 
        });
    });
    pdf2ppm.on('error', (e) => {
        cb(e);
    });
};
