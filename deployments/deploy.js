const { ethers } = require("hardhat");

async function main() {
    const token = await ethers.getContractFactory("DCOToken");

    // Define the constructor arguments
    const owners = [
        0x6c55B2184A6D7E779Dee4F47c4BeeEA457abAD7F,
        0xD60CB1FEbdEF23F308D70138305aE117eD7a9AcD
    ];
    const numConfirmationRequired = 2;

    // Deploy the contract with the specified arguments
    const deployed_token = await token.deploy(owners, numConfirmationRequired);
    console.log("Contract Deployed to Address:", deployed_token.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });