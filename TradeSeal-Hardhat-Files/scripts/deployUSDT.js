const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying USDT with owner:", deployer.address);

  const MantleToken = await hre.ethers.getContractFactory("MantleSepoliaUSDT");
  const mantleToken = await MantleToken.deploy();
  await mantleToken.waitForDeployment();
  const address = await mantleToken.getAddress();

  console.log("USDT deployed to:", address);
}

main().catch((error) => {
  console.log(error);
  process.exitCode = 1;
});


// deployment code
// npx hardhat run scripts/deployUSDT.js --network mantleSepoliaTestnet
