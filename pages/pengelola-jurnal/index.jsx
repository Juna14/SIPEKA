import { Action, Button, MainLayout, Nav, Table } from "@/components";
import { fetchListPengelolaJurnal } from "@/helper/api/apiSister";
import { id } from "@/helper/constant";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const PengelolaJurnal = () => {
  const {
    data: pengelola_jurnal,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["pengelola_jurnal"],
    queryFn: () => fetchListPengelolaJurnal(id),
    networkMode: "offlineFirst",
  });
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 dark:text-white w-full h-full">
        <Nav title={"pengelola jurnal"} />
        <h1 className="text-md capitalize font-bold drop-shadow-lg shadow-white">
          Pengelola Jurnal
        </h1>
        <Table
          createLink={"/pengelola-jurnal/create"}
          columns={[
            { key: "id", title: "No.", dataType: "numbering" },
            ,
            { key: "media_publikasi", title: "Nama Jurnal" },
            { key: "sk_penugasan", title: "Nomor SK Penugasan" },
            { key: "tanggal_mulai", title: "Terhitung Mulai Tanggal" },
            { key: "tanggal_selesai", title: "Tanggal Selesai" },
            {
              key: "aktif",
              title: "status aktif",
              render: (val) => <span>{val.aktif ? "Aktif" : "Tidak"}</span>,
            },
            { key: "peran", title: "peran" },
            { key: "rubrik_bkd", title: "rubrik bkd" },
            {
              key: "id",
              title: "aksi",
              align: "center",
              render: (val) => (
                <Action
                  param={val}
                  baseUrl={"/pengelola-jurnal"}
                  action={["delete", "edit", "detail"]}
                />
              ),
            },
          ]}
          data={pengelola_jurnal}
          isLoading={isLoading}
        />
      </div>
    </MainLayout>
  );
};

export default PengelolaJurnal;
