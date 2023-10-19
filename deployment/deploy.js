async function main() {
    const token = await ethers.getContractFactory("DCOToken");
    const hello_world = await token.deploy("42 Dcooray");
    console.log("Contract Deployed to Address:", hello_world.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });