#! /usr/bin/env node
const { program } = require('commander');
const {proxyDeploy, sharedFlowDeploy}=require('./main');

program
  .arguments('<path>')
  .option('-r, --resource <resource>', 'Specify the resource')
  .option('-t, --token <token>', 'Specify the token')
  .option('-o, --organization <organization>', 'Specify the organization')
  .option('-e, --environment <environment>', 'Specify the environment')
  .option('-p, --proxy <proxy>', 'Specify the proxy name')
  .option('-s, --sharedFlow <sharedFlow>', 'Specify the shared flow name')
  .parse(process.argv);

const path = program.args[0];
const { resource, token, organization, proxy, environment, sharedFlow } = program.opts();

if (!path || !resource || !token || !organization || !environment) {
  console.error('Missing required arguments.');
  if(!resource){
    console.log("Resource -r not found");
  }else if(!path){
    console.log("Path -p not found");
  }else if(!token){
    console.log("Token -t not found");
  }else if(!organization){
    console.log("Organization -o not found");
  }else if(!environment){
    console.log("Environment -e not found");
  }
  console.log('Usage: apigee-deploy <path> -r <resource> -t <token> -o <organization> -e <environment> [-p <proxy>] [-s <sharedFlow>]');
  process.exit(1);
}

if (resource.toLocaleLowerCase() === 'proxy' && !proxy) {
  console.error('Missing required argument: -p <proxy>');
  process.exit(1);
}

if (resource.toLocaleLowerCase() === 'sharedflow' && !sharedFlow) {
  console.error('Missing required argument: -s <sharedFlow>');
  process.exit(1);
}

if (proxy) {
  proxyDeploy(path, token, organization, environment, proxy);
}

if (sharedFlow) {
  sharedFlowDeploy(path, token, organization, environment,sharedFlow )
  console.log('sharedFlow:', sharedFlow);
}
