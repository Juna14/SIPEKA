import {
  Action,
  Breadcrumbs,
  Button,
  MainLayout,
  Nav,
  PeriodeSelection,
  Select,
  Table,
} from "@/components";
import React from "react";

const PembinaanMahasiswa = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 w-full">
        <Nav title={"Pembinaan Mahasiswa"} />
        <h1 className="text-md capitalize font-bold drop-shadow-lg shadow-white">
          Pembinaan Mahasiswa
        </h1>
        <div className="flex flex-col md:flex-row gap-2 justify-between">
          <PeriodeSelection />
        </div>
        <Table
          // createLink={"/pembinaan-mahasiswa/create"}
          columns={[
            { key: "id", title: "No.", dataType: "numbering" },
            { key: "semester", title: "Semester" },
            { key: "judul_bimbingan", title: "Judul Pembinaan" },
            { key: "bidang_keilmuan", title: "Bidang Keilmuan" },
            { key: "jenis_bimbingan", title: "Jenis Pembinaan" },
            {
              key: "program_studi",
              title: "Program Studi",
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
        />
      </div>
    </MainLayout>
  );
};

export default PembinaanMahasiswa;
