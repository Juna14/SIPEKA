import { fetchPerguruanTinggi } from "@/helper/api/apiSister";
import { api } from "@/helper/api/axios";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Select } from "..";

const PerguruanTinggiSelection = ({ label, name, errors, touched }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["perguruan-tinggi"],
    queryFn: async () => await fetchPerguruanTinggi(),
    networkMode: "offlineFirst",
  });
  const option =
    data &&
    data?.map((item) => {
      return { value: item.id, label: item.nama };
    });
  return (
    <Select
      label={label}
      name={name || "ptn_pengundang"}
      option={option}
      errors={errors}
      touched={touched}
      valueKey={"value"}
      labelKey={"label"}
    />
  );
};

export default PerguruanTinggiSelection;
