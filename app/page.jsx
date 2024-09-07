// app/wallet/page.jsx
"use client";
import React, { useState } from "react";
import GenerateMnemonic from "../src/components/GenerateMnemonic";
import EthWallet from "../src/components/EthWallet";
import SolWallet from "../src/components/SolWallet";

export default function WalletPage() {
  const [mnemonic, setMnemonic] = useState("");

  const handleMnemonicChange = (newMnemonic) => {
    setMnemonic(newMnemonic);
  };

  return (
    <div className="p-6 bg-black min-h-screen text-white">
      <h1 className="text-3xl font-bold text-center mb-8">My Crypto Wallet</h1>

      <GenerateMnemonic onMnemonicChange={handleMnemonicChange} />
      
      {mnemonic && (
        <>
          <EthWallet mnemonic={mnemonic} />
          <SolWallet mnemonic={mnemonic} />
        </>
      )}
    </div>
  );
}
