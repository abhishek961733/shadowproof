const hre = require("hardhat");

async function main() {
    const ShadowProof = await hre.ethers.getContractFactory("ShadowProof");
    const shadowProof = await ShadowProof.deploy();

    await shadowProof.waitForDeployment();

    console.log("ShadowProof deployed to:", await shadowProof.getAddress());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
