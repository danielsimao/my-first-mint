const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const NDToken = await hre.ethers.getContractFactory("RSToken");
  const ndToken = await NDToken.deploy("Rui Simao Token", "RST");

  await ndToken.deployed();

  console.log("Token deployed to:", ndToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
