"use client";

import { createAppKit } from "@reown/appkit/react";
import { EthersAdapter } from "@reown/appkit-adapter-ethers";
import { mantleSepoliaTestnet } from "@reown/appkit/networks";

// 1. Get projectId at https://dashboard.reown.com
const projectId = "72456eacc1ba1725ce8dda069d57bbbc";

// 2. Create a metadata object
const metadata = {
  name: 'TradeSeal',
  description: 'Tokenize real-world commercial invoices and trade settlements as verifiable on-chain NFT Receipts',
  url: 'https://tradeseal.vercel.app',
  icons: ['https://supposed-emerald-snake.myfilebase.com/ipfs/QmXmU2JWfS6Epjbq9nQQA8Rf6WRJG2aj7tLWWBWkm61AjC']
}

// 3. Create the AppKit instance
createAppKit({
  adapters: [new EthersAdapter()],
  metadata,
  networks: [mantleSepoliaTestnet],
  projectId,
  features: {
    analytics: true,
  },
  themeMode: "dark",
      themeVariables: {
    "--w3m-accent":"#fff",
    "--w3m-font-family":"sans-serif",
    "--w3m-z-index": 9999,
    "--w3m-color-mix": "#234",
    "--w3m-color-mix-strength": 20,
    "--w3m-border-radius-master": "10px"
  },
    chainImages: {
    5003: 'https://supposed-emerald-snake.myfilebase.com/ipfs/QmPvJsbM3Dt4mj5DfDmcR5ytJM9WwUwti5tXQfjr1Ukpfr'
  }
});

export function AppKit({children}) {
  return (
    children
  );
}