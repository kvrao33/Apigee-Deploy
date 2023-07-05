
# apigee-deploy

Deploy API proxies to Apigee Edge.

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

Replace the following placeholders with your desired values:

- `path`: The path to the API proxy.
- `token`: The access token for Apigee authentication.
- `organization`: The name of the Apigee organization.
- `environment`: The target environment for deploying the API proxy.
- `proxy`: The name of the API proxy.

### Command Line Usage

You can also use the `apigee-deploy` package from the command line. The command should follow this structure:

```shell
apigee-deploy [path] -r [resource] -t [token] -o [organization] -p [proxy] -e [environment]
```

Replace the placeholders with the respective values:

- `path`: The path to the API proxy.
- `resource`: The type of resource to deploy (e.g., "proxy").
- `token`: The access token for Apigee authentication.
- `organization`: The name of the Apigee organization.
- `proxy`: The name of the API proxy.
- `environment`: The target environment for deploying the API proxy.

## Examples

### API Usage Example

```javascript
const apigee = require("apigee-deploy");

apigee.proxyDeploy('/home/user/Downloads/Apigee-CI-CD', 'token', 'apigee-test', 'default-dev', 'Apigee-CI-CD');
```

### Command Line Usage Example

```shell
apigee-deploy /home/user/Downloads/Apigee-CI-CD -r proxy -t token -o apigee-test -p Apigee-CI-CD -e default-dev
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Issues

If you encounter any issues or have any questions, please create an issue on the [GitHub repository](https://github.com/kvrao33/Apigee-Deploy/issues).

## Author

This package was created by [K.V.Rao](https://github.com/author-name).
