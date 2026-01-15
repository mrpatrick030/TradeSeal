require("dotenv").config();
require("@nomicfoundation/hardhat-ethers");

const { MANTLE_PRIVATE_KEY } = process.env;

module.exports = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: { enabled: true, runs: 200 },
      viaIR: true,
    },
  },
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    mantleSepoliaTestnet: {
      url: "https://rpc.sepolia.mantle.xyz",
      accounts: MANTLE_PRIVATE_KEY ? [MANTLE_PRIVATE_KEY] : [],
      chainid:5003
    },
  },
};
