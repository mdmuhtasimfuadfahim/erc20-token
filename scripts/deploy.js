async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const MY_ERC20 = await hre.ethers.getContractFactory("MY_ERC20");
  const deployMY_ERC20 = await MY_ERC20.deploy();

  await deployMY_ERC20.deployed();

  //verify: npx hardhat verify --bsctestnet rinkeby DEPLOYED_CONTRACT_ADDRESS
  console.log("My ERC20 token address:", deployMY_ERC20.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

