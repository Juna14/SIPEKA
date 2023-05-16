import { Action, Button, MainLayout, Nav, Table } from "@/components";
import { fetchListPembicara } from "@/helper/api/apiSister";
import { id } from "@/helper/constant";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Pembicara = () => {
  const {
    data: pembicara,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["pembicara"],
    queryFn: () => fetchListPembicara(id),
    networkMode: "offlineFirst",
  });
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 dark:text-white w-full h-max">
        <Nav title={"pembicara"} />
        <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
          Pembicara
        </h1>
        <Table
          searchAble
          createLink={"/pembicara/create"}
          columns={[
            { key: "id", title: "No.", dataType: "numbering" },
            ,
            { key: "kategori_kegiatan", title: "kategori kegiatan" },
            { key: "judul_makalah", title: "judul makalah" },
            { key: "nama_pertemuan", title: "nama temu ilmiah" },
            {
              key: "tanggal_pelaksanaan",
              title: "Tanggal Pelaksanaan",
            },
            {
              key: "rubrik_bkd",
              title: "Rubrik BKD",
            },
            {
              key: "id",
              title: "aksi",
              align: "center",
              render: (val) => <Action param={val} />,
            },
          ]}
          data={pembicara}
          isLoading={isLoading}
        />
      </div>
    </MainLayout>
  );
};

export default Pembicara;
