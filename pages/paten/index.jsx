import {
  Action,
  Button,
  MainLayout,
  ModalTambahDokumen,
  Nav,
  Table,
} from "@/components";
import { fetchListKekayaanIntelektual } from "@/helper/api/apiSister";
import { id } from "@/helper/constant";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const Paten = () => {
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState(null);
  const {
    data: paten,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["paten"],
    queryFn: () => fetchListKekayaanIntelektual(id),
    networkMode: "offlineFirst",
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
      <div className="flex flex-col gap-4 dark:text-white w-full h-max">
        <Nav title={"paten"} />
        <h1 className="text-md capitalize font-bold drop-shadow-lg shadow-white">
          Paten
        </h1>

        <Table
          createLink={"/paten/create"}
          columns={[
            { key: "id", title: "No.", dataType: "numbering" },
            ,
            { key: "judul", title: "Judul" },
            {
              key: "kategori_kegiatan",
              title: "Kategori Kegiatan",
            },
            { key: "jenis_publikasi", title: "jenis" },
            { key: "quartile", title: "quartile" },
            { key: "tanggal", title: "tanggal terbit", dataType: "date" },
            { key: "rubrik_bkd", title: "rubrik bkd" },
            {
              key: "id",
              title: "aksi",
              align: "center",
              render: (val) => (
                <Action
                  param={val}
                  baseUrl={"/paten"}
                  action={[
                    "delete",
                    "detail",
                    "edit",
                    "edit-bidang-ilmu",
                    "add-document",
                  ]}
                  addDocumentFn={() => {
                    setShowModal(!showModal);
                    setSelected(val.judul);
                  }}
                />
              ),
            },
          ]}
          data={paten}
          isLoading={isLoading}
        />
      </div>
    </MainLayout>
  );
};

export default Paten;
