const { ethers } = require("hardhat");
const fs = require("fs");

const total_supply = async (token) => {
    console.log(`Total supply: ${await token.totalSupply()}`);
}

const approve = async (address, token) => {
    console.log(`Total supply: ${await token.totalSupply()}`);
}

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
            wallets_info.push([account_name, wallet_value]);
            break;
        }
    }
    return wallets_info;
}

const display_wallets = (wallets_info) => {
    console.log("Please enter a number to choose your wallet:");
    for (const iter in wallets_info) {
        const wallet_info = wallets_info[iter];

        console.log(`${iter}) Wallet name: ${wallet_info[0]} - Wallet address: ${wallet_info[1]}`);
    }
}

const main = async () => {
    let parsed_data;
    let wallets_info;

    try {
        parsed_data = await read_accounts();
        wallets_info = parse_wallets(parsed_data);
        display_wallets(wallets_info);
    } catch (err) {
        console.error('Error while parsing JSON data:', err);
        return;
    }
    const Token = await ethers.getContractFactory("DCOToken");
    const token = await Token.attach("0x48135556160d4A40C05DD9985eC4B536AD03aF94")

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });