const axios = require('axios');
const fs = require('fs');

async function deploySharedFlowRev(organization, environment, proxy, rev, token) {
  const apiUrl = `https://apigee.googleapis.com/v1/organizations/${organization}/environments/${environment}/sharedflows/${proxy}/revisions/${rev}/deployments?override=true`;
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

module.exports = deploySharedFlowRev;
