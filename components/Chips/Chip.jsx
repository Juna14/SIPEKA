import React from "react";

const Chip = ({ text }) => {
  return (
    <div
      className={`py-1 px-3 text-white text-xs rounded-full w-max ${
        text.toLowerCase().includes("ditolak") ? "bg-red-500" : "bg-green-500"
      }`}
    >
      {text}
    </div>
  );
};

export default Chip;
