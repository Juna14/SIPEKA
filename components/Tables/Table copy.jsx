import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FilterPageSize } from "..";

const Table = ({
  columns,
  data,
  createLink = undefined,
  searchAble = false,
}) => {
  const [query, setQuery] = useState("");
  const [pageSize, setPageSize] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);

  const filterData = (query) => {
    return data?.filter((item) => {
      const values = Object.values(item);

      for (const value of values) {
        if (
          typeof value === "string" &&
          value.toLowerCase().includes(query?.toLowerCase())
        ) {
          return true;
        }
      }
      return false;
    });
  };

  let filtered = filterData(query);

  const paginateData = (data, page, pageSize) => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return data?.slice(startIndex, endIndex);
  };

  const pageNumbers = Array.from(
    { length: Math.ceil(filtered?.length / pageSize) },
    (_, i) => i + 1
  );

  return (
    <section className="grid grid-flow-row gap-4 p-4 z-10 overflow-x-auto w-full rounded-xl shadow-lg bg-white dark:bg-slate-800">
      <div className="flex justify-between gap-4">
        <FilterPageSize onChange={(e) => setPageSize(e.target.value)} />
        {createLink && (
          <Link
            href={createLink}
            className="ml-auto flex items-center gap-2 py-1 px-2 w-min bg-primary rounded-lg shadow-lg text-white text-xs"
          >
            <i className="fi-rr-plus"></i>
            Tambah
          </Link>
        )}
        {searchAble && (
          <div className="relative group border border-primary rounded-lg">
            <input
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              className="py-2 px-4 text-xs w-min rounded-lg shadow-lg dark:bg-slate-700 outline-none appearance-none placeholder:font-bold"
              placeholder="Search here ..."
            />
            <i className="fi-rr-search absolute right-2 top-1"></i>
          </div>
        )}
      </div>
      <table className="w-full table-auto text-left shadow">
        <thead>
          <tr className="bg-white dark:bg-slate-900 uppercase text-xs font-poppins">
            {columns?.map((column) => (
              <th key={column.title} className="p-2 first:pl-4 last:pr-4">
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        {data?.length > 0 ? (
          <tbody>
            {paginateData(filtered, currentPage, pageSize)?.map((item) => (
              <tr
                className=" bg-white odd:bg-blue-50 hover:bg-blue-200 dark:bg-slate-700 dark:odd:bg-slate-800 dark:hover:bg-slate-600"
                key={item.id}
              >
                {columns?.map((column, index) => {
                  let toShown = item[column.key];
                  if (column.render) toShown = column.render(item, index);
                  return (
                    <td key={index} className="p-2 first:pl-4 last:pr-4">
                      {toShown}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            <tr
              className="leading-relaxed bg-white odd:bg-blue-50 hover:bg-blue-100 dark:bg-slate-900 dark:odd:bg-slate-800 dark:hover:bg-slate-700"
              key={0}
            >
              <td colSpan={columns.length} className="p-2 w-full text-center">
                <div className="flex flex-col items-center justify-center gap-3 py-2">
                  <Image
                    alt="No data image"
                    src={"/no_data.svg"}
                    width={100}
                    height={300}
                  />
                  <span>No data.</span>
                </div>
              </td>
            </tr>
          </tbody>
        )}
      </table>

      <div className="flex justify-between items-center p-4">
        {/* <span className="text-xs">
          Showing {currentPage} to {pageSize * currentPage} of total{" "}
          {filtered?.length} entries
        </span> */}
        <div className="flex gap-2">
          <button
            disabled={currentPage == 1}
            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
            className={`disabled:cursor-not-allowed p-2 w-8 h-8 text-xs rounded-lg border border-slate-400 bg-white dark:bg-slate-700 `}
          >
            <i className="fi-rr-angle-left"></i>
          </button>
          {pageNumbers?.map((item) => (
            <button
              key={item}
              onClick={() => setCurrentPage(item)}
              className={`p-2 w-8 h-8 text-xs rounded-lg border hover:bg-primary dark:hover:bg-primary hover:text-white hover:shadow-primary  ${
                item === currentPage
                  ? "bg-primary text-white dark:shadow-primary border-primary"
                  : "bg-white dark:bg-slate-700 border-slate-400"
              }`}
            >
              {item}
            </button>
          ))}
          <button
            disabled={currentPage == pageNumbers.length}
            onClick={() =>
              currentPage < pageNumbers.length &&
              setCurrentPage(currentPage + 1)
            }
            className={`disabled:cursor-not-allowed p-2 w-8 h-8 text-xs rounded-lg border border-slate-400 bg-white dark:bg-slate-700 `}
          >
            <i className="fi-rr-angle-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Table;
