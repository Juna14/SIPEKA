import { fetchJabatanFungsional } from "@/helper/api/apiSister";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Select } from "..";

const JabatanFungsionalSelection = ({
  jabatan_fungsional,
  name,
  value,
  errors,
  touched,
}) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["jabatan-fungsional"],
    queryFn: async () => await fetchJabatanFungsional(),
    initialData: jabatan_fungsional,
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

export default JabatanFungsionalSelection;

export async function getStaticProps() {
  const jabatan_fungsional = await fetchJabatanFungsional();
  return { props: { jabatan_fungsional } };
}
