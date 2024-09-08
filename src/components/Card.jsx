import React from "react";

export const Card = ({ children }) => (
  <div className="bg-slate-900 text-white shadow-md rounded-lg p-2 max-w-7xl   lg:mx-auto mb-6 m-3">
  {children}
</div>

);

export const CardHeader = ({ children }) => (
  <div className="mb-4">{children}</div>
);

export const CardTitle = ({ children }) => (
  <h2 className="text-3xl font-semibold m-5">{children}</h2>
);

export const CardDescription = ({ children }) => (
  <p className="text-sm">{children}</p>
);

export const CardContent = ({ children }) => (
  <div className=" text-white rounded-md w-full p-5 my-5 flex">{children}</div>
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
