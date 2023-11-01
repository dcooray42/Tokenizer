#!/bin/sh

# Install Node.js packages based on the package.json file
npm i -y

# Compile the smart contract using Hardhat
npx hardhat compile

# Run the deployment script with the 'deploy.js' file, targeting the 'sepolia' network
npx hardhat run deploy.js --network sepolia
