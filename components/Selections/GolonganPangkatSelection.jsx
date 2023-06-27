import { fetchGolonganPangkat } from "@/helper/api/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Select } from "..";
import { MultiSelect, SelectPanel } from "react-multi-select-component";
import List from "./SelectWithSearch";

const GolonganPangkatSelection = ({
  name,
  errors,
  touched,
  value,
  onChange,
}) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["golongan-pangkat"],
    queryFn: async () => await fetchGolonganPangkat(),
    networkMode: "offlineFirst",
  });

  return (
    <Select
      label="Golongan/Pangkat"
      name={name}
      option={data?.data}
      errors={errors}
      touched={touched}
      values={value}
      valueKey={"id"}
      labelKey={"nama"}
    />
    // <MultiSelect
    //   isLoading={isLoading}
    //   shouldToggleOnHover
    //   labelledBy="Golongan/Pangkat"
    //   options={
    //     data
    //       ? data?.map((item) => ({
    //           label: item.nama,
    //           value: item.id,
    //         }))
    //       : []
    //   }
    //   valueRenderer={customValueRenderer}
    //   value={selected}
    //   onChange={onChange}
    // />
  );
};

export default GolonganPangkatSelection;
