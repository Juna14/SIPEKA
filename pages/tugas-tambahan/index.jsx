import {
  Action,
  Breadcrumbs,
  Button,
  MainLayout,
  ModalTambahDokumen,
  Nav,
  Table,
} from "@/components";
import { fetchListTugasTambahan } from "@/helper/api/apiSister";
import { id } from "@/helper/constant";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const TugasTambahan = () => {
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState(null);
  const { data, isLoading, error } = useQuery({
    queryKey: ["tugas-tambahan", id],
    queryFn: () => fetchListTugasTambahan(id),
  });
  return (
    <MainLayout
      modal={
        <ModalTambahDokumen
          title={selected}
          showModal={showModal}
          setShowModal={() => setShowModal(!showModal)}
        />
      }
    >
      <div className="flex flex-col gap-4 w-full">
        <Nav title={"Tugas Tambahan"} />
        <h1 className="text-md capitalize font-bold drop-shadow-lg shadow-white">
          Tugas Tambahan
        </h1>
        <Table
          createLink={"/tugas-tambahan/create"}
          columns={[
            { key: "id", title: "No.", dataType: "numbering" },
            { key: "jenis_tugas", title: "Tugas Tambahan" },
            {
              key: "unit_kerja",
              title: "Unit Kerja",
            },
            { key: "perguruan_tinggi", title: "Instansi" },
            {
              key: "tanggal_mulai_tugas",
              title: "Tanggal Mulai",
              dataType: "date",
            },
            {
              key: "tanggal_selesai_tugas",
              title: "Tanggal Berakhir",
              dataType: "date",
            },
            {
              key: "rubrik_bkd",
              title: "Rubrik BKD",
            },
            {
              key: "id",
              title: "aksi",
              align: "center",
              render: (val) => (
                <Action
                  param={val}
                  baseUrl={"/tugas-tambahan"}
                  addDocumentFn={() => {
                    setShowModal(!showModal);
                    setSelected(val.jenis_tugas);
                  }}
                />
              ),
            },
          ]}
          data={data}
          isLoading={isLoading}
        />
      </div>
    </MainLayout>
  );
};

export default TugasTambahan;
