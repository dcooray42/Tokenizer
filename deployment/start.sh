#!/bin/sh

npm i -y
npx hardhat compile
npx hardhat run deploy.js --network sepolia