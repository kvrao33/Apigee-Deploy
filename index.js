const program = require('commander');
const proxyDeploy = require('./main');

program
  .arguments('<path>')
  .requiredOption('-r, --resource <resource>', 'Specify the resource')
  .requiredOption('-t, --token <token>', 'Specify the token')
  .requiredOption('-o, --organization <organization>', 'Specify the organization')
  .requiredOption('-e, --environment <environment>', 'Specify the environment')
  .requiredOption('-p, --proxy <proxy>', 'Specify the proxy name')
  .action((path, options) => {
    const { resource, token, organization, environment, proxy } = options;

    proxyDeploy(path,token, organization, environment, proxy)
  })
  .parse(process.argv);

if (!program.args.length) {
  program.help();
}
