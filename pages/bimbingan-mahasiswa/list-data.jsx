import { Action, MainLayout, Nav, Table } from "@/components";
import React from "react";

const ListDataBimbinganMahasiswa = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 w-full">
        <Nav title={"Bimbingan Mahasiswa"} />
        <h1 className="text-md capitalize font-bold drop-shadow-lg shadow-white">
          Daftar Bimbingan Mahasiswa yang di Import
        </h1>

        <Table
          columns={[
            { key: "id", title: "No.", dataType: "numbering" },
            { key: "semester", title: "Semester" },
            { key: "nm_kat", title: "Kategori Kegiatan" },
            { key: "judul", title: "Judul Bimbingan" },
            { key: "bidang_keilmuan", title: "bidang keilmuan" },
            { key: "jenis_bimbingan", title: "Jenis Bimbingan" },
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

export default ListDataBimbinganMahasiswa;
