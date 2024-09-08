// src/ui/Button.jsx
import React from 'react';

const Button = ({ children, onClick, className = '', disabled = false }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-slate-800 py-2 px-4 mx-6 rounded-xl disabled:opacity-50 ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
