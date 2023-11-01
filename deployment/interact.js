// Load environment variables from a .env file
require('dotenv').config();

// Import necessary modules and libraries
const { ethers } = require("hardhat");
const fs = require("fs");
const prompt = require("prompt-sync")();

// Define a function to check the total supply of 42DCO tokens
const total_supply = async (token) => {
    try {
        // Get the number of decimals for the token
        const decimals = await token.decimals();
        // Get and display the total supply in 42DCO tokens, considering the decimals
        console.log(`Total supply: ${(await token.totalSupply() / 10 ** decimals).toFixed(decimals)} 42DCO`);
    } catch (err) {
        // Handle errors
        throw err;
    }
}

// Define a function to check the balance of a specific wallet
const balance_of = async (token) => {
    // Prompt the user to enter a wallet address
    const wallet_address = prompt("Enter the address of the wallet: ");

    try {
        // Get the number of decimals for the token
        const decimals = await token.decimals();
        // Get and display the wallet's balance in 42DCO tokens, considering the decimals
        console.log(`Balance of ${wallet_address}: ${(await token.balanceOf(wallet_address) / 10 ** decimals).toFixed(decimals)} 42DCO`);
    } catch (err) {
        // Handle errors
        throw err;
    }
}

// Define a function to transfer 42DCO tokens to another wallet
const transfer = async (token) => {
    let decimals;
    let events;
    let value;

    try {
        // Get the number of decimals for the token
        decimals = await token.decimals();
    } catch (err) {
        // Handle errors
        throw err;
    }

    // Prompt the user to enter the recipient's wallet address
    const wallet_address = prompt("Enter the address of the wallet: ");

    while (true) {
        // Prompt the user to enter the amount of tokens to transfer
        value = parseFloat(prompt("Enter the amount of tokens to transfer: "));
        if (isNaN(value)) {
            console.log("Please enter a valid number.");
        } else if (value.toString().split(".")[1].length > decimals) {
            console.log(`The value shouldn't have over ${decimals} digits after the coma.`)
        } else {
            break;
        }
    }

    try {
        // Record the starting block
        const startBlock = await token.provider.getBlockNumber();
        // Execute the token transfer
        const tx = await token.transfer(wallet_address, parseInt(value * 10 ** decimals));
        // Wait for the transaction to be confirmed
        await tx.wait();
        // Record the ending block
        const endBlock = await token.provider.getBlockNumber();
        // Define a filter for Transfer events
        const filter = token.filters.Transfer(null, null);
        // Query Transfer events that occurred in the specified block range
        events = await token.queryFilter(filter, startBlock, endBlock);
    } catch (err) {
        // Handle errors
        throw err;
    }

    if (events.length > 0) {
        // Display Transfer events associated with the transaction
        console.log("Transfer event associated with this transaction:");
        for (const event of events) {
            // Display the details of the Transfer event, considering decimals
            console.log(`From: ${event.args.from}, To: ${event.args.to}, Value: ${(event.args.tokens / 10 ** decimals).toFixed(decimals)}`);
        }
    } else {
        console.log("No Transfer events found for this transaction.");
    }
}

