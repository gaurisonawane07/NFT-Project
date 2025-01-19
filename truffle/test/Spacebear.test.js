const Spacebear = artifacts.require("Spacebear");
const truffleAssert = require("truffle-assertions");

contract("Spacebear",(accounts) => {
    it("should credit an nft to a specific account", async() =>{
        const spacebearInstance = await Spacebear.deployed();
        let txresult = await  spacebearInstance.safeMint(accounts[1],"spacebear_1.json");
        //assert.equal(txresult.logs[0].event,"Transfer","Event is not the transfer event");
        //assert.equal(txresult.logs[0].args.from,"0x0000000000000000000000000000000000000000", "From is not the zero address");
        truffleAssert.eventEmitted(txresult,"Transfer",{from:"0x0000000000000000000000000000000000000000",to:accounts[1],tokenId:web3.utils.toBN("0")})
        assert.equal(await spacebearInstance.ownerOf(0),accounts[1],"Owner of token 1 is not equal account 2");
        
    })
})