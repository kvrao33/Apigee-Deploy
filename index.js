const program = require('commander');
const { proxyDeploy } = require('./main');

program
  .arguments('<path>')
  .requiredOption('-r, --resource <resource>', 'Specify the resource')
  .option('-t, --token <token>', 'Specify the token')
  .option('-o, --organization <organization>', 'Specify the organization')
  .option('-e, --environment <environment>', 'Specify the environment')
  .option('-p, --proxy <proxy>', 'Specify the proxy name')
  .action((path, options) => {
    const { resource, token, organization, environment, proxy } = options;

    if (resource === 'proxy' && (!token || !organization || !environment || !proxy)) {
      console.error('Missing required options for proxy resource.');
      program.help();
      return;
    }

    proxyDeploy(path, token, organization, environment, proxy);
  })
  .parse(process.argv);

if (!program.resource || !program.args.length) {
  program.help();
}
