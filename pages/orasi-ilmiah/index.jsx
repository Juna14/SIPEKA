import {
  Action,
  Breadcrumbs,
  Button,
  MainLayout,
  Nav,
  Table,
} from "@/components";
import React from "react";

const OrasiIlmiah = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 w-full">
        <Nav title={"Orasi Ilmiah"} />
        <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
          Orasi Ilmiah
        </h1>
        <Table
          createLink={"/orasi-ilmiah/create"}
          columns={[
            { key: "id", title: "No.", dataType: "numbering" },
            { key: "kategori_kegiatan", title: "Kategori Kegiatan" },
            {
              key: "judul_makalah",
              title: "Judul Makalah",
            },
            { key: "nama_temu_ilmiah", title: "Nama Temu Ilmiah" },
            { key: "penyelenggara", title: "Penyelenggara" },
            { key: "tanggal_pelaksanaan", title: "Penyelenggara" },
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

export default OrasiIlmiah;
