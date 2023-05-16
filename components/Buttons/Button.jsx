import React from "react";

const Button = ({ type, disabled, text, onClick, icon, size }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`disabled:cursor-not-allowed rounded-lg py-2 px-4 bg-primary text-white font-semibold shadow-lg 
      ${!size ? "ring ring-primary" : size == "small" ? "" : ""}
        `}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
