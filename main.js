
const fs = require('fs');
const convertToZip = require('./utility/convertToZip');
const importApiToApigee = require('./utility/importApiToApigee');
const deployProxyRev = require('./utility/deployeProxyRev');

function proxyDeploy(path,token, organization, environment, proxy ){
    // Convert folder to zip
    convertToZip(path)
      .then((zipPath) => {
        console.log('Zip created');

        // Import API to Apigee
        importApiToApigee(zipPath, token, organization, proxy)
          .then((result) => {
            console.log('API import successful:');

            // Deploy Proxy Revision
            deployProxyRev(organization, environment, proxy, result.revision, token)
              .then((data) => {
                console.log('Proxy deployment successful:',data);
              })
              .catch((err) => {
                console.log(`Error in deployProxyRev: ${err}`);
              })
              .finally(() => {
                // Delete the zip file
                fs.unlink(zipPath, (err) => {
                  if (err) {
                    console.error('Error deleting zip file:', err);
                  } else {
                    console.log('Zip file deleted:');
                  }
                });
              });
          })
          .catch((error) => {
            console.error('API import failed:', error);
            if (error.details) {
              console.log('Error details:', error.details);
            }
          });
      })
      .catch((error) => {
        console.error('Error converting folder to zip:', error);
      });
}

module.exports = {
    proxyDeploy
  };