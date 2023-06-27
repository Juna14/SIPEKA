import React, { useImperativeHandle, useState } from "react";

const SearchButton = ({ onChange, value }) => {
  return (
    <input
      type="text"
      onChange={onChange}
      value={value}
      className="py-1 px-4 rounded-lg ring ring-primary shadow-lg appearance-none outline-none caret-primary dark:bg-slate-700 placeholder:font-bold"
      placeholder="Cari di sini ..."
    />
  );
};

export default SearchButton;
