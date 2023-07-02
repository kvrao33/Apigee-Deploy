const fs = require('fs');
const archiver = require('archiver');
const path = require('path');

function convertToZip(folderPath) {
  return new Promise((resolve, reject) => {
    const zipPath = path.join(__dirname, '..', 'zippedfile.zip');

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
  })
  .then((zipPath) => {
    return zipPath;
  })
  .catch((error) => {
    throw error;
  });
}

module.exports = convertToZip;
