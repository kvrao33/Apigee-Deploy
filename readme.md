
# apigee-deploy

Deploy API proxies and shared flows to Apigee X or Apigee hybrid.

## Installation

To use the `apigee-deploy` package as a command-line tool, you need to install it globally. Run the following command to install it:

```shell
npm install -g apigee-deploy
```

This will install the package globally on your system, making it available as a command-line tool.

If you want to use the `apigee-deploy` package as a library in your Node.js code, you can install it locally in your project directory using the following command:

```shell
npm install apigee-deploy
```

Remember to import it appropriately in your code using `require('apigee-deploy')`.

## Usage

### Importing the Package

To use the `apigee-deploy` package in your code, import it as follows:

```javascript
const apigee = require("apigee-deploy");
```

### API Usage

To deploy an API proxy using the `proxyDeploy` function, use the following syntax:

```javascript
apigee.proxyDeploy(path, token, organization, environment, proxy);
```

To deploy a shared flow using the `sharedFlowDeploy` function, use the following syntax:

```javascript
apigee.sharedFlowDeploy(path, token, organization, environment, sharedFlow);
```

Replace the following placeholders with your desired values:

- `path`: The path to the API proxy or shared flow.
- `token`: The access token for Apigee authentication.
- `organization`: The name of the Apigee organization.
- `environment`: The target environment for deploying the API proxy or shared flow.
- `proxy`: The name of the API proxy.
- `sharedFlow`: The name of the shared flow.

### Command Line Usage

You can also use the `apigee-deploy` package from the command line. The command should follow this structure

To deploy a proxy , use the following command structure:
```shell
apigee-deploy [path] -r proxy -t [token] -o [organization] -p [proxy] -e [environment]
```

To deploy a shared flow, use the following command structure:

```shell
apigee-deploy [path] -r sharedflow -t [token] -o [organization] -s [sharedFlow] -e [environment]
```

Replace the placeholders with the respective values:

- `path`: The path to the API proxy or shared flow.
- `resource`: The type of resource to deploy (e.g., "proxy" or "sharedflow").
- `token`: The access token for Apigee authentication.
- `organization`: The name of the Apigee organization.
- `proxy`: The name of the API proxy.
- `sharedFlow`: The name of the shared flow.
- `environment`: The target environment for deploying the API proxy or shared flow.

## Examples

### API Usage Example

```javascript
const apigee = require("apigee-deploy");

apigee.proxyDeploy('/home/user/Downloads/Apigee-CI-CD', 'token', 'apigee-test', 'default-dev', 'Apigee-CI-CD');

apigee.sharedFlowDeploy('/home/user/apigee/sharedFlows/Apigee-CI-CD-flow', 'token', 'apigeeinternaltesting', 'test', 'Apigee-CI-CD-flow');
```
**NOTE: The KVM operations and API product operations are currently under development and not available in the current version of `apigee-deploy`.**

### Command Line Usage Example

```shell
apigee-deploy /home/user/Downloads/Apigee-CI-CD -r proxy -t token -o apigee-test -p Apigee-CI-CD -e default-dev

apigee-deploy /home/user/apigee/sharedFlows/Apigee-CI-CD-flow -r sharedflow -t token -o apigeeinternaltesting -s Apigee-CI-CD-flow -e test
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Issues

If you encounter any issues or have any questions, please create an issue on the [GitHub repository](https://github.com/kvrao33/Apigee-Deploy/issues).

## Author

This package was created by [K.V.Rao](https://www.linkedin.com/in/karthik-v-rao-404760229).
