const axios = require('axios');
const fs = require('fs');

async function deployProxyRev(organization, environment, proxy, rev, token) {
  const apiUrl = `https://apigee.googleapis.com/v1/organizations/${organization}/environments/${environment}/apis/${proxy}/revisions/${rev}/deployments?override=true`;

  try {
    const response = await axios.post(apiUrl, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    
    throw error;
  }
}

module.exports = deployProxyRev;
