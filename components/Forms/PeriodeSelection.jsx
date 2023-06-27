import { fetchSemester } from "@/helper/api/apiSister";
import useToggle from "@/helper/hooks/useToggle";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";

const PeriodeSelection = ({ onChange, withPendek = true }) => {
  const { toggle, toggler, setToggle } = useToggle();
  const [selected, setSelected] = useState("");
  const [inputValue, setInputValue] = useState("");
  const { data, isLoading, error } = useQuery({
    queryKey: ["periode"],
    queryFn: () => fetchSemester(),
  });
  if (isLoading) return <p>Memuat...</p>;
  if (error) return <p>Error</p>;
  return (
    // <div className="flex gap-2 items-center">
    //   <label htmlFor="periode" className="hidden md:block font-semibold">
    //     Periode
    //   </label>
    //   <select
    //     name="periode"
    //     id="periode"
    //     className="py-3 px-4 bg-white dark:bg-slate-700 rounded-lg shadow-xl w-full"
    //     onChange={onChange}
    //     defaultValue={""}
    //   >
    //     <option value="">Semua periode</option>
    //     {data &&
    //       data
    //         ?.filter((item) =>
    //           withPendek ? item : !item.nama.includes("Pendek")
    //         )
    //         .map((item, index) => (
    //           <option key={item.id} value={item.id}>
    //             {item.nama}
    //           </option>
    //         ))}
    //   </select>
    // </div>
    <div
      className="flex items-center gap-2 relative md:ml-auto"
      tabIndex={0}
      onBlur={() => setToggle(false)}
    >
      <span className="hidden md:block font-semibold">Periode</span>
      <div
        onClick={toggler}
        className={`bg-white dark:bg-slate-700 w-full py-2 px-4 flex items-center justify-between rounded-lg border-2 shadow-lg ${
          !selected && "text-slate-700 dark:text-white"
        }`}
      >
        {selected ? selected.nama : "Pilih periode"}
        <BiChevronDown size={20} className={`${toggle && "rotate-180"}`} />
      </div>
      <ul
        className={`absolute z-50 top-full w-full bg-white dark:bg-slate-700 mt-2 overflow-y-auto rounded-lg shadow  ${
          toggle ? "max-h-60" : "max-h-0"
        } `}
      >
        <div className="flex items-center px-2 sticky top-0 bg-white dark:bg-slate-700 shadow-sm">
          <AiOutlineSearch
            size={18}
            className="text-slate-700 dark:text-white"
          />
          <input
            type="text"
            value={inputValue}
            onFocus={() => setToggle(true)}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Cari periode"
            className="placeholder:text-slate-700 p-2 outline-none w-full dark:placeholder:text-white dark:text-white dark:bg-slate-700"
          />
        </div>
        {data &&
          data
            ?.filter((item) =>
              withPendek ? item : !item.nama.includes("Pendek")
            )
            .map((item) => (
              <li
                key={item}
                className={`p-2 text-sm hover:bg-sky-600 hover:text-white
              ${item.id === selected.id && "bg-sky-600 text-white"}
              ${
                item.nama
                  ?.toLowerCase()
                  .includes(inputValue.toLocaleLowerCase())
                  ? "block"
                  : "hidden"
              }`}
                onClick={() => {
                  if (item.id !== selected) {
                    setSelected(item);
                    setToggle(false);
                    setInputValue("");
                    onChange(item.id);
                  }
                }}
              >
                {item.nama}
              </li>
            ))}
      </ul>
    </div>
  );
};

export default PeriodeSelection;
