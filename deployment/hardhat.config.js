// Load environment variables from a .env file into process.env
require('dotenv').config();

// Import the Hardhat Ethers plugin for Ethereum interaction
require("@nomiclabs/hardhat-ethers");

// Destructure API_URL and PRIVATE_KEY from process.env
const { API_URL, PRIVATE_KEY } = process.env;

// Export the Hardhat configuration object
module.exports = {
    // Solidity compiler settings
    solidity: {
        compilers: [
            {
                version: "0.8.14" // Solidity compiler version
            }
        ],
    },

    // Default network to use
    defaultNetwork: "sepolia",

    // Configuration paths
    paths: {
        root: "../",        // Root directory of the project
        sources: "./code"   // Source code directory
    },

    // Network settings
    networks: {
        hardhat: {}, // Configuration for the Hardhat network (local development)
        sepolia: {
            // Sepolia network configuration
            url: API_URL,       // Sepolia network's API URL
            accounts: [`0x${PRIVATE_KEY}`] // Ethereum accounts to use for this network
        }
    },
}
