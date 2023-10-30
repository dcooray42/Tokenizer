# Tokenizer
Tokenizer is a school project that serves as an introduction to the world of blockchain technology. This project involves deploying a token smart contract on a testnet of your choice, aiming to provide a better understanding of the blockchain, contract deployment, and interaction with smart contracts. Tokenizer encourages critical thinking, creativity, and pushing beyond your comfort zone to navigate the complexities of blockchain technology.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Environment Variables](#environment-variables)
- [Folder Structure](#folder-structure)
- [Deployment](#deployment)
- [Account Configuration](#account-configuration)
- [Interacting with the Smart Contract](#interacting-with-the-smart-contract)
- [Smart Contract Information](#smart-contract-information)
- [License](#license)

## Getting Started
To begin, you'll need to set up your environment and interact with the smart contract.

## Prerequisites
An Ethereum wallet (e.g., MetaMask) configured for the testnet.<br>
Some test Ether for gas fees.

## Environment Variables
Create a .env file in the project's root directory and specify the following environment variables:

```plaintext
API_URL = "api_url"
PRIVATE_KEY = "wallet_private_key"
```
`API_URL`: Replace with the API URL for your chosen network (e.g., Infura).<br>
`PRIVATE_KEY`: Replace with the private key of your wallet.

## Folder Structure
`code`: Contains the source code for the smart contract.<br>
`deployment`: Holds deployment scripts and related files.<br>
`documentation`: Any additional documentation or resources for the project.

## Deployment
To deploy the smart contract to your chosen testnet, use the provided deployment script:

```shell
./start.sh
```
The script compiles the contract, deploys it, and prints the address of the deployed smart contract.

## Account Configuration
To perform actions on the smart contract, create an accounts.json file in the project's root directory and structure it as follows:

```json
[
    {
        "Main account": {
            "wallet_address": "wallet_private_key"
        },
        "Second account": {
            "wallet_address": "wallet_private_key"
        }
    }
]
```
Add as many accounts as needed for your testing.

## Interacting with the Smart Contract
To interact with the deployed smart contract, use the provided JavaScript script. The script allows you to perform actions like checking balances, transferring tokens, approving transactions, and more.

Run the interaction script using the following command:

```shell
./interact.sh
```
The script will prompt you to select an action and the corresponding wallet to use for the interaction. Follow the prompts to perform your desired actions.

## Smart Contract Information
The deployed smart contract's address: 0x48135556160d4A40C05DD9985eC4B536AD03aF94

Explore transactions and interactions on the smart contract on Etherscan.

## License
This project is licensed under the MIT License.

## Acknowledgments
Tokenizer was created as part of a school project to explore blockchain technology. We hope this project helps you gain a deeper understanding of blockchain and smart contract deployment.