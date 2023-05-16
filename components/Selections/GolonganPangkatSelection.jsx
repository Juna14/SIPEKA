import {
  fetchGolonganPangkat,
  fetchPerguruanTinggi,
} from "@/helper/api/apiSister";
import { api } from "@/helper/api/axios";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Select } from "..";

const GolonganPangkatSelection = ({
  golonganPangkat,
  name,
  value,
  errors,
  touched,
}) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["golongan-pangkat"],
    queryFn: async () => await fetchGolonganPangkat(),
    initialData: golonganPangkat,
    networkMode: "offlineFirst",
  });
  const option =
    data &&
    data?.map((item) => {
      return { value: item.id, label: item.nama };
    });
  return (
    <Select
      label="Golongan/Pangkat"
      name={name}
      option={option}
      errors={errors}
      touched={touched}
      values={value}
      valueKey={"value"}
      labelKey={"label"}
    />
  );
};

export default GolonganPangkatSelection;

export async function getStaticProps() {
  const golonganPangkat = await fetchGolonganPangkat();
  return { props: { golonganPangkat } };
}
