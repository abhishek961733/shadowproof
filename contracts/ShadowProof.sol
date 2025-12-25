// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/*
 ShadowProof
 Privacy-first income verification contract
 (Zama / FHEVM friendly structure)
*/

contract ShadowProof {

    struct EncryptedIncome {
        uint256 value; // placeholder for encrypted income
        bool exists;
    }

    mapping(address => EncryptedIncome) private incomes;

    // User submits (encrypted) income
    function submitIncome(uint256 encryptedIncome) public {
        incomes[msg.sender] = EncryptedIncome({
            value: encryptedIncome,
            exists: true
        });
    }

    // Verify income eligibility without revealing value
    function verifyEligibility(
        address user,
        uint256 encryptedThreshold
    ) public view returns (bool) {
        require(incomes[user].exists, "No income submitted");
        return incomes[user].value >= encryptedThreshold;
    }
}
