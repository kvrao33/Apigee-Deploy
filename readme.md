
# Apigee Deployment Utility

The Apigee Deployment Utility is a script that automates the deployment process for Apigee proxies. It allows you to convert a folder to a zip file, import the API to Apigee, and deploy the proxy revision. This utility simplifies the deployment workflow and helps streamline the deployment process.

## Prerequisites

Before using this utility, make sure you have the following prerequisites:

- Node.js (version X.X.X or higher)
- NPM (Node Package Manager)

## Installation

Follow the steps below to install and set up the utility:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/apigee-deployment-utility.git

2. Navigate to the project directory:

   ```bash
   cd apigee-deployment-utility
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

To use the utility, follow these steps:

1. Provide the necessary command-line arguments:

   ```bash
   node utility/importApiToApigee.js <path> -r <resource> -t <token> -o <organization> -e <environment> -p <proxy>
   ```

   - `<path>`: The path to the folder containing the API files.
   - `<resource>`: Specify the resource.
   - `<token>`: Specify the token.
   - `<organization>`: Specify the organization.
   - `<environment>`: Specify the environment.
   - `<proxy>`: Specify the proxy name.

2. The utility will convert the folder to a zip file, import the API to Apigee, and deploy the proxy revision.

3. The utility will provide output messages indicating the status of each step and any errors encountered.

## License

This project is licensed under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## Acknowledgements

This utility is built using the following libraries:

- [Axios](https://github.com/axios/axios)
- [Archiver](https://github.com/archiverjs/node-archiver)

## Contact

For any inquiries or feedback, please contact [your-name](mailto:your-email@example.com).
```

Copy the above content and save it in a file named `README.md` in your project repository. Feel free to modify the content of the README file based on your specific project details and requirements.