// Define a function to approve transfers from the token
const approve = async (token) => {
    let decimals;
    let events;
    let value;
    let wallet_address;

    try {
        // Get the number of decimals for the token
        decimals = await token.decimals();
    } catch (err) {
        // Handle errors
        throw err;
    }

    wallet_address = prompt("Enter the address of the wallet: ");
    while (true) {
        // Prompt the user to enter the amount of tokens to transfer
        value = parseFloat(prompt("Enter the amount of tokens to allow to transfer: "));
        if (isNaN(value)) {
            console.log("Please enter a valid number.");
        } else if (value.toString().split(".")[1].length > decimals) {
            console.log(`The value shouldn't have over ${decimals} digits after the coma.`)
        } else {
            break;
        }
    }
    

    try {
        // Record the starting block
        const startBlock = await token.provider.getBlockNumber();
        // Execute the approval transaction
        const tx = await token.approve(wallet_address, parseInt(value * 10 ** decimals));
        // Wait for the transaction to be confirmed
        await tx.wait();
        // Record the ending block
        const endBlock = await token.provider.getBlockNumber();
        // Define a filter for Approval events
        const filter = token.filters.Approval(null, null);
        // Query Approval events that occurred in the specified block range
        events = await token.queryFilter(filter, startBlock, endBlock);
    } catch (err) {
        // Handle errors
        throw err;
    }

    if (events.length > 0) {
        // Display Approval events associated with the transaction
        console.log("Approval event associated with this transaction:");
        for (const event of events) {
            // Display the details of the Approval event, considering decimals
            console.log(`From: ${event.args.tokenOwner}, To: ${event.args.spender}, Value: ${(event.args.tokens / 10 ** decimals).toFixed(decimals)}`);
        }
    } else {
        console.log("No Approval events found for this transaction.");
    }
}

// Define a function to transfer tokens from one wallet to another
const transfer_from = async (token) => {
    let decimals;
    let events;
    let value;
    let wallet_from;
    let wallet_to;

    try {
        // Get the number of decimals for the token
        decimals = await token.decimals();
    } catch (err) {
        // Handle errors
        throw err;
    }

    // Prompt the user to enter the sender's wallet address
    wallet_from = prompt("Enter the address of the wallet from: ");
    // Prompt the user to enter the recipient's wallet address
    wallet_to = prompt("Enter the address to: ");
    while (true) {
        // Prompt the user to enter the amount of tokens to transfer
        value = parseFloat(prompt("Enter the amount of tokens to allow to transfer: "));
        if (isNaN(value)) {
            console.log("Please enter a valid number.");
        } else if (value.toString().split(".")[1].length > decimals) {
            console.log(`The value shouldn't have over ${decimals} digits after the coma.`)
        } else {
            break;
        }
    }

    try {

        // Record the starting block
        const startBlock = await token.provider.getBlockNumber();
        // Execute the token transfer from one wallet to another
        const tx = await token.transferFrom(wallet_from, wallet_to, parseInt(value * 10 ** decimals));
        // Wait for the transaction to be confirmed
        await tx.wait();
        // Record the ending block
        const endBlock = await token.provider.getBlockNumber();
        // Define a filter for Transfer events
        const filter = token.filters.Transfer(null, null);
        // Query Transfer events that occurred in the specified block range
        events = await token.queryFilter(filter, startBlock, endBlock);
    } catch (err) {
        // Handle errors
        throw err;
    }

    if (events.length > 0) {
        // Display Transfer events associated with the transaction
        console.log("Transfer event associated with this transaction:");
        for (const event of events) {
            // Display the details of the Transfer event, considering decimals
            console.log(`From: ${event.args.from}, To: ${event.args.to}, Value: ${(event.args.tokens / 10 ** decimals).toFixed(decimals)}`);
        }
    } else {
        console.log("No Transfer events found for this transaction.");
    }
}

// Define a function to check the allowance granted to another address by a token holder
const allowance = async (token) => {
    // Prompt the user to enter the token holder's wallet address
    const wallet_from = prompt("Enter the address of the wallet from: ");
    // Prompt the user to enter the recipient's wallet address
    const wallet_to = prompt("Enter the address to: ");

    try {
        // Get the number of decimals for the token
        const decimals = await token.decimals();
        // Get and display the allowance granted, considering the decimals
        console.log(`${wallet_from} allowed ${wallet_to} to withdraw from its account ${(await token.allowance(wallet_from, wallet_to) / 10 ** decimals).toFixed(decimals)} 42DCO`);
    } catch (err) {
        // Handle errors
        throw err;
    }
}

// Create an array of functions for smart contract interactions
const smart_contract_methods = [
    total_supply,
    balance_of,
    transfer,
    approve,
    transfer_from,
    allowance
];

