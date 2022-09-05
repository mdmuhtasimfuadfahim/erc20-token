const { network } = require("hardhat");
module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  let MY_ERC20 = await deploy("MY_ERC20", {
    from: deployer,
    log: true,
  });
};
module.exports.tags = ["all", "Token"];