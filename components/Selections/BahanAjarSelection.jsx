import { fetchBahanAjar } from "@/helper/api/apiSister";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Select } from "..";

const BahanAjarSelection = ({ label, name, errors, touched }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["perguruan-tinggi"],
    queryFn: async () => await fetchBahanAjar(),
    networkMode: "offlineFirst",
  });

  return (
    <Select
      label={label}
      name={name || "ptn_pengundang"}
      option={data}
      errors={errors}
      touched={touched}
      valueKey={"id"}
      labelKey={"nama"}
    />
  );
};

export default BahanAjarSelection;
