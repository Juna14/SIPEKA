import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const CardDataPribadi = ({ title, children, data, editLink }) => {
  return (
    <div className="flex flex-col gap-4 dark:text-white w-full h-full">
      <h1 className="text-md capitalize font-semibold drop-shadow-lg shadow-white">
        {title}
      </h1>
      <div className="relative w-full h-full flex flex-col gap-4 rounded-xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl duration-200 ease-in-out p-4">
        <Link
          href={`/data-pribadi${editLink}`}
          className="group hover:scale-125 flex items-center absolute -right-2 -top-2 z-10 p-2 rounded-full shadow-lg bg-primary w-8 h-8 text-white "
        >
          <i className="fi-rr-pencil pt-1"></i>
          <div className="invisible group-hover:visible group-hover:absolute group-hover:scale-110 right-full flex gap-2 mr-2 items-center shadow-lg">
            <div className="absolute left-full w-0 h-0 border-4 border-transparent border-b-4 border-l-4 border-l-primary"></div>
            <span className="text-xs p-1 px-2 w-max bg-primary rounded-md shadow-lg">
              Ubah data
            </span>
          </div>
        </Link>

        {children}

        <div className="flex flex-col gap-2 divide-y">
          {data &&
            data?.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-1 justify-center py-2"
              >
                <span className="text-sm text-slate-500 dark:text-slate-400 font-bold capitalize leading-none">
                  {item.title}
                </span>
                <span className="text-sm font-bold leading-tight capitalize">
                  {(item.text ||= "tidak ada")}
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CardDataPribadi;
