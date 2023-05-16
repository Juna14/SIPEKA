import { Action, MainLayout, Nav, Table } from "@/components";
import React from "react";

const ListDataPengajaran = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 w-full">
        <Nav title={"Pengajaran"} />
        <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
          Daftar Pengajaran yang di Import
        </h1>

        <Table
          searchAble
          columns={[
            { key: "id", title: "No.", dataType: "numbering" },
            { key: "mata_kuliah", title: "Mata Kuliah" },
            {
              key: "jns_mk",
              title: "Jenis Mata Kuliah",
              render: (val) => (
                <span>{val.jns_mk === "A" ? "Wajib" : "Pilihan"}</span>
              ),
            },
            // { key: "bidang_keilmuan", title: "Bidang Keilmuan" },
            {
              key: "kelas",
              title: "Kelas",
            },
            {
              key: "jumlah_mahasiswa",
              title: "Jumlah Mahasiswa",
            },
            { key: "sks", title: "SKS" },
            { key: "semester", title: "semester" },
            { key: "program_studi", title: "program studi" },
            { key: "perguruan_tinggi", title: "perguruan tinggi" },
            {
              key: "rubrik_bkd",
              title: "Rubrik BKD",
            },
          ]}
          data={[]}
          isLoading={false}
        />
      </div>
    </MainLayout>
  );
};

export default ListDataPengajaran;
