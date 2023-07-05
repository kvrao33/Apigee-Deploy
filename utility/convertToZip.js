const fs = require('fs');
const archiver = require('archiver');
const path = require('path');

function convertToZip(folderPath) {
  return new Promise((resolve, reject) => {
    const zipPath = path.join(process.cwd(), 'zippedfile.zip');
    
    const output = fs.createWriteStream(zipPath);
    const archive = archiver('zip', { zlib: { level: 9 } });

    output.on('close', function () {
      resolve(zipPath);
    });

    archive.on('error', function (err) {
      reject(err);
    });

    archive.pipe(output);
    archive.directory(folderPath, false);
    archive.finalize();
  });
}


module.exports = convertToZip;
