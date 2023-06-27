import {
  Action,
  Breadcrumbs,
  Button,
  MainLayout,
  Nav,
  Table,
} from "@/components";
import React from "react";

const Detasering = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 w-full">
        <Nav title={"Detasering"} />
        <h1 className="text-md capitalize font-bold drop-shadow-lg shadow-white">
          Detasering
        </h1>
        <Table
          createLink={"/detasering/create"}
          columns={[
            { key: "id", title: "No.", dataType: "numbering" },
            {
              key: "perguruan_tinggi_sasaran",
              title: "Perguruan Tinggi Sasaran",
            },
            { key: "kategori_kegiatan", title: "Kategori Kegiatan" },
            { key: "no_sk_penugasan", title: "No. SK Penugasan" },
            { key: "tanggal_sk_penugasan", title: "Tanggal SK Penugasan" },
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

export default Detasering;
