import React from "react";

const Button = ({ onClick, className, children }) => {
  return (
    <button
      className={`py-3 px-6 rounded-lg capitalize bg-primary w-full mt-auto ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
