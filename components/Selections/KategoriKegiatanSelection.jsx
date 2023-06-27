import { fetchDudi, fetchKategoriKegiatan } from "@/helper/api/apiSister";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Input, Select } from "..";

const KategoriKegiatanSelection = ({
  name = "kategori_kegiatan",
  value,
  type,
  menu,
  errors,
  touched,
}) => {
  // const [activeItem, setActiveItem] = useState("");
  const { data, isLoading, error } = useQuery({
    queryKey: ["kategori-kegiatan", type, menu],
    queryFn: async () => await fetchKategoriKegiatan(type, menu),
    networkMode: "offlineFirst",
  });
  if (isLoading) return <>Memuat...</>;
  if (type === "list")
    return (
      <Select
        label="kategori kegiatan"
        name={name}
        option={data}
        errors={errors}
        touched={touched}
        values={value}
        valueKey={"id"}
        labelKey={"nama"}
      />
    );
  if (type === "tree")
    return (
      <div className="flex flex-col gap-2">
        <label
          htmlFor={name}
          className="uppercase leading-tight font-bold text-sm"
        >
          kategori kegiatan
        </label>
        <TreeSelection value={value} name={name} data={data} />
      </div>
    );
};

export default KategoriKegiatanSelection;

const TreeSelection = ({ value, name, data = [] }) => {
  const [isOpen, setisOpen] = useState("");
  if (!data) return <></>;
  return (
    <div className="p-2 pr-0 bg-slate-200 dark:bg-slate-700 rounded-xl">
      <ul className="cursor-pointer w-full">
        {data.length &&
          data?.map((item, index) => (
            <li key={item.nama} className="flex flex-col ">
              <div className="flex gap-2 w-full items-center px-4 hover:bg-slate-300 dark:hover:bg-slate-600 rounded-lg">
                {item.sub_kategori ? (
                  <i
                    className={`pt-1 ${
                      isOpen == item.nama
                        ? "fi-rr-angle-up"
                        : "fi-rr-angle-down"
                    }`}
                  ></i>
                ) : (
                  <input
                    type={"radio"}
                    name={name}
                    id={item.nama}
                    value={item.id}
                    defaultChecked={item.id === value}
                  />
                )}{" "}
                <label
                  className="p-1 cursor-pointer w-full"
                  htmlFor={item.nama}
                  onClick={() =>
                    isOpen == item.nama ? setisOpen("") : setisOpen(item.nama)
                  }
                >
                  {item.nama}
                </label>
              </div>
              {item.sub_kategori && isOpen == item.nama && (
                <TreeSelection
                  key={item.sub_kategori}
                  name={name}
                  data={item.sub_kategori}
                  value={value}
                />
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};
