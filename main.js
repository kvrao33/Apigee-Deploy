const fs = require('fs');
const convertToZip = require('./utility/convertToZip');
const importApiToApigee = require('./utility/proxy/importApiToApigee');
const deployProxyRev = require('./utility/proxy/deployProxyRev');
const importSharedFlowsToApigee = require('./utility/sharedflow/importSharedFlowsToApigee');
const deploySharedFlowRev = require('./utility/sharedflow/deploySharedFlowRev');

function proxyDeploy(path, token, organization, environment, proxy) {
  // Convert folder to zip
  console.log("Running Proxy Deployment");
  convertToZip(path)
    .then((zipPath) => {
      console.log('Zip created', zipPath);

      // Import API to Apigee
      importApiToApigee(zipPath, token, organization, proxy)
        .then((result) => {
          console.log('API import successful');

          // Deploy Proxy Revision
          deployProxyRev(organization, environment, proxy, result.revision, token)
            .then((data) => {
              console.log('Proxy deployment successful');
            })
            .catch((err) => {
              if(err.response&&err.response.data)
              console.log(`Error in deployProxyRev: ${err.response.data.error.message}`);
            })
            
        })
        .catch((error) => {
          console.error('API import failed:', error);
          if (error.details) {
            console.log('Error details:', error.details);
          }
        }).finally(() => {
          // Delete the zip file
          fs.unlink(zipPath, (err) => {
            if (err) {
              console.error('Error deleting zip file:', err);
            } else {
              console.log('Zip file deleted');
            }
          });
        });;
    })
    .catch((error) => {
      console.error('Error converting folder to zip:', error);
    });
}

function sharedFlowDeploy(path, token, organization, environment, sharedFlow) {
  // Convert folder to zip
  console.log("Running SharedFlow Deployment");
  convertToZip(path)
    .then((zipPath) => {
      console.log('Zip created', zipPath);

      // Import API to Apigee
      importSharedFlowsToApigee(zipPath, token, organization, sharedFlow)
        .then((result) => {
          console.log('API import successful');

          // Deploy Proxy Revision
          deploySharedFlowRev(organization, environment, sharedFlow, result.revision, token)
            .then((data) => {
              console.log('Proxy deployment successful');
            })
            .catch((err) => {
              if(err.response&&err.response.data)
              console.log(`Error in deployProxyRev: ${err.response.data.error.message}`);
            })
            
        })
        .catch((error) => {
          console.error('API import failed:', error);
          if (error.details) {
            console.log('Error details:', error.details);
          }
        }).finally(() => {
          // Delete the zip file
          fs.unlink(zipPath, (err) => {
            if (err) {
              console.error('Error deleting zip file:', err);
            } else {
              console.log('Zip file deleted');
            }
          });
        });;
    })
    .catch((error) => {
      console.error('Error converting folder to zip:', error);
    });
}

module.exports = {
  proxyDeploy,sharedFlowDeploy
};
