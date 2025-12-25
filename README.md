# ShadowProof 🛡️  
### Privacy-First Income Verification dApp

ShadowProof is a decentralized application (dApp) that enables **private income verification** on-chain without revealing the user’s actual income.  
It demonstrates how confidential logic can be used to verify eligibility conditions while preserving user privacy.

This project is built as part of the **Zama Developer Program (Builder Track – BETA)**.

---

## 🚀 Problem Statement

In traditional systems, income verification requires users to **fully disclose sensitive financial data**, leading to:
- Privacy risks  
- Data misuse  
- Centralized trust assumptions  

Blockchain verification is transparent by default, which makes **privacy even harder**.

---

## 💡 Solution – ShadowProof

ShadowProof allows users to:
- Submit income data (simulated encrypted input)
- Verify eligibility against a threshold
- **Without revealing the exact income on-chain**

The dApp demonstrates privacy-preserving verification logic using smart contracts and a clean Web3 frontend.

---

## 🧱 Architecture Overview

User (MetaMask)
↓
React Frontend (Vite)
↓
Ethers.js
↓
Hardhat Local Blockchain
↓
ShadowProof Smart Contract

yaml
Copy code

---

## 🛠️ Tech Stack

- **Solidity** – Smart contracts  
- **Hardhat** – Local blockchain & deployment  
- **React + Vite** – Frontend  
- **Ethers.js** – Blockchain interaction  
- **MetaMask** – Wallet integration  

---

## 📂 Project Structure

shadowproof/
├── contracts/ # Solidity smart contracts
├── scripts/ # Deployment scripts
├── test/ # Contract tests
├── frontend/ # React frontend
├── hardhat.config.js
└── README.md

yaml
Copy code

---

## ⚙️ How to Run the Project Locally

### 1️⃣ Clone the repository
```bash
git clone https://github.com/abhishek961733/shadowproof.git
cd shadowproof
2️⃣ Install dependencies
bash
Copy code
npm install
cd frontend
npm install
3️⃣ Start Hardhat local blockchain
bash
Copy code
cd ..
npx hardhat node
⚠️ Keep this terminal open.

4️⃣ Deploy the contract (new terminal)
bash
Copy code
npx hardhat run scripts/deploy.js --network localhost
Copy the deployed contract address and update it in:

bash
Copy code
frontend/src/App.jsx
5️⃣ Start the frontend
bash
Copy code
cd frontend
npm run dev
Open in browser:

arduino
Copy code
http://localhost:5173
👛 Wallet Setup (MetaMask)
Network: Hardhat Localhost

RPC URL: http://127.0.0.1:8545

Chain ID: 31337

Currency: ETH

Import a Hardhat test account (shown in the Hardhat node terminal).
These accounts use fake ETH only and are safe for local testing.

🧪 How to Use the dApp
Connect wallet using MetaMask

Click Upload Income (write transaction)

Click Verify Income (read-only verification)

Eligibility result is shown on screen

🎥 Demo Video
A short demo video (≤ 2 minutes) demonstrates:

Wallet connection

Income submission

Privacy-preserving verification

(Recorded with real voice as required by the Zama Developer Program.)

⚠️ Notes
This project runs on a local Hardhat development network

No real ETH is used

MetaMask warnings may appear due to localhost usage (expected in dev environments)

📜 License
MIT License

🙌 Acknowledgements
Built for the Zama Developer Program (BETA)
Focused on exploring privacy-preserving on-chain verification.