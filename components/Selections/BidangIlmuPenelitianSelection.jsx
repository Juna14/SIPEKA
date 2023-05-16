import { fetchBidangIlmuPenelitian } from "@/helper/api/apiSister";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Select } from "..";

const BidangIlmuPenelitianSelection = ({
  name,
  id_penelitian,
  value,
  errors,
  touched,
}) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["jabatan-fungsional"],
    queryFn: async () => await fetchBidangIlmuPenelitian(id_penelitian),
    networkMode: "offlineFirst",
  });

  return (
    <Select
      label="Jabatan Fungsional"
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

export default BidangIlmuPenelitianSelection;
