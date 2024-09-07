// src/components/EthWallet.jsx
"use client";
import React, { useState } from "react";
import { ethers } from "ethers";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Button,
} from "./Card"; // Adjust path based on your project

const EthWallet = ({ mnemonic }) => {
  const [keys, setKeys] = useState([]);

  const generateKeys = () => {
    try {
      // Validate the mnemonic
      if (!ethers.utils.isValidMnemonic(mnemonic)) {
        throw new Error("Invalid mnemonic provided.");
      }

      // Generate wallet from mnemonic
      const hdNode = ethers.utils.HDNode.fromMnemonic(mnemonic);
      const path = `m/44'/60'/0'/0/${keys.length}`; // Adjust path for each key
      const childNode = hdNode.derivePath(path);
      const wallet = new ethers.Wallet(childNode.privateKey);

      // Add the new key pair to the list
      setKeys((prevKeys) => [
        ...prevKeys,
        {
          address: wallet.address,
          privateKey: wallet.privateKey,
        },
      ]);
    } catch (error) {
      console.error("Error generating ETH wallet:", error);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ethereum Public-Private Key Generator</CardTitle>
     
      </CardHeader>
      <CardContent>
        <Button onClick={generateKeys} className="mb-4">Generate ETH Keys</Button>
        <div className="space-y-4">
         
          {keys.length > 0 ? (
            keys.map((key, index) => (
              <div key={index} className="mb-4">
                <div><strong>Public Key: </strong>{key.address}</div>
                <div> <strong>Private Key: </strong>{key.privateKey}</div>
              </div>
            ))
          ) : (
            <div></div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default EthWallet;
