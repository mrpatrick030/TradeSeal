# 🔏 TradeSeal — RealFi Settlement & Escrow Infrastructure for Real‑World Commerce [Web App](https://tradeseal.vercel.app) / [Demo Video](https://drive.google.com/drive/folders/1zgdZUhPyDScz26KgH6BXIMt93r4c04LF?usp=drive_link) / [Pitch Deck](https://drive.google.com/drive/folders/1fnrAGlb5WX8dS1Fa2QMuce265VY9Hzlu?usp=drive_link)
![File](https://supposed-emerald-snake.myfilebase.com/ipfs/QmV5ViiWYn5gNSpfFC8Cbz7szeDTEgqEbaGACr1crYhYWY)

TradeSeal is a decentralized RealFi settlement and escrow protocol built on Mantle’s EVM-compatible smart contract infrastructure, designed to power real‑world commerce with on‑chain trust, transparency, and compliance.

**TradeSeal** focuses on trade settlements, invoices, and commercial transactions — transforming everyday buyer–seller agreements into verifiable, programmable, cash‑flow assets.

> TradeSeal tokenizes trust in commerce.


---

🌍 Vision

Traditional commerce suffers from opaque settlements, weak dispute resolution, and limited financial inclusion. TradeSeal replaces these fragile systems with on‑chain escrow, immutable receipts, and programmable settlement logic, enabling businesses and individuals to transact confidently without relying on centralized intermediaries.

TradeSeal empowers merchants, buyers, and underbanked participants with trustless settlement infrastructure.


---

🧭 Overview

Feature Description

🔐 Escrow‑Based Settlement Funds locked on‑chain until delivery conditions are met

🧾 Tokenized Trade Receipts Orders, invoices, and resolutions minted as NFTs

⚖️ Dispute Resolution - Mediator‑driven resolution with on‑chain outcomes

💬 Transaction Chat Session‑based buyer–seller–mediator communication

📦 Order Lifecycle Clear states from order request → settlement

🪙 Stablecoin Payments - USDC / USDT / DAI compatible

🌐 RealFi Ready Designed for compliant, real‑world commerce 💡 AI Insights - Analytics powered by OpenAI GPT-4.1 mini

🎨 UX - Dark/light mode, animations, search, pagination, filters, drag and drop, and responsive layout


---

🧱 Architecture

```
TradeSeal/

├── app/
│   ├── api/
│   │   ├── uploadNFTMetadata/route.js
│   ├── dashboard/
│   │   ├── CreateListingTab.js
│   │   ├── ListingsTab.js
│   │   ├── OrdersTab.js
│   │   ├── DisputesTab.js
│   │   ├── AnalyticsTab.js
│   │   └── page.js
│   ├── components/
│   │   └── navbar.js   
│   └── page.js
│   ├── lib/
│   │   └── contract.js  # ABI & contract addresses


TradeSeal-Hardhat-Files
├── contracts/
│   ├── TradeSeal.sol
│   ├── usdcContract.sol
│   ├── usdtContract.sol
│   ├── daiContract.sol
│   └── ReceiptNFT.sol
├── scripts/
│   ├── deploy.js
│   ├── deployUSDC.js
│   ├── deployUSDT.js
│   ├── deployDAI.js
│   └── deployNFT.js
│   └── linkReceiptNFT.js
└── README.md
```

---

**🔁 Trade Settlement Flow**

1. Trade Initiation - 
Buyer initiates a trade specifying quantity and delivery terms.

2. Escrow Funding - 
Buyer deposits stablecoins into escrow.

3. Fulfillment - 
Seller ships goods or delivers services.

4. Confirmation & Settlement - 
Buyer confirms delivery → escrow funds released.

5. Receipt Minting - 
A Trade Receipt NFT is minted as immutable proof.


---

⚖️ Dispute Handling

Either party may open a dispute while funds are in escrow

A designated mediator reviews evidence

Settlement outcome is recorded on‑chain

Resolution receipt is minted as NFT metadata


This ensures verifiable, tamper‑proof dispute outcomes.


---

**Optional Actions**

1. Order Cancellation

Both parties can cancel an order before payment/escrow.

2. Request refund

Buyer can also cancel or request refund before seller marks as shipped.

3. Chat System

A session-based chat is available for buyer, seller, and mediator.

Used for:

- Clarifying order details

- Negotiating disputes

- Coordinating delivery



🧾 What Is a Trade Settlement?

In TradeSeal, a trade settlement represents the final on‑chain resolution of a commercial transaction, where:

Delivery is confirmed or a dispute is resolved


Once settlement occurs:

Funds are released accordingly.

The transaction becomes a finalized cash‑flow record.

A receipt NFT is permanently issued.



---

🪙 Smart Contracts

Contract Purpose

TradeSeal.sol - Core escrow, trade lifecycle, dispute logic

ReceiptNFT.sol - Minting trade & resolution receipts

StableTokens - Mock USDC / USDT / DAI



---

🧠 Why TradeSeal Is RealFi

Represents real‑world commercial value

Produces verifiable cash‑flow records

Enables compliant settlement logic

Bridges off‑chain commerce with on‑chain finance


TradeSeal can later integrate:

Invoice financing

Merchant credit scoring

Yield distribution on settled trades


---

## 🧩 Contract Functions Reference

### 🏪 Merchant Accounts Management
| Function | Description |
|-----------|--------------|
| createStore | Create a new store |
| updateStore | Update an existing store |
| getAllStores | Fetch all stores |
| getStoreByOwner | Fetch a store by its owner address |

### 🛍️ Commercial Listings
| Function | Description |
|-----------|--------------|
| createListing | Add a new product listing |
| getAllListings | Retrieve all active listings |
| getListing | Get details of a single listing |
| updateListingQuantity | Update listing stock quantity |
| deleteListing | Remove a product listing |

### 📦 Trade Execution
| Function | Description |
|-----------|--------------|
| createOrder | Create an order |
| buyerConfirmAndPay | Buyer confirms and pays |
| sellerMarkShipped | Seller marks item as shipped |
| confirmDelivery | Buyer confirms successful delivery |
| cancelOrder | Cancel an order |
| getAllOrders | Fetch all orders |
| getOrdersByUser | Get orders belonging to a user |

### ⚖️ Disputes Resolution
| Function | Description |
|-----------|--------------|
| openDispute | Open a dispute for an order |
| cancelDispute | Cancel an existing dispute |
| resolveDispute | Mediator resolves dispute |
| getAllDisputes | Retrieve all dispute records |

### 🧾 Receipts
| Function | Description |
|-----------|--------------|
| mintReceipt | Mint NFT receipt for completed or disputed order |

---

## 🧠 AI Integration
OpenAI GPT-4.1 mini is used in `/api/insights` to generate marketplace summaries.

---


#### Metadata Example
```json
{
  "title": "Solar Power Bank",
  "description": "10000mAh dual USB portable charger",
  "price": "15.00",
  "token": "USDC",
  "image": "ipfs://QmXYZ..."
}
```

#### Dispute  Example
```json
{
  "name": "Order #12 Dispute Resolution",
  "Buyer": "0x...",
  "Seller": "0x...",
  "Refund To Buyer": "0.5 USDT",
  "Payout To Seller": "1.0 USDT",
  "Status": "Resolved"
}
```

#### Example Functions
```solidity
buyerConfirmAndPay(uint256 orderId);
sellerMarkShipped(uint256 orderId);
confirmDelivery(uint256 orderId);
openDispute(uint256 orderId);
```



## 🚀 Setup & Deployment

**Prerequisites**
- Node.js 22+  
- Next.js 16+  
- Hardhat  
- Ethers.js
- Mantle Sepolia Testnet  
- Filebase Account  
- OpenAI API Key  

**Environment Variables**
```env
MANTLE_SEPOLIA_MANTLE_SEPOLIA_RPC_URL=https://rpc.sepolia.mantle.xyz
MANTLE_PRIVATE_KEY=***
MANTLE_SEPOLIA_EXPLORER=https://explorer.sepolia.mantle.xyz
FILEBASE_ACCESS_KEY_ID=***
FILEBASE_SECRET_ACCESS_KEY=***
POSTGRES_URL=***
OPENAI_API_KEY=***



```

**Run App Locally**
```bash
npm install
npm run dev
```

**Deploy**
- Frontend → Vercel  
- Contracts → Hardhat (Mantle Sepolia Testnet)

---


---

🧩 Tech Stack

Layer Tools

Frontend - Modular front end with Next.js, TailwindCSS, Framer Motion, Lucide-React

Blockchain - Mantle Sepolia (EVM)

Contracts - Solidity, Hardhat, Ethers.js

Storage - IPFS / Metadata Anchoring

Wallet - EVM Wallets through AppKit (MetaMask)

AI - OpenAI GPT-4.1 mini



---

👨‍💻 Author

Patrick Ominisan
Full‑Stack Web & Blockchain Developer

---


## Problems with Real-World Digital Trade & Online Commerce

Trade settlements are opaque — buyers and sellers lack verifiable, on-chain proof of payment and delivery

Payments are often custodial and centralized, creating trust and fund-custody risks

Receipts, invoices, and order records are mutable or stored off-chain, making audits and disputes difficult

Dispute resolution is manual, slow, and subjective, often favoring platforms over participants

Merchants do not fully own their transaction history or settlement data

High platform fees and intermediaries erode merchant margins and increase buyer costs

Limited access to reliable digital settlement infrastructure for underbanked and cross-border markets


## TradeSeal’s Solution: On-Chain Trade Settlement & Escrow Infrastructure

Decentralized Trade Settlement
TradeSeal provides a smart-contract-powered escrow and settlement layer where buyers and sellers transact directly, without custodial intermediaries.

Deterministic Escrow & Dispute Resolution
Funds are locked on-chain and released only upon verified completion, or resolved through a transparent dispute flow enforced by smart contracts.

NFT-Based Trade Receipts
Each completed trade generates a tamper-proof NFT receipt, providing immutable proof of settlement, ownership, and transaction history.

Merchant-Owned Trade Data
Sellers retain full ownership of their listings, orders, and settlement records — portable, verifiable, and censorship-resistant.

Multi-Stablecoin Settlement Support
TradeSeal supports on-chain settlement using stablecoins such as USDC, USDT, and DAI, enabling predictable pricing and low-volatility trade flows.

Transparent Trade Analytics
Real-time visibility into trade volume, settlement status, revenue distribution, and market activity — enabling informed business decisions.

Accessible, Wallet-Native Infrastructure
No banks, no sign-ups — TradeSeal is accessible globally with a wallet, lowering barriers for underbanked merchants and cross-border trade participants.

Real-Time Trade Lifecycle Tracking
Buyers and sellers can monitor each stage of the trade lifecycle — from escrow creation to settlement completion — directly on-chain.


> TradeSeal tokenizes real-world trade settlements — turning everyday commercial transactions into verifiable, on-chain financial primitives.


## 🪙 Contract Addresses (Mantle Sepolia Testnet)
[Mantle Sepolia](https://sepolia.mantlescan.xyz)

**TradeSeal Contract**  
✅ [TradeSeal](https://sepolia.mantlescan.xyz/address/0xA3b05E5Fe445F34E2F14683430F5eB6Cc5EE81B0) 🟢 
`0xA3b05E5Fe445F34E2F14683430F5eB6Cc5EE81B0`

**NFT Receipt Contract**  
✅ [ReceiptNFT](https://sepolia.mantlescan.xyz/address/0x0628D6F7D69546C9a520e583968A1aaFe530A99A) 🟢  
`0x0628D6F7D69546C9a520e583968A1aaFe530A99A`

**Mock Tokens**
- [MockUSDC](https://sepolia.mantlescan.xyz/address/0x0BfB004E35faE8571130F46AB2646E9093D6e460): `0x0BfB004E35faE8571130F46AB2646E9093D6e460`
- [MockUSDT](https://sepolia.mantlescan.xyz/address/0xc2AD5021126bBD9b722762B3964e8d90b3135C6B): `0xc2AD5021126bBD9b722762B3964e8d90b3135C6B`
- [MockDAI](https://sepolia.mantlescan.xyz/address/0x79f0da8c3265C99655bC1d1B5E0A2E530d3a0306): `0x79f0da8c3265C99655bC1d1B5E0A2E530d3a0306`

---


📜 License

MIT License © 2026 Patrick Ominisan