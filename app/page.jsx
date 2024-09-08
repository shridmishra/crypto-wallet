// app/page.jsx
"use client";
import React, { useState } from "react";
import GenerateMnemonic from "../src/components/GenerateMnemonic";
import EthWallet from "../src/components/EthWallet";
import SolWallet from "../src/components/SolWallet";
import Button from "../src/ui/Button";
import { FaWallet } from "react-icons/fa6";


export default function WalletPage() {
  const [mnemonic, setMnemonic] = useState("");

  const handleMnemonicChange = (newMnemonic) => {
    setMnemonic(newMnemonic);
  };

  return (
<div className="flex flex-col min-h-screen bg-slate-700 text-white font-poppins">
  <header className="p-6 lg:px-32">
    <h1 className="text-3xl font-bold mb-5 flex items-center">
      <FaWallet className="mr-4" /> Crypto Wallet
    </h1>
  </header>
  
    <main className="flex-grow">
      <GenerateMnemonic onMnemonicChange={handleMnemonicChange} />
      
      {mnemonic && (
        <>
          <EthWallet mnemonic={mnemonic} />
          <SolWallet mnemonic={mnemonic} />
        </>
      )}
    </main>
  
    <footer className="p-6 text-center">
    <p>
      Designed & Developed By{' '}
      <strong> 
        <a href="https://github.com/shridmishra" className="text-white hover:underline" target="_blank" rel="noopener noreferrer">
        Shrid Mishra
      </a></strong>
     
    </p>
    </footer>
  </div>
  
  );
}
