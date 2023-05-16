import React from "react";

const FilterPageSize = ({ onChange }) => {
  return (
    <div className="flex items-center gap-2 text-sm">
      <label htmlFor="pageSize">Show</label>
      <select
        name="pageSize"
        id="pageSize"
        className="bg-white dark:bg-slate-700 border border-primary rounded-lg py-2 px-4 font-semibold"
        onChange={onChange}
        defaultValue={"5"}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      <span>entries</span>
    </div>
  );
};

export default FilterPageSize;
