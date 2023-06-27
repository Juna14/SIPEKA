import React from "react";

const Chip = ({ text }) => {
  return (
    <div
      className={`py-1 px-3  font-bold text-xs rounded-full w-max ${
        text.toLowerCase().includes("ditolak")
          ? "bg-red-300 text-red-900"
          : "bg-green-300 text-green-900"
      }`}
    >
      {text}
    </div>
  );
};

export default Chip;
