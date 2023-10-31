# Tokenizer whitepaper

**Author:** Dimitri Cooray

**Date:** 31 october 2023

**Organization:** 42 Paris School

**Contact:** [dcooray@student.42.fr](dcooray@student.42.fr)

## Table of Contents

- [Introduction](#introduction)
  - [The Challenge](#the-challenge)
  - [The Solution: 42DCO Token](#the-solution-42dco-token)
  - [Key Features](#key-features)
- [Project Overview](#project-overview)
  - [Enhancing Your Understanding of Blockchain Concepts](#enhancing-your-understanding-of-blockchain-concepts)
  - [Navigating the Complexities of Blockchain Technology](#navigating-the-complexities-of-blockchain-technology)
  - [Providing a Creative and Critical Learning Experience](#providing-a-creative-and-critical-learning-experience)
- [Smart Contract Architecture](#smart-contract-architecture)
  - [42DCO Token - An ERC-20 Implementation](#42dco-token---an-erc-20-implementation)
  - [Main Functions and Methods](#main-functions-and-methods)
  - [OpenZeppelin's ERC-20 Implementation](#openzeppelins-erc-20-implementation)
  - [Token Distribution](#token-distribution)
  - [Initial Token Supply](#initial-token-supply)
  - [Distribution Strategy](#distribution-strategy)
  - [Token Sales](#token-sales)
  - [Liquidity and Market Availability](#liquidity-and-market-availability)
  - [Smart Contract Information](#smart-contract-information)
- [Deployment](#deployment)
  - [Deployment Prerequisites](#deployment-prerequisites)
  - [Deployment Steps](#deployment-steps)
  - [Custom Configuration](#custom-configuration)
- [Interacting with the 42DCO Token](#interacting-with-the-42dco-token)
  - [Interact Prerequisites](#interact-prerequisites)
  - [Using the interact.sh Script](#using-the-interactsh-script)
  - [Using the interact.js Script](#using-the-interactjs-script)
  - [Running the interact.js Script](#running-the-interactjs-script)
- [Conclusion](#conclusion)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Blockchain technology has been revolutionizing the digital world, offering unprecedented security, transparency, and decentralization. As we delve into this remarkable era of innovation, it becomes essential to comprehend the fundamentals of blockchain, smart contracts, and their practical applications.

`Tokenizer` is a project designed to help individuals gain a better understanding of the blockchain and its functionalities. We aim to demystify the complexities of this groundbreaking technology, guiding users through the process of deploying a smart contract on their preferred network and enabling them to interact with it effectively.

### The Challenge

In the realm of education, particularly within the 42 school community, an age-old problem persists — the outdated currency system. This currency is primarily used for a variety of purposes, including accessing the school's amphitheater, obtaining exclusive school merchandise, customize its title on the intra, change the hall voice when entering the school, and so on. However, acquiring these tokens has proven to be an arduous task, as it often requires achieving specific, hard-to-attain milestones.

### The Solution: 42DCO Token

The 42DCO token, implemented as a smart contract, offers a solution to replace this legacy currency system and become the cornerstone for future developers looking to streamline the exchange of currency within the school community. This token simplifies the process, offering a more accessible method for users to earn and utilize tokens. For example, earning tokens could be tied to completing projects, attending events, or fulfilling the common core requirements — all in a transparent and decentralized manner.

### Key Features

This project primarily revolves around the reimplementation of the ERC20 token standard, utilizing OpenZeppelin for secure, standardized, and efficient smart contract development. The 42DCO token incorporates six main functions/methods: totalSupply, balanceOf, allowance, transfer, approve, and transferFrom. These functionalities form the backbone of the token, enabling straightforward management of token balances, transactions, and approvals.

In the subsequent sections of this whitepaper, we will delve into the core details of the 42DCO token, including its architecture, deployment process, and interactions. Our goal is to empower users to navigate the blockchain world with confidence, equipping them with the knowledge and skills necessary to work with smart contracts on various networks.

## Project Overview

`Tokenizer` is a groundbreaking educational initiative that aims to empower individuals with a profound understanding of blockchain technology. The project is centered around the deployment of a token smart contract on a testnet, offering a practical and hands-on experience for users. The primary objectives of `Tokenizer` are:

### Enhancing Your Understanding of Blockchain Concepts

Blockchain technology has gained significant prominence due to its transformative potential across various industries. However, its underlying principles and mechanisms can be complex and daunting. `Tokenizer` simplifies these concepts, breaking them down into digestible components. We provide educational materials and hands-on experience to demystify blockchain, making it accessible to individuals of all backgrounds.

### Navigating the Complexities of Blockchain Technology

Navigating the intricacies of blockchain requires practical experience. `Tokenizer` offers a hands-on approach, allowing users to deploy and interact with a token smart contract on a testnet. Through guided exercises, you will explore key blockchain features, including decentralized ledgers, consensus mechanisms, and cryptographic security. This immersive experience enables you to grasp the inner workings of blockchain networks.

### Providing a Creative and Critical Learning Experience

`Tokenizer` promotes creative and critical thinking. As users deploy and interact with the token smart contract, they are encouraged to explore real-world scenarios and use cases for blockchain technology. By applying blockchain concepts to practical situations, individuals gain a deeper understanding of its potential impact on industries like finance, supply chain, and healthcare.

Whether you're a novice seeking a fundamental understanding of blockchain or an experienced developer looking to hone your skills, `Tokenizer` is designed to cater to a wide range of learners. Our comprehensive resources, practical tutorials, and real-world deployments are tailored to facilitate a dynamic learning journey.

By embarking on the `Tokenizer` experience, you will be equipped with the knowledge and skills to navigate the blockchain landscape confidently and contribute to the ongoing blockchain revolution.

## Smart Contract Architecture

The Tokenizer project relies on a robust and secure smart contract architecture to provide users with a decentralized and efficient solution. The project's main component is the 42DCO Token smart contract, based on the Ethereum network's ERC-20 standard.

### 42DCO Token - An ERC-20 Implementation

The 42DCO Token is an ERC-20 compliant token, a well-established standard for fungible tokens on the Ethereum blockchain. ERC-20 tokens have become the foundation for numerous decentralized applications and platforms, ensuring compatibility and interoperability.

### Main Functions and Methods

The 42DCO Token smart contract offers a set of core functions and methods for seamless interaction:

**`Total Supply:`** This function allows users to query the total supply of 42DCO tokens in circulation. Users can easily obtain information on the total number of tokens available.

**`Balance Of:`** By using the "Balance Of" function, users can check the token balance associated with a specific wallet address. This feature is vital for tracking individual holdings and transactions.

**`Allowance:`** The "Allowance" function enables wallet owners to specify the maximum amount another wallet or smart contract can spend on their behalf. It plays a crucial role in secure authorization for transfers.

**`Transfer:`** This function facilitates the transfer of 42DCO tokens between wallet addresses. Users can efficiently send tokens to others within the ecosystem.

**`Approve:`** Wallet owners can use the "Approve" function to grant permission to another wallet or smart contract to transfer a specific amount of tokens on their behalf.

**`Transfer From:`** This function is integral to the transfer process when authorization is required. It allows an approved entity to execute a transfer on behalf of the wallet owner.

### OpenZeppelin's ERC-20 Implementation

To ensure the highest level of security and compliance, the 42DCO Token smart contract leverages OpenZeppelin's ERC-20 implementation. OpenZeppelin is renowned for its battle-tested, community-driven development of smart contract standards and libraries.

The use of OpenZeppelin's ERC-20 implementation guarantees that the 42DCO Token adheres to best practices and industry standards, reducing the risk of vulnerabilities and errors. Furthermore, it simplifies code maintenance and updates in response to changes in the blockchain ecosystem.

By following these standards, the `Tokenizer` project's 42DCO Token is well-prepared to interact with various decentralized applications and platforms, providing an essential utility within the ecosystem.

In the subsequent sections, we will delve deeper into the deployment process, interaction methods, and ways to contribute to this exciting project.

### Token Distribution

The distribution of 42DCO tokens is a crucial aspect of the project. These tokens will serve as the native currency within the 42 school community, providing an accessible means of exchange for various activities and services.

### Initial Token Supply

The initial total supply of 42DCO tokens is set to 100000000 42DCO tokens. These tokens are created upon the deployment of the smart contract. The smart contract is based on the ERC-20 standard, which ensures compatibility with various decentralized applications and services within the Ethereum ecosystem.

### Distribution Strategy

The 42DCO tokens will be distributed following a fair and transparent strategy to ensure wide accessibility and utility. The distribution process includes:

**`Owner Allocation:`** 100% of the total supply will be initially allocated to the project owner to support development, maintenance, and operational costs.

**`Rewards and Incentives:`** A portion of the tokens will be set aside for rewarding contributors, early adopters, and community participants who actively engage with the project.

**`User Activities:`** Users will earn 42DCO tokens through their involvement in school activities, such as project validations, event participation, and completing the common core curriculum.

**`Smart Contract:`** The smart contract will mint tokens when required based on user activities and interaction with the platform.

**`Future Development:`** A reserve fund will be established for future development and unforeseen expenses, ensuring the sustainability of the project.

### Token Sales

At this stage, there are no plans for an initial coin offering (ICO) or public token sale. The primary goal is to foster community participation and encourage the use of 42DCO tokens for various activities within the 42 school ecosystem.

### Liquidity and Market Availability

While initially, the focus is on internal usage, the project aims to list the 42DCO token on reputable cryptocurrency exchanges. This will provide users with options for buying and selling tokens on the open market, thus increasing liquidity and accessibility.

It's important to note that the distribution strategy and details mentioned here are subject to adjustments as the project evolves. Community input and consensus will play a vital role in shaping the future distribution and usage of 42DCO tokens.

For a detailed breakdown of the token distribution and associated addresses, refer to the 42DCO token smart contract on the Ethereum blockchain.

### Smart Contract Information

This smart contract has been deployed on the `Sepolia Testnet`.</br>
The deployed smart contract's address: [0x9365325272B8930B536b22477Eb71417FaE73CB1](https://sepolia.etherscan.io/address/0x9365325272B8930B536b22477Eb71417FaE73CB1)

Explore transactions and interactions on the smart contract on [Etherscan](https://sepolia.etherscan.io/address/0x9365325272B8930B536b22477Eb71417FaE73CB1).

## Deployment

The deployment process for the 42DCO Token smart contract is an essential aspect of our project. This section outlines the steps involved in deploying the smart contract and the configuration options available to users. By following these steps, you can effectively deploy the 42DCO Token on your chosen network.

### Deployment Prerequisites

Before initiating the deployment process, ensure that you have the following prerequisites in place:

**`Clone the Repository:`** Begin by cloning the `Tokenizer` GitHub repository to your local machine. This repository contains the necessary code and deployment scripts.

**`Node.js and npm:`** Make sure you have Node.js and npm (Node Package Manager) installed on your system. If you haven't already installed them, you can download and install them from the official Node.js website.

**`Hardhat Development Environment:`** We use the Hardhat development environment for compiling and deploying the smart contract.

**`API URL and Private Key:`** You will need to configure your deployment environment by providing your API URL and the private key of the wallet associated with the smart contract deployment. These values will be used in the .env file, as described below.

### Deployment Steps

**`Navigate to Deployment Folder:`** Open your terminal and navigate to the deployment folder within the cloned `Tokenizer` repository:

```shell
cd Tokenizer/deployment
```

**`Create a .env File:`** In the deployment folder, create a .env file. This file is used to specify the required environment variables:

- **`API_URL:`** Replace this with the API URL for your chosen network. You may use services like Infura, Alchemy, or an Ethereum node URL.
- **`PRIVATE_KEY:`** Insert the private key of the wallet you'll use for the smart contract deployment.
- **`SMART_CONTRACT_ADDRESS:`** Replace with the token smart contract address once the deployment script has executed once.
Here's an example of what the .env file might look like:

```plaintext
API_URL=https://eth-sepolia.g.alchemy.com/v2/[YOUR-API-KEY]
PRIVATE_KEY=your_wallet_private_key
SMART_CONTRACT_ADDRESS=smart_contract_address
```

**`Run the Deployment Script:`** Once the .env file is configured, you can initiate the deployment process by executing the start.sh script:

```shell
./start.sh
```

This script will perform the following actions:

1. Install the necessary dependencies, ensuring your environment is ready for deployment.

2. Compile the 42DCO Token smart contract using the Solidity compiler.

3. Deploy the smart contract to the specified network.

4. The network configurations and deployment script details can be tailored to suit your specific needs, including choosing the desired Ethereum network.

### Custom Configuration

Advanced users and developers may require further customization of the network configurations. These options can be adjusted in the Hardhat configuration file (hardhat.config.js) and the deployment script (deploy.js). The Hardhat configuration allows you to specify your network preferences, while the deployment script manages the smart contract deployment with desired constructor arguments.

By following these steps and customizing the deployment configuration as needed, you can successfully deploy the 42DCO Token smart contract. Once deployed, the smart contract is ready for interactions and transactions as described in the preceding sections.

## Interacting with the 42DCO Token

To interact with the 42DCO Token, you will use a series of scripts and functions provided in the interact.js and interact.sh files within the deployment folder. These scripts facilitate various interactions with the token, such as checking balances, transferring tokens, approving transfers, and more.

### Interact Prerequisites

Before you begin interacting with the 42DCO Token, ensure you have the following prerequisites in place:

**`Ethereum Wallets:`** You should have access to Ethereum wallets for various accounts that will interact with the token. Make sure you have these wallets configured and your private keys accessible.

**`Ether (ETH):`** To execute transactions and interactions on the Ethereum network, you'll need a small amount of Ether to cover gas fees. Ensure that your Ethereum wallets have a sufficient balance of ETH.

### Using the interact.sh Script

The interact.sh script simplifies the process of interacting with the 42DCO Token. Here's how to use it:

Open your terminal and navigate to the deployment folder:

```shell
cd deployment
```

Execute the interact.sh script using the following command:

```shell
./interact.sh
```

The script will guide you through various interactions with the token.</br>
Adding Wallets to `accounts.json`.</br>
Before running the `interact.sh` script, you need to populate the `accounts.json` file with Ethereum wallet addresses and private keys for the accounts you want to use.</br>
The `accounts.json` file has the following template:

```json
[
    {"Main account":{
        "wallet_address": "wallet_private_key"
    },
    "Second account":{
        "wallet_address": "wallet_private_key"
    }}
]
```

You can add or remove wallets from this file as needed. Each wallet should have a unique name (e.g., "Main account," "Second account") and corresponding wallet address and private key.

### Using the interact.js Script

The `interact.js` script is responsible for the actual interactions with the 42DCO Token. It utilizes the Hardhat Ethereum development environment and Ethereum library to communicate with the token's smart contract. The script includes functions for various interactions, including checking the total supply, account balances, transferring tokens, approving transfers, and more.

Here are some of the key interactions you can perform with the `interact.js` script:

**`Total Supply:`** Check the total supply of 42DCO tokens.

**`Balance Of:`** Check the balance of a specific Ethereum wallet.

**`Transfer:`** Transfer a specified amount of 42DCO tokens to another wallet.

**`Approve:`** Approve another Ethereum address to spend tokens on your behalf.

**`Transfer From:`** Transfer tokens from one wallet to another, given appropriate approvals.

**`Allowance:`** Check the allowance granted to another address by a token holder.

The script will guide you through each interaction, and you'll be prompted to enter relevant details and confirm your actions. After each interaction, you will receive feedback on the executed action.

These interactions are designed to be user-friendly and provide seamless access to the features of the 42DCO Token.

### Running the interact.js Script

To execute interactions using the interact.js script, follow these steps:

Ensure you are in the deployment folder within the project directory.

Open your terminal and run the `interact.js` script with the following command:

```shell
npx hardhat run interact.js --network sepolia
```

Here the script is ran to be executed on the Sepolia testnet but it could be ran on any network.

Follow the on-screen prompts to select the interaction you want to perform and provide any required information.

The script will handle the interaction and provide feedback on the executed action.

By following these steps, you can seamlessly interact with the 42DCO Token and explore its various functionalities.

## Conclusion

The 42DCO Token offers a user-friendly and flexible environment for interacting with an Ethereum-based token deployed on the Sepolia testnet. Whether you want to check balances, transfer tokens, approve transactions, or perform other actions, the provided scripts simplify the process. The interact.js script, in combination with the interact.sh script and the accounts.json file, provides a comprehensive solution for interacting with the token.

## Contributing

We welcome contributions to the `Tokenizer` project. Whether you're a developer, designer, or just enthusiastic about blockchain technology, you can contribute to the project's growth. Here are some ways to get involved:

1. **Fork the Repository:** If you have an improvement in mind or want to fix a bug, fork the repository on GitHub to create your own copy.

2. **Clone the Repository:** Clone the repository to your local machine using your forked version.

    ```shell
    git clone https://github.com/dcooray42/Tokenizer.git
    ```

3. **Create a Branch:** Make a new branch for your work.

    ```shell
    git checkout -b feature/your-feature-name
    ```

4. **Make Changes:** Implement your improvements or bug fixes within the new branch.

5. **Testing:** Ensure that your changes don't break existing functionality. Write unit tests if necessary.

6. **Commit Changes:** Commit your changes with clear and concise messages.

    ```shell
    git commit -m "Add feature/fix bug: your changes here"
    ```

7. **Push Changes:** Push your branch to your forked repository.

    ```shell
    git push origin feature/your-feature-name
    ```

8. **Create a Pull Request:** Create a pull request from your branch to the main repository. Describe your changes and their purpose clearly.

9. **Review and Collaboration:** Your pull request will be reviewed by project maintainers. Be ready to address any feedback and make necessary changes.

10. **Merge:** Once your changes are approved, they will be merged into the main project.

Remember to follow best practices, maintain clean code, and respect the project's coding style and guidelines. Contributions that add value to the project, including bug fixes, new features, and improvements, are highly appreciated.

Thank you for considering contributing to `Tokenizer`! Together, we can build a better understanding of blockchain technology and empower users within the 42 school community.

## License

`Tokenizer` is open-source software distributed under the [MIT License](https://opensource.org/license/mit/).

The MIT License (MIT) is a permissive open-source license that allows you to use, modify, and distribute this software for free, as long as you include the original copyright notice and disclaimers. It provides some protection for both the software and the users.

You are free to use `Tokenizer` in your projects, whether they are open source or proprietary. However, `Tokenizer` is provided "as is" without any warranty. Please review the full text of the [MIT License](https://opensource.org/license/mit/) to understand your rights and responsibilities when using this software.

We encourage the open-source community to contribute to and improve `Tokenizer`. By participating in this project, you agree to abide by the terms of the MIT License.

Your contributions to `Tokenizer` are highly appreciated, and your usage is welcomed. Let's build a better understanding of blockchain technology together.

Thank you for using `Tokenizer`!
