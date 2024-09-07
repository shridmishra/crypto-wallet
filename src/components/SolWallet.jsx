// src/components/SolWallet.jsx
"use client";
import React, { useState } from "react";
import { mnemonicToSeedSync } from 'bip39';
import * as web3 from '@solana/web3.js';
import nacl from 'tweetnacl';
import { derivePath } from 'ed25519-hd-key';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Button,
} from "./Card"; // Adjust path based on your project

const SolWallet = ({ mnemonic }) => {
  const [wallets, setWallets] = useState([]);

  const addWallet = () => {
    try {
      // Convert mnemonic to seed
      const seed = mnemonicToSeedSync(mnemonic);

      // Derive the path for the Solana wallet
      const derivationPath = `m/44'/501'/${wallets.length}'/0'`; // 501 is the CoinType for Solana

      // Derive the keypair
      const { key } = derivePath(derivationPath, seed.toString('hex'));
      const keyPair = nacl.sign.keyPair.fromSeed(key);

      // Create a new Solana wallet
      const wallet = web3.Keypair.fromSecretKey(keyPair.secretKey);

      // Update state with the new wallet
      setWallets((prev) => [
        ...prev,
        { publicKey: wallet.publicKey.toBase58(), privateKey: Buffer.from(wallet.secretKey).toString('hex') },
      ]);
    } catch (error) {
      console.error("Error generating Solana wallet:", error);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Solana Public-Private Key Generator</CardTitle>
      </CardHeader>
      <CardContent>
        <Button onClick={addWallet} className="mb-4">Add SOL Wallet</Button>
        {wallets.length > 0 && wallets.map((wallet, index) => (
          <div key={index} className="mb-4">
            <div><strong>Public Key:</strong> {wallet.publicKey}</div>
            <div><strong>Private Key:</strong> {wallet.privateKey}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default SolWallet;
