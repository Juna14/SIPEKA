import { Action, MainLayout, Nav, Table } from "@/components";
import React from "react";

const ListDataPengujianMahasiswa = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 w-full">
        <Nav title={"Pengujian Mahasiswa"} />
        <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
          Daftar Pengujian Mahasiswa yang di Import
        </h1>

        <Table
          searchAble
          columns={[
            { key: "id", title: "No.", dataType: "numbering" },
            { key: "judul", title: "Judul Pengujian" },
            { key: "bidang_keilmuan", title: "Bidang Keilmuan" },
            { key: "jenis_pengujian", title: "Jenis Pengujian" },
            { key: "program_studi", title: "Program Studi" },
            { key: "perguruan_tinggi", title: "Perguruan Tinggi" },
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

export default ListDataPengujianMahasiswa;
