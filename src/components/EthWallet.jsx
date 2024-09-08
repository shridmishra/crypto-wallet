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
} from "./Card"; // Adjust path based on your project

import Button from "../ui/Button";

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
    <Card className="flex flex-col p-4 ">
    <CardHeader className="mb-4">
      <CardTitle className="">Ethereum Wallet</CardTitle>
    </CardHeader>
    <CardContent className="w-full bg-slate-600 p-4 rounded-md">
      <div className="flex flex-col space-y-6 w-full">
        {keys.length > 0 ? (
          keys.map((key, index) => (
            <div key={index} className="w-full p- bg-slate-800 rounded-lg shadow-md"> 
            <div className="text-white bg-slate-700 p-2 mb-4 rounded w-full font-bold shadow">Wallet {index +1}</div>
                
              <div className="mb-2 p-4">
                <strong>Public Key:</strong>
                <span className="block break-all text-white mb-2">{key.address}</span>
                <div>
                <strong>Private Key:</strong>
                <span className="block break-all text-white">{key.privateKey}</span>
              </div>
              </div>
              
            </div>
          ))
        ) : (
          <div className="text-slate-200">No keys generated yet.</div>
        )}
      </div>
    </CardContent>
    <Button onClick={generateKeys} className="mt-4 ">Generate ETH Keys</Button>
  </Card>
  
  );
};

export default EthWallet;
