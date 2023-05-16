import {
  Action,
  Breadcrumbs,
  Button,
  MainLayout,
  Nav,
  Table,
} from "@/components";
import React from "react";

const VisitingScientist = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 w-full">
        <Nav title={"Visiting Scientist"} />
        <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
          Visiting Scientist
        </h1>
        <Table
          createLink={"/visiting-scientist/create"}
          columns={[
            { key: "id", title: "No.", dataType: "numbering" },
            {
              key: "perguruan_tingggi_pengundang",
              title: "Perguruan Tinggi Pengundang",
            },
            { key: "lama_kegiatan", title: "Lama Kegiatan" },
            { key: "tanggal_pelaksanaan", title: "Tanggal Pelaksanaan" },
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

export default VisitingScientist;
