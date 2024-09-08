// src/components/GenerateMnemonic.jsx
"use client";
import React, { useState } from "react";
import { generateMnemonic } from 'bip39';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  
} from "./Card"; 

import Button from "../ui/Button";

const GenerateMnemonic = ({ onMnemonicChange }) => {
  const [mnemonic, setMnemonic] = useState("");

  const handleGenerateMnemonic = () => {
    const newMnemonic = generateMnemonic();
    setMnemonic(newMnemonic);
    onMnemonicChange(newMnemonic);
  };

  return (
    <Card className="flex flex-col p-4 ">
    <CardHeader className="mb-4">
     <CardTitle>Mnemonics</CardTitle>
    </CardHeader>
  
    <Button onClick={handleGenerateMnemonic} className="mb-4 ">
      Generate Mnemonic
    </Button>
  
    <CardContent className="w-full">
      {/* Render mnemonic boxes only if mnemonic is not an empty string */}
      {mnemonic && (
        <div className="flex flex-wrap gap-2 p-3">
          {mnemonic.split(" ").map((word, index) => (
            <div
              key={index}
              className="bg-slate-600 text-white p-3 rounded-lg shadow-md flex-1 min-w-[150px] text-center"
            >
              {word}
            </div>
          ))}
        </div>
      )}
    </CardContent>
  </Card>
  
  );
};

export default GenerateMnemonic;
