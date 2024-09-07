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
  Button,
} from "./Card"; // Adjust path based on your project

const GenerateMnemonic = ({ onMnemonicChange }) => {
  const [mnemonic, setMnemonic] = useState("");

  const handleGenerateMnemonic = () => {
    const newMnemonic = generateMnemonic();
    setMnemonic(newMnemonic);
    onMnemonicChange(newMnemonic);
  };

  return (
    <Card>
      <CardHeader>
      
      
      </CardHeader>
      <CardContent>
        <Button onClick={handleGenerateMnemonic} className="mb-4 border">Generate Mnemonic</Button>
        <div>
         
          <p>{mnemonic }</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default GenerateMnemonic;
