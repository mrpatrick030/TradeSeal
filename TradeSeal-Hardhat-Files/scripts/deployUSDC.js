const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying USDC with owner:", deployer.address);

  const MantleToken = await hre.ethers.getContractFactory("MantleSepoliaUSDC");
  const mantleToken = await MantleToken.deploy();
  await mantleToken.waitForDeployment();
  const address = await mantleToken.getAddress();

  console.log("USDC deployed to:", address);
}

main().catch((error) => {
  console.log(error);
  process.exitCode = 1;
});


// deployment code
// npx hardhat run scripts/deployUSDC.js --network mantleSepoliaTestnet
