import { Action, Button, MainLayout, Nav, Table } from "@/components";
import { fetchListJabatanStruktural } from "@/helper/api/apiSister";
import { id } from "@/helper/constant";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const JabatanStruktural = () => {
  const {
    data: jabatan_struktural,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["jabatan_struktural"],
    queryFn: () => fetchListJabatanStruktural(id),
    networkMode: "offlineFirst",
  });
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 dark:text-white w-full h-full">
        <Nav title={"jabatan struktural"} />
        <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
          Jabatan Struktural
        </h1>
        <Table
          searchAble
          createLink={"/jabatan-struktural/create"}
          columns={[
            { key: "id", title: "No.", dataType: "numbering" },
            ,
            { key: "jabatan", title: "Jabatan Struktural" },
            { key: "sk_jabatan", title: "Nomor SK" },
            {
              key: "tanggal_mulai_jabatan",
              title: "Terhitung Mulai Tanggal",
            },
            {
              key: "tanggal_selesai_jabatan",
              title: "Terhitung Tanggal Selesai",
            },
            {
              key: "id",
              title: "aksi",
              align: "center",
              render: (val) => <Action param={val} />,
            },
          ]}
          data={jabatan_struktural}
          isLoading={isLoading}
        />
      </div>
    </MainLayout>
  );
};

export default JabatanStruktural;
