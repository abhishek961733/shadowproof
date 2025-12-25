Why This Project Was Built
## 🎯 Why ShadowProof Was Built

Zama’s long-term vision is to enable a future where **privacy is the default** in blockchain applications.  
While blockchain provides transparency and trustlessness, it also exposes user data, which creates serious privacy concerns for real-world use cases.

After understanding Zama’s mission and focus on confidential computation, this project was built to explore how **sensitive user information can be verified without being publicly revealed**.

ShadowProof was created as a proof-of-concept to demonstrate how users can prove eligibility (such as income-based conditions) **without disclosing their actual income data** on-chain.

 How the dApp Works (High-Level Explanation)
## 🔐 How ShadowProof Works

1. A user connects their wallet using MetaMask.
2. The user submits income-related data (simulated encrypted input) to the smart contract.
3. The smart contract stores this data without exposing it publicly.
4. When verification is required, the contract checks whether the user meets a predefined threshold.
5. Only a **boolean result (eligible / not eligible)** is returned, while the actual income value remains hidden.

This approach demonstrates how confidential logic can be applied on-chain, aligning with Zama’s goal of enabling privacy-preserving decentralized applications.

 Privacy Focus (Very Important for Zama Judges)
## 🛡️ Privacy Considerations

- The user never reveals exact income details to other users.
- Verification is performed through on-chain logic without exposing raw data.
- Only the final eligibility result is visible.
- This design reflects how Fully Homomorphic Encryption (FHE)–based systems like Zama’s protocol can be used in future production implementations.

 Conclusion / Vision
## 🌱 Conclusion & Future Vision

ShadowProof is an early-stage demonstration of privacy-first verification on blockchain.  
While this version runs on a local development network, the architecture is designed with future integration of Zama’s confidential technologies in mind.

With Zama’s FHE-based solutions, this concept can evolve into real-world applications such as:
- Private loan eligibility checks
- Confidential salary verification
- Scholarship or benefits validation
- DAO access control based on private attributes

This project represents a step toward a more private, user-respecting Web3 ecosystem.



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
