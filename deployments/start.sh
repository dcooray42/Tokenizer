#!/bin/sh

npm i -y
npx hardhat compile
npx hardhat run deployments/deploy.js --network sepolia