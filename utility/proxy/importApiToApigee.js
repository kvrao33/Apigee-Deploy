const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');
async function importApiToApigee(filePath, token, organization, proxy) {
  try {
    const form = new FormData();
    form.append('file', fs.createReadStream(filePath), {
      contentType: 'application/octet-stream',
    });

    const apiUrl = `https://apigee.googleapis.com/v1/organizations/${organization}/apis?action=import&name=${proxy}`;
    const authorizationHeader = `Bearer ${token}`;

    const response = await axios.post(apiUrl, form, {
      headers: {
        ...form.getHeaders(),
        Authorization: authorizationHeader,
      },
    });

    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw 'Invalid token or incorrect input'
    } else if (error.response && error.response.data) {
      throw error.response.data;
    } else {
      throw error;
    }
  }
}

module.exports = importApiToApigee;
