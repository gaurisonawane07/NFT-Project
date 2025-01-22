require('dotenv').config();
const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const initialOwnerAddress = process.env.INITIAL_OWNER;

module.exports = buildModule("Spacebear", (m) => {
  const Spacebear = m.contract("Spacebear", [
    initialOwnerAddress 
  ]);

  return { Spacebear };
});