const fs = require('fs');
const archiver = require('archiver');

function convertToZip(folderPath) {
  return new Promise((resolve, reject) => {
    const zipPath = folderPath + '.zip';

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

// Example usage


module.exports = convertToZip
