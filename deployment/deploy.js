const { ethers } = require("hardhat");

// Define an asynchronous function named 'main'
async function main() {
    // Get the contract factory for your "DCOToken" smart contract
    const token = await ethers.getContractFactory("DCOToken");

    // Define the constructor arguments for your smart contract
    const owners = [
        "0x6c55B2184A6D7E779Dee4F47c4BeeEA457abAD7F",
        "0xD60CB1FEbdEF23F308D70138305aE117eD7a9AcD"
    ];
    const numConfirmationRequired = 2;

    // Deploy the contract with the specified constructor arguments
    const deployed_token = await token.deploy(owners, numConfirmationRequired);

    // Log the deployed contract's address to the console
    console.log("Contract Deployed to Address:", deployed_token.address);
}

// Call the 'main' function
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
