require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

console.log(API_URL, PRIVATE_KEY);

module.exports = {
    solidity: {
        compilers: [
            {
                version: "0.4.24"
            },
            {
                version: "0.8.0"
            }
        ],
    },
    defaultNetwork: "sepolia",
    paths: {
        root: "../",
        sources: "./code"
    },
    networks: {
        hardhat: {},
        sepolia: {
            url: API_URL,
            accounts: [`0x${PRIVATE_KEY}`]
        }
    },
}
