import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FilterPageSize, Pagination } from "..";
import { dateFormater } from "@/helper/constant";

const Table = ({
  columns,
  data = [],
  createLink = undefined,
  searchAble = true,
  isLoading,
  className,
  shadow = true,
}) => {
  const [perPage, setPerpage] = useState(5);
  const [localData, setLocalData] = useState(data);
  const [selectedPage, setSelectedPage] = useState(1);
  const indexOfLastItem = selectedPage * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;

  useEffect(() => {
    setLocalData(data);
  }, [isLoading, data.length]);

  useEffect(() => {
    setSelectedPage(1);
  }, [perPage]);

  const handleFilter = (searchTerm) => {
    const filtered = data?.filter((item) => {
      const values = Object.values(item);

      for (const value of values) {
        if (
          typeof value === "string" &&
          value.toLowerCase().includes(searchTerm?.toLowerCase())
        ) {
          return true;
        }
      }
      return false;
    });
    // {
    //   return item.pangkat_golongan
    //     .toLowerCase()
    //     .includes(searchTerm.toLowerCase());
    // });

    setLocalData(filtered);
    setSelectedPage(1);
  };

  return (
    <section
      className={`${
        isLoading ? "animate-pulse" : ""
      } flex flex-col gap-6 p-4 z-10 w-full h-max rounded-xl bg-white dark:bg-slate-800 ${
        shadow ? "shadow-lg" : ""
      }`}
    >
      <div className="flex flex-col sm:flex-row w-full justify-between gap-2 sm:gap-6">
        <FilterPageSize onChange={(e) => setPerpage(e.target.value)} />
        {createLink && (
          <Link
            href={createLink}
            className="ml-auto flex items-center justify-center gap-2 py-2 px-4 w-full sm:w-min bg-primary rounded-lg text-white text-sm font-semibold"
          >
            <i className="fi-rr-plus"></i>
            Tambah
          </Link>
        )}
        {searchAble && (
          <div className="relative group border border-slate-500 hover:border-primary rounded-lg">
            <input
              onChange={(e) => handleFilter(e.target.value)}
              type="text"
              className="py-2 px-4 text-sm w-min rounded-lg dark:bg-slate-700 outline-none appearance-none placeholder:font-bold"
              placeholder="Cari di sini ..."
            />
            <i className="fi-rr-search absolute right-2 top-2"></i>
          </div>
        )}
      </div>
      <div className="overflow-x-scroll">
        <table
          className={`w-full h-max table-auto text-left shadow ${className}`}
        >
          <thead>
            <tr className="bg-white dark:bg-slate-900 uppercase text-xs font-poppins">
              {columns?.map((column) => {
                let align = "text-left";
                if (column.align) align = `text-${column.align}`;

                return (
                  <th
                    key={column.title}
                    className={`p-2 first:pl-4 last:pr-4 ${align} w-max`}
                  >
                    {column.title}
                  </th>
                );
              })}
            </tr>
          </thead>
          {!isLoading && localData?.length > 0 ? (
            <tbody>
              {localData &&
                localData
                  .slice(indexOfFirstItem, indexOfLastItem)
                  ?.map((item, index) => (
                    <tr
                      className=" bg-white odd:bg-blue-50 hover:bg-blue-200 dark:bg-slate-700 dark:odd:bg-slate-800 dark:hover:bg-slate-600"
                      key={`tr-${index}`}
                    >
                      {columns?.map((column, indexColumn) => {
                        let toShown = item[column.key];
                        if (column.render) toShown = column.render(item, index);
                        if (column.dataType === "numbering") {
                          toShown = (selectedPage - 1) * perPage + index + 1;
                        }
                        if (column.dataType === "date") {
                          toShown =
                            item[column.key] && dateFormater(item[column.key]);
                        }
                        if (
                          column.dataType === "number" ||
                          column.dataType === "currency"
                        ) {
                          toShown = item[column.key].toLocaleString("id-ID");
                        }
                        return (
                          <td
                            key={`tr-${index}-td-${indexColumn}`}
                            className="p-2 first:pl-4 last:pr-4 w-max"
                          >
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
                key={"no-data"}
              >
                <td colSpan={columns.length} className="p-2 w-full text-center">
                  <div className="flex flex-col items-center justify-center gap-3 py-2">
                    <Image
                      alt="No data image"
                      src={"/no_data.svg"}
                      width={100}
                      height={300}
                    />
                    <span>Tidak ada data.</span>
                  </div>
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
      <Pagination
        data={localData}
        itemsPerPage={perPage}
        currentPage={selectedPage}
        setCurrentPage={setSelectedPage}
      />
    </section>
  );
};

export default Table;
