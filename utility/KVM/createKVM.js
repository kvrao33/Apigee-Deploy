const axios = require('axios');
async function createKVM(kvmDetails){
    const {organization,environment,proxy,mapIdentifier,token,Scope}=kvmDetails;
    // const apiUrl = `https://apigee.googleapis.com/v1/organizations/${organization}/environments/${environment}/apis/${proxy}/revisions/${rev}/deployments?override=true`;
    const envApiUrl = `https://apigee.googleapis.com/v1/organizations/${organization}/environments/${environment}/keyvaluemaps`;
    const orgApiUrl = `https://apigee.googleapis.com/v1/organizations/${organization}/keyvaluemaps`;
 
    let url="";
    if(Scope.toLocaleLowerCase()==="environment"){
        url=envApiUrl
    }else if(Scope.toLocaleLowerCase()==="organization"){
        url=orgApiUrl
    }else{
        throw "Invalid Scope";
    }
    const body={
        "name": mapIdentifier ,
        "encrypted": true
    }
    const headers={
        Authorization: `Bearer ${token}`,
    }
    try {
    const response = await axios.post(url, body , {
        headers
    });
    return response.data;
  } catch (error) {
    if(error.response?.status===409){
        return error.response.data
    }else if(error.response?.status===401){
        throw "invalid authentication credentials please give correct token";
    }
    throw error.response.data.message;
  }
}


module.exports=createKVM;