// Define a function to read wallet accounts from a JSON file
const read_accounts = async () => {
    return new Promise((resolve, reject) => {
        fs.readFile("./accounts.json", "utf8", (err, data) => {
            if (err) {
                reject(err);
            }
            try {
                resolve(JSON.parse(data));
            } catch (err) {
                reject(err);
            }
        });
    });
}

// Define a function to parse wallet information from the JSON data
const parse_wallets = (data) => {
    var wallets_info = [];

    for (const account_name in data[0]) {
        for (const wallet_value in data[0][account_name]) {
            wallets_info.push([account_name, wallet_value, data[0][account_name][wallet_value]]);
            break;
        }
    }
    return wallets_info;
}

// Define a function to display the available smart contract interaction methods
const display_methods = () => {
    console.log("\nList of actions:")
    console.log("0) Total supply");
    console.log("1) Balance of");
    console.log("2) Transfer");
    console.log("3) Approve");
    console.log("4) Transfer from");
    console.log("5) Allowance\n");
}

// Define a function to initiate the smart contract interaction
const interact = async (token) => {
    let value;

    while (true) {
        display_methods();
        // Prompt the user to select an action or 'q' to quit
        value = prompt("Select an action (press 'q' to quit): ");
        if (value == "q") {
            break;
        }
        value = parseInt(value);
        if (value < 0 || value >= 6 || isNaN(value)) {
            console.log("Enter a valid number.");
        } else {
            console.log("");
            try {
                // Call the selected smart contract interaction method
                await smart_contract_methods[value](token);
            } catch (err) {
                // Handle errors
                throw err;
            }
        }
    }
}

// Define a function to display a list of available wallets
const display_wallets = (wallets_info) => {
    console.log("\nList of wallets:");
    for (const iter in wallets_info) {
        const wallet_info = wallets_info[iter];

        // Display wallet names and addresses
        console.log(`${iter}) Wallet name: ${wallet_info[0]} - Wallet address: ${wallet_info[1]}`);
    }
    console.log("");
}

// Define a function to select a wallet for interaction
const select_wallet = async (wallets_info) => {
    let value;
    var Token;
    var attached_wallet;

    // Read API URL and smart contract address from environment variables
    const { API_URL, SMART_CONTRACT_ADDRESS } = process.env;

    // Create a JSON RPC provider for Ethereum
    const provider = new ethers.providers.JsonRpcProvider(API_URL);

    try {
        // Get the token contract factory
        Token = await ethers.getContractFactory("DCOToken");
    } catch (err) {
        // Handle errors
        throw err;
    }

    // Attach the token contract to the specified address
    const token = Token.attach(SMART_CONTRACT_ADDRESS);
    while (true) {
        display_wallets(wallets_info);
        // Prompt the user to select a wallet or 'q' to quit
        value = prompt("Select a wallet from the list above (press 'q' to quit): ");
        if (value == "q") {
            break;
        }
        value = parseInt(value);
        if (value < 0 || value >= wallets_info.length || isNaN(value)) {
            console.log("Enter a valid number.");
        } else {
            try {
                // Create a wallet instance and connect it to the token contract
                const wallet = new ethers.Wallet(`0x${wallets_info[value][2]}`, provider);
                attached_wallet = token.connect(wallet);
                // Initiate smart contract interactions with the selected wallet
                await interact(attached_wallet);
            } catch (err) {
                // Handle errors
                throw err;
            }
        }
    }
}

// Define the main function to orchestrate the entire process
const main = async () => {
    let parsed_data;
    let wallets_info;

    try {
        // Read wallet accounts from a JSON file
        parsed_data = await read_accounts();
        // Parse wallet information from the JSON data
        wallets_info = parse_wallets(parsed_data);
        // Select a wallet for interaction
        await select_wallet(wallets_info);
    } catch (err) {
        // Handle errors
        throw err;
    }
}

// Call the main function to start the interaction process
main()
    .then(() => process.exit(0))
    .catch(error => {
        // Handle errors and exit
        console.error(error.toString());
        process.exit(1);
    });
