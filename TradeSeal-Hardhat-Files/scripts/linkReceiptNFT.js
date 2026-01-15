const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  // deployed contract addresses
  const MARKETPLACE_ADDRESS = "0xA3b05E5Fe445F34E2F14683430F5eB6Cc5EE81B0";
  const RECEIPT_NFT_ADDRESS = "0x0628D6F7D69546C9a520e583968A1aaFe530A99A";

  console.log("Linking ReceiptNFT to Marketplace...");
  console.log("Deployer:", deployer.address);

  // Get Marketplace instance
  const Marketplace = await hre.ethers.getContractFactory("Marketplace");
  const marketplace = Marketplace.attach(MARKETPLACE_ADDRESS);

  // Call setReceiptNFT
  const tx = await marketplace.setReceiptNFT(RECEIPT_NFT_ADDRESS);
  await tx.wait();

  console.log(`✅ ReceiptNFT successfully linked!`);
  console.log(`Marketplace: ${MARKETPLACE_ADDRESS}`);
  console.log(`ReceiptNFT: ${RECEIPT_NFT_ADDRESS}`);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.log("❌ Error linking contracts:", error);
    process.exit(1);
  });

  // npx hardhat run scripts/linkReceiptNFT.js --network mantleSepoliaTestnet