import React from "react";

export const Card = ({ children }) => (
  <div className="bg-slate-500 text-black shadow-md rounded-lg p-6 max-w-lg mx-auto mb-6">
    {children}
  </div>
);

export const CardHeader = ({ children }) => (
  <div className="mb-4">{children}</div>
);

export const CardTitle = ({ children }) => (
  <h2 className="text-2xl font-bold">{children}</h2>
);

export const CardDescription = ({ children }) => (
  <p className="text-sm">{children}</p>
);

export const CardContent = ({ children }) => (
  <div>{children}</div>
);

export const Label = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor} className="block text-sm font-medium">
    {children}
  </label>
);

export const Input = ({ id, type, value, readOnly, className }) => (
    <input
      id={id}
      type={type}
      readOnly={readOnly}
      value={value}
      className={className || "mt-1 block w-full p-2 border rounded bg-gray-100"}
      style={{ color: "black" }}  // Force text color to be black
    />
  );
  

export const Button = ({ onClick, children, className }) => (
  <button
    onClick={onClick}
    className={className || "bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"}
  >
    {children}
  </button>
);
