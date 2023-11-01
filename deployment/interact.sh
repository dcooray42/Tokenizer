#!/bin/sh

# Install Node.js packages based on the package.json file
npm i -y

# Run the Hardhat script with the 'interact.js' file, targeting the 'sepolia' network
npx hardhat run interact.js --network sepolia
