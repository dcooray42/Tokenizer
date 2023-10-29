require('dotenv').config();
const { ethers } = require("hardhat");
const fs = require("fs");
const prompt = require("prompt-sync")();

const total_supply = async (token) => {
    console.log(`Total supply: ${await token.totalSupply()}`);
}

const balance_of = async (token) => {
    let wallet_address;

    wallet_address = prompt("Enter the address of the wallet: ");
    console.log(`Balance of ${wallet_address}: ${await token.balanceOf(wallet_address)} 42DCO`);
}

const transfer = async (token) => {
    let wallet_address;
    let value;

    wallet_address = prompt("Enter the address of the wallet: ");
    while (true) {
        value = parseInt(prompt("Enter the amount of tokens to transfer: "));
        if (isNaN(value)) {
            console.log("Please enter a valid number.");
        } else {
            break;
        }
    }
    const startBlock = await token.provider.getBlockNumber();
    const tx = await token.transfer(wallet_address, value);
    await tx.wait();
    const endBlock = await token.provider.getBlockNumber();
    const filter = token.filters.Transfer(null, null);
    const events = await token.queryFilter(filter, startBlock, endBlock);

    if (events.length > 0) {
        console.log("Transfer event associated with this transaction:");
        for (const event of events) {
            console.log(`From: ${event.args.from}, To: ${event.args.to}, Value: ${event.args.tokens}`);
        }
    } else {
        console.log("No Transfer events found for this transaction.");
    }
}

const approve = async (token) => {
    let wallet_address;
    let value;

    wallet_address = prompt("Enter the address of the wallet: ");
    while (true) {
        value = parseInt(prompt("Enter the amount of tokens to transfer: "));
        if (isNaN(value)) {
            console.log("Please enter a valid number.");
        } else {
            break;
        }
    }
    const startBlock = await token.provider.getBlockNumber();
    const tx = await token.approve(wallet_address, value);
    await tx.wait();
    const endBlock = await token.provider.getBlockNumber();
    const filter = token.filters.Approval(null, null);
    const events = await token.queryFilter(filter, startBlock, endBlock);

    if (events.length > 0) {
        console.log("Approval event associated with this transaction:");
        for (const event of events) {
            console.log(`From: ${event.args.tokenOwner}, To: ${event.args.spender}, Value: ${event.args.tokens}`);
        }
    } else {
        console.log("No Approval events found for this transaction.");
    }
}

const allowance = async (token) => {
    let wallet_from;
    let wallet_to;

    wallet_from = prompt("Enter the address of the wallet from: ");
    wallet_to = prompt("Enter the address to: ")
    console.log(`${wallet_from} allowed ${wallet_to} to withdraw from its account ${await token.allowance(wallet_from, wallet_to)} 42DCO`);
}

const smart_contract_methods = [
    total_supply,
    balance_of,
    transfer,
    approve,
    allowance
];

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

const parse_wallets = (data) => {
    var wallets_info = [];

    for (const account_name in data[0]) {
        for (const wallet_value in data[0][account_name]){
            wallets_info.push([account_name, wallet_value, data[0][account_name][wallet_value]]);
            break;
        }
    }
    return wallets_info;
}

const display_methods = () => {
    console.log("\nList of actions:")
    console.log("0) Total supply");
    console.log("1) Balance of");
    console.log("2) Transfer");
    console.log("3) Approve")
    console.log("4) Allowance");
}

const interact = async (token) => {
    let value;

    while (true) {
        display_methods();
        value = prompt("Select an action (press 'q' to quit): ");
        if (value == "q") {
            break;
        }
        value = parseInt(value);
        if (value < 0 || value >= 5 || isNaN(value)) {
            console.log("Enter a valid number.");
        } else {
            try {
                await smart_contract_methods[value](token);
            } catch (err) {
                throw err;
            }
        }
    }
}

const display_wallets = (wallets_info) => {
    console.log("\nList of wallets:");
    for (const iter in wallets_info) {
        const wallet_info = wallets_info[iter];

        console.log(`${iter}) Wallet name: ${wallet_info[0]} - Wallet address: ${wallet_info[1]}`);
    }
    console.log("");
}

const select_wallet = async (wallets_info) => {
    let value;
    var attached_wallet;

    const { API_URL } = process.env;

    const provider = new ethers.providers.JsonRpcProvider(API_URL);
    const Token = await ethers.getContractFactory("DCOToken");
    const token = Token.attach("0x48135556160d4A40C05DD9985eC4B536AD03aF94");
    while (true) {
        display_wallets(wallets_info);
        value = prompt("Select a wallet from the list above (press 'q' to quit): ");
        if (value == "q") {
            break;
        }
        value = parseInt(value);
        if (value < 0 || value >= wallets_info.length || isNaN(value)) {
            console.log("Enter a valid number.");
        } else {
            const wallet = new ethers.Wallet(`0x${wallets_info[value][2]}`, provider);
            attached_wallet = token.connect(wallet);
            await interact(attached_wallet);
        }
    }
}

const main = async () => {
    let parsed_data;
    let wallets_info;

    try {
        parsed_data = await read_accounts();
        wallets_info = parse_wallets(parsed_data);
        await select_wallet(wallets_info);
    } catch (err) {
        throw err;
    }
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });