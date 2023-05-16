import { Action, MainLayout, Nav, Table } from "@/components";
import { fetchListAnggotaProfesi } from "@/helper/api/apiSister";
import { id } from "@/helper/constant";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const AnggotaProfesi = () => {
  const {
    data: anggota_profesi,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["anggota-profesi"],
    queryFn: () => fetchListAnggotaProfesi(id),
  });
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 w-full">
        <Nav title={"Anggota Profesi"} />
        <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
          Anggota Profesi
        </h1>
        <Table
          searchAble
          createLink={"/anggota-profesi/create"}
          columns={[
            { key: "id", title: "No.", dataType: "numbering" },
            { key: "nama_organisasi", title: "Nama Organisasi" },
            { key: "peran", title: "Peran/Kedudukan" },
            {
              key: "tanggal_mulai_keanggotaan",
              title: "Mulai Keanggotaan",
              dataType: "date",
            },
            {
              key: "tanggal_selesai_keanggotaan",
              title: "Selesai keanggotaan",
              dataType: "date",
            },
            { key: "instansi_profesi", title: "Instansi Profesi" },
            { key: "rubrik_bkd", title: "Rubrik BKD" },
            {
              key: "id",
              title: "aksi",
              align: "center",
              render: (val) => (
                <Action
                  param={val}
                  baseUrl={"/anggota-profesi"}
                  action={["delete", "detail", "edit"]}
                />
              ),
            },
          ]}
          data={anggota_profesi}
          isLoading={isLoading}
        />
      </div>
    </MainLayout>
  );
};

export default AnggotaProfesi;
