import {
  Action,
  Button,
  FilterPageSize,
  MainLayout,
  Nav,
  Pagination,
  SearchButton,
  Select,
  Table,
} from "@/components";
import { fetchListInpassing } from "@/helper/api/api";
import { dateFormater, id } from "@/helper/constant";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const Inpassing = () => {
  const {
    data: inpassing,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["inpassing"],
    queryFn: () => fetchListInpassing(id),
    networkMode: "offlineFirst",
  });

  return (
    <MainLayout>
      <div className="flex flex-col gap-4 dark:text-white w-full h-max">
        <Nav title={"Inpassing"} />
        <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
          Inpassing
        </h1>

        <Table
          searchAble={true}
          createLink={"/inpassing/create"}
          columns={[
            { key: "id", title: "No.", dataType: "numbering" },
            { key: "pangkat_golongan", title: "Pangkat/Golongan" },
            { key: "sk", title: "Nomor SK" },
            {
              key: "tanggal_sk",
              title: "Tanggal SK",
              render: (val) => dateFormater(val.tanggal_sk),
            },
            {
              key: "tanggal_mulai",
              title: "Terhitung Mulai Tanggal",
              render: (val) => dateFormater(val.tanggal_mulai),
            },
            {
              key: "id",
              title: "aksi",
              align: "center",
              render: (val) => <Action param={val} baseUrl={"/inpassing"} />,
            },
          ]}
          data={[]}
        />
      </div>
    </MainLayout>
  );
};

export default Inpassing;
