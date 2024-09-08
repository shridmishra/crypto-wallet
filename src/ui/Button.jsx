// src/ui/Button.jsx
import React from 'react';

const Button = ({ children, onClick, className = '', disabled = false }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-slate-600 py-4 px-4 mx-6 mb-4 rounded-xl disabled:opacity-50 ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
