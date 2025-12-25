import { useState } from "react";
import { ethers } from "ethers";
import "./App.css";

const contractAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";

const contractABI = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "encryptedIncome",
        "type": "uint256"
      }
    ],
    "name": "submitIncome",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "encryptedThreshold",
        "type": "uint256"
      }
    ],
    "name": "verifyEligibility",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

function App() {
  const [account, setAccount] = useState("");
  const [message, setMessage] = useState("");

  // 🔹 Connect Wallet
  async function connectWallet() {
    if (!window.ethereum) {
      alert("MetaMask not found");
      return;
    }

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    setAccount(accounts[0]);
  }

  // 🔹 Upload Income (contract call)
  async function uploadIncome() {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      const tx = await contract.submitIncome(50000);
      await tx.wait();

      setMessage("✅ Income uploaded on blockchain");
    } catch (err) {
      console.error(err);
      setMessage("❌ Error uploading income");
    }
  }

  // 🔹 Verify Income
  async function verifyIncome() {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);

      // 👇 signer nahi, provider use karo
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        provider
      );

      const result = await contract.verifyEligibility(account, 40000);

      setMessage(
        result
          ? "✅ Eligible: Income verified"
          : "❌ Not eligible"
      );
    } catch (err) {
      console.error(err);
      setMessage("❌ Verification failed");
    }
  }


  return (
    <div className="container">
      <div className="card">
        <h1>ShadowProof</h1>
        <p className="subtitle">
          Private Income Verification dApp
        </p>

        {!account ? (
          <button className="btn primary" onClick={connectWallet}>
            🔗 Connect Wallet
          </button>
        ) : (
          <p className="account">
            Connected: <span>{account}</span>
          </p>
        )}

        <div className="actions">
          <button className="btn" onClick={uploadIncome}>
            ⬆ Upload Income
          </button>

          <button className="btn outline" onClick={verifyIncome}>
            ✅ Verify Income
          </button>
        </div>

        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );

}

export default App;
