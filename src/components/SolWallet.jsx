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
  } from "./Card"; // Adjust path based on your project
import Button from "../ui/Button";
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
    <Card className="flex flex-col items-center p-4">
    <CardHeader className="mb-4">
      <CardTitle className="text-xl font-semibold">Solana Public-Private Key Generator</CardTitle>
    </CardHeader>
    <CardContent className="w-full max-w-lg bg-slate-600 p-4 rounded-md">
      <div className="space-y-4">
        {wallets.length > 0 ? (
          wallets.map((wallet, index) => (
            <div key={index} className="w-full p-4 bg-slate-800 rounded-md shadow">
              <div className="mb-2">
                <strong>Public Key: </strong>
                <span className="block break-all text-md text-white">{wallet.publicKey}</span>
              </div>
              <div>
                <strong>Private Key: </strong>
                <span className="block break-all text-md text-white">{wallet.privateKey}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="text-slate-200">No keys generated yet.</div>
        )}
      </div>
    </CardContent>
    <Button onClick={addWallet} className="mt-4">Generate SOL Keys</Button>
  </Card>
  
  );
};

export default SolWallet;
