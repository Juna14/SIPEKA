import {
  Action,
  Button,
  MainLayout,
  ModalTambahDokumen,
  Nav,
  Table,
} from "@/components";
import { fetchListPenelitian } from "@/helper/api/apiSister";
import { id } from "@/helper/constant";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const Penelitian = () => {
  const [showModal, setShowModal] = useState(false);
  const {
    data: penelitian,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["penelitian"],
    queryFn: () => fetchListPenelitian(id),
    networkMode: "offlineFirst",
  });
  return (
    <MainLayout
      modal={
        <ModalTambahDokumen
          showModal={showModal}
          setShowModal={() => setShowModal(!showModal)}
        />
      }
    >
      <div className="flex flex-col gap-4 dark:text-white w-full h-max">
        <Nav title={"penelitian"} />
        <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
          Penelitian
        </h1>
        <Table
          key={"penelitian"}
          searchAble
          createLink={"/penelitian/create"}
          columns={[
            { key: "id", title: "No.", dataType: "numbering" },
            ,
            { key: "judul", title: "Judul" },
            {
              key: "bidang_keilmuan",
              title: "Bidang Keilmuan",
            },
            {
              key: "tahun_pelaksanaan",
              title: "Tahun Pelaksanaan",
            },
            {
              key: "lama_kegiatan",
              title: "Lama Kegiatan",
              render: (val) => <span>{val.lama_kegiatan} tahun</span>,
            },
            {
              key: "rubrik_bkd",
              title: "RUBRIk BKD",
            },
            {
              key: "id",
              title: "aksi",
              align: "center",
              render: (val) => (
                <Action
                  param={val}
                  baseUrl={"/penelitian"}
                  action={[
                    "delete",
                    "edit",
                    "detail",
                    "edit-bidang-ilmu",
                    "add-document",
                  ]}
                  addDocumentFn={() => setShowModal(!showModal)}
                />
              ),
            },
          ]}
          data={penelitian}
          isLoading={isLoading}
        />
      </div>
    </MainLayout>
  );
};

export default Penelitian;
