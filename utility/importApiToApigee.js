const axios = require('axios');
const fs = require('fs');


async function importApiToApigee(filePath, token, organization, proxy) {
  try {
    const zipContent = fs.readFileSync(filePath);
    const apiUrl = `https://apigee.googleapis.com/v1/organizations/${organization}/apis?action=import&name=${proxy}`;
    const authorizationHeader = `Bearer ${token}`;

    const response = await axios.post(apiUrl, zipContent, {
      headers: {
        'Content-Type': 'application/zip',
        Authorization: authorizationHeader,
      },
    });

    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

module.exports=importApiToApigee
