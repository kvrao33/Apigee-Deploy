const program = require('commander');
const convertToZip = require('./utility/convertToZip');


program
  .arguments('<path>')
  .requiredOption('-r, --resource <resource>', 'Specify the resource')
  .requiredOption('-t, --token <token>', 'Specify the token')
  .requiredOption('-o, --organization <organization>', 'Specify the organization')
  .requiredOption('-e, --environment <environment>', 'Specify the environment')
  .requiredOption('-p, --proxy <proxy>', 'Specify the proxy name')
  .action((path, options) => {
    const { resource, token, organization, environment, proxy } = options;
    // console.log(`Deployment complete! Path: ${path}, Resource: ${resource}, Token: ${token}, Organization: ${organization}, Environment: ${environment}, Proxy: ${proxy}`);
    convertToZip(path)
    .then((zipPath) => {
      console.log('Folder converted to zip:', zipPath);
    })
    .catch((error) => {
      console.error('Error converting folder to zip:', error);
    }); 
})
  .parse(process.argv);

if (!program.args.length) {
  program.help();
}

