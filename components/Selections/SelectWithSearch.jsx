import { fetchGolonganPangkat } from "@/helper/api/api";
import useToggle from "@/helper/hooks/useToggle";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

export default function List({
  name,
  label,
  options,
  labelKey,
  valueKey,
  errors,
  touched,
  value,
  onChange,
}) {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  useEffect(() => {}, [search, selected]);
  const { toggle, toggler, setToggle } = useToggle();

  return (
    <div
      className="flex flex-col gap-2 cursor-pointer "
      tabIndex={0}
      onBlur={() => setToggle(!toggle)}
    >
      <label htmlFor="" className="uppercase leading-tight font-bold text-sm">
        {label}
      </label>
      <div
        className={`relative cursor-pointer flex w-full justify-between appearance-none outline-none border-2 py-2 px-4 rounded-lg shadow-lg bg-white dark:bg-slate-800 ${
          errors && touched
            ? `focus:border-red-500 border-red-500 caret-red-500`
            : ` focus:border-primary border-primary caret-primary`
        }`}
        onClick={toggler}
      >
        <span>{selected ? selected[labelKey] : "No selected item yet"}</span>
        <i
          className={
            toggle ? "pt-1 fi-rr-angle-small-up" : "pt-1 fi-rr-angle-small-down"
          }
        />
      </div>
      <div
        className={`grid grid-flow-row gap-1 w-full rounded bg-white overflow-hidden ${
          toggle ? "h-max p-2" : "h-0"
        } `}
      >
        <input
          type="text"
          placeholder="cari"
          className="w-full border border-primary px-2 py-1 rounded"
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setToggle(true)}
        />
        <div className="h-max max-h-64 overflow-scroll">
          {options && options.length ? (
            options
              .filter((option) =>
                option[labelKey]
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase())
              )
              .map((option) => (
                <div
                  className="flex bg-white odd:bg-slate-50 hover:bg-slate-100"
                  key={option}
                >
                  <span
                    onClick={() => {
                      setSelected(option);
                      onChange(name, option[valueKey]);
                      setSearch("");
                      return;
                    }}
                  >
                    {option[labelKey]}
                  </span>
                </div>
              ))
          ) : (
            <p>no data</p>
          )}
        </div>
      </div>
    </div>
  );
}

// () => setSelected(option[valueKey])
