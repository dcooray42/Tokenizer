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

const smart_contract_methods = [
    total_supply,
    balance_of
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
    console.log("0) Total supply");
    console.log("1) Balance of");
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
        if (value < 0 || value >= 2 || isNaN(value)) {
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
    } catch (err) {
        console.error('Error while parsing JSON data:', err);
        return;
    }
    await select_wallet(wallets_info);

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });