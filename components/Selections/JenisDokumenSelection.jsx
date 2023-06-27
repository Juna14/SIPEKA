import { fetchJenisDokumen } from "@/helper/api/apiSister";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Select } from "..";

const JenisDokumenSelection = ({ name, value, errors, touched }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["jenis-dokumen"],
    queryFn: async () => await fetchJenisDokumen(),
    networkMode: "offlineFirst",
  });
  return (
    <>
      <Select
        label={`jenis dokumen`}
        name={name}
        option={data}
        errors={errors}
        touched={touched}
        values={value}
        valueKey={"id"}
        labelKey={"nama"}
      />
    </>
  );
};

export default JenisDokumenSelection;
