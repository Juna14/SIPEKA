import {
  Action,
  Breadcrumbs,
  Button,
  MainLayout,
  Nav,
  Select,
  Table,
} from "@/components";
import React from "react";

const BimbinganDosen = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 w-full">
        <Nav title={"Bimbingan Dosen"} />
        <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
          Data Bimbingan Dosen
        </h1>
        <Table
          createLink={"/pembimbing-dosen/create"}
          columns={[
            { key: "id", title: "No.", dataType: "numbering" },
            { key: "nama_pembimbing", title: "Nama pembimbing" },
            { key: "nama_bimbingan", title: "Nama Bimbingan" },
            { key: "tanggal_mulai", title: "Tanggal Mulai" },
            { key: "tanggal_selesai", title: "Tanggal Selesai" },
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

export default BimbinganDosen;
