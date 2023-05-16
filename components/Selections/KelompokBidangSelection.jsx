import {
  fetchBidangIlmuPenelitian,
  fetchKelompokBidang,
} from "@/helper/api/apiSister";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Select } from "..";

const KelompokBidangSelection = ({
  name,
  iptek = true,
  value,
  errors,
  touched,
}) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["jabatan-fungsional"],
    queryFn: async () => await fetchKelompokBidang(iptek),
    networkMode: "offlineFirst",
  });

  return (
    <Select
      label="Pilih Kelompok Bidang"
      name={name}
      option={data || []}
      errors={errors}
      touched={touched}
      values={value}
      valueKey="id"
      labelKey="nama"
    />
  );
};

export default KelompokBidangSelection;
