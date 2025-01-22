const { expect } = require("chai");
const hre = require("hardhat");

describe("Spacebear", function() {
    it("is possible to mint a token", async () => {
        const [initialOwner, otherAccount] = await hre.ethers.getSigners();

        // Deploy the contract with the initialOwner parameter
        const Spacebear = await hre.ethers.getContractFactory("Spacebear");
        const spacebearInstance = await Spacebear.deploy(initialOwner.address);

        // Define a token URI for the minted token
        const tokenURI = "https://example.com/token/0";

        // Mint a token to the otherAccount with the token URI
        await spacebearInstance.safeMint(otherAccount.address, tokenURI);

        // Check that the otherAccount is the owner of the minted token
        expect(await spacebearInstance.ownerOf(0)).to.equal(otherAccount.address);
        
        // Check that the token URI is set correctly
        expect(await spacebearInstance.tokenURI(0)).to.equal(tokenURI);
    });
});