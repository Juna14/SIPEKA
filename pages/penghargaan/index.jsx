import { Action, MainLayout, Nav, Table } from "@/components";
import React from "react";

const Penghargaan = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 w-full">
        <Nav title={"Penghargaan"} />
        <h1 className="text-md capitalize font-bold drop-shadow-lg shadow-white">
          Penghargaan
        </h1>
        <Table
          createLink={"/penghargaan/create"}
          columns={[
            { key: "id", title: "No.", dataType: "numbering" },
            { key: "penghargaan", title: "Penghargaan" },
            { key: "jenis_penghargaan", title: "Jenis Penghargaan" },
            { key: "instansi", title: "Instansi" },
            {
              key: "tahun",
              title: "Tahun",
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

export default Penghargaan;
