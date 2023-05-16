import { fetchListKateogriCapaianLuaran } from "@/helper/api/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Select } from "..";

const KategoriCapaianLuaranSelection = ({ errors, touched, value }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["kategoricapaianluaran"],
    queryFn: async () => await fetchListKateogriCapaianLuaran(),
    networkMode: "offlineFirst",
  });
  const option =
    data &&
    data?.data?.map((item) => {
      return { value: item.id, label: item.nama };
    });

  return (
    <Select
      label="kategori capaian luaran"
      name="kategori_capaian_luaran"
      option={option}
      errors={errors}
      touched={touched}
      values={value}
      valueKey={"value"}
      labelKey={"label"}
    />
  );
};

export default KategoriCapaianLuaranSelection;
