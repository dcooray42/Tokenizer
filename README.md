# Tokenizer

Tokenizer is a 42 school project that serves as an introduction to the world of blockchain technology. This project involves deploying a token smart contract on a testnet of your choice, aiming to provide a better understanding of the blockchain, contract deployment, and interaction with smart contracts. Tokenizer encourages critical thinking, creativity, and pushing beyond your comfort zone to navigate the complexities of blockchain technology.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Project Overview](#project-overview)
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

Before you begin, make sure you have the following:

- A basic understanding of blockchain technology.</br>
- An Ethereum wallet (e.g., MetaMask).</br>
- Some testnet Ether for deploying and interacting with the smart contract.

## Project Overview

Tokenizer is designed to help you gain insights into blockchain technology. The project focuses on the deployment of a token smart contract on a testnet, and its goals include:

- Enhancing your understanding of blockchain concepts.</br>
- Navigating the complexities of blockchain technology.</br>
- Providing a creative and critical learning experience.

## Environment Variables

Create a `.env` file in the `deployment` directory and specify the following environment variables:

```plaintext
API_URL = "api_url"
PRIVATE_KEY = "wallet_private_key"
CONTRACT_ADDRESS = "contract_address"
```

- **`API_URL:`** Replace with the API URL for your chosen network (e.g., Infura).
- **`PRIVATE_KEY:`** Replace with the private key of your wallet.
- **`SMART_CONTRACT_ADDRESS:`** Replace with the token smart contract address once the deployment script has executed once.

## Folder Structure

- **`code:`** Contains the source code for the smart contract.
- **`deployment:`** Holds deployment scripts and related files.
- **`documentation:`** Any additional documentation or resources for the project.

## Deployment

Make sure to be in the `deployment` folder to continue.</br>
To deploy the smart contract to your chosen testnet, use the provided deployment script:

```shell
./start.sh
```

The script compiles the contract, deploys it, and prints the address of the deployed smart contract. Once you have the address of the token smart contract, add it to the `.env` file.

## Account Configuration

To perform actions on the smart contract, create an `accounts.json` file in the `deployment` directory and structure it as follows:

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

Make sure to be in the `deployment` folder to continue.</br>
To interact with the deployed smart contract, use the provided JavaScript script. The script allows you to perform actions like checking balances, transferring tokens, approving transactions, and more.

Run the interaction script using the following command:

```shell
./interact.sh
```

The script will prompt you to select an action and the corresponding wallet to use for the interaction. Follow the prompts to perform your desired actions.

## Smart Contract Information

This smart contract has been deployed on the `Sepolia Testnet`.</br>
The deployed smart contract's address: [0xb1Ae9e6041ED7D074205E25A8c7f1f7C57e93196](https://sepolia.etherscan.io/address/0xb1Ae9e6041ED7D074205E25A8c7f1f7C57e93196)

Explore transactions and interactions on the smart contract on [Etherscan](https://sepolia.etherscan.io/address/0xb1Ae9e6041ED7D074205E25A8c7f1f7C57e93196).

## License

This project is licensed under the [MIT License](https://opensource.org/license/mit/).

## Acknowledgments

Tokenizer was created as part of a school project to explore blockchain technology. We hope this project helps you gain a deeper understanding of blockchain and smart contract deployment.
