# NFT Project Repository

This repository contains a complete setup for developing, testing, and deploying NFT smart contracts using three popular frameworks: **Truffle**, **Hardhat**, and **Foundry**. Each folder is dedicated to a specific framework and includes configurations, contracts, and scripts for streamlined NFT development.


## Overview

This project demonstrates how to create and manage NFTs using three Ethereum development frameworks:

- **Truffle**: A development environment for Ethereum-based DApps.
- **Hardhat**: A flexible and extensible Ethereum development environment.
- **Foundry**: A fast and robust toolchain for Ethereum smart contracts.

Each folder includes:

- Example NFT smart contracts (compliant with the ERC-721 standard).
- Scripts for contract deployment and interaction.
- Test cases written in JavaScript (Truffle and Hardhat) or Solidity (Foundry).

---

## Folder Structure

```plaintext
NFT-Project/
│
├── truffle/       # Contains Truffle project files
│   ├── contracts/ # Smart contracts
│   ├── migrations/ # Deployment scripts
│   ├── test/       # Unit tests
│   ├── truffle-config.js # Truffle configuration
│
├── hardhat/       # Contains Hardhat project files
│   ├── contracts/ # Smart contracts
│   ├── ignition/  # Deployment scripts
│   ├── test/      # Unit tests
│   ├── hardhat.config.js # Hardhat configuration
│
├── foundry/       # Contains Foundry project files
│   ├── src/       # Smart contracts
│   ├── test/      # Unit tests
│   ├── foundry.toml # Foundry configuration
│
└── README.md      # Project documentation

## Setup Instructions


**1. Truffle**

```bash
truffle init
truffle compile
truffle develop

**2. Hardhat**

**Project Setup:**

```bash
npx hardhat init
npx hardhat compile
npx hardhat node

**3. Foundry**

**Project Setup:**

```bash
forge init
forge build
forge start