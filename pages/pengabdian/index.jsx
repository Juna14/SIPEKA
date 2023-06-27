import {
  Action,
  Button,
  MainLayout,
  ModalTambahDokumen,
  Nav,
  Table,
} from "@/components";
import { fetchListPengabdian } from "@/helper/api/apiSister";
import { id } from "@/helper/constant";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const Pengabdian = () => {
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState(null);
  const {
    data: pengabdian,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["pengabdian"],
    queryFn: () => fetchListPengabdian(id),
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
        <Nav title={"pengabdian"} />
        <h1 className="text-md capitalize font-bold drop-shadow-lg shadow-white">
          Pengabdian
        </h1>

        <Table
          createLink={"/pengabdian/create"}
          columns={[
            { key: "id", title: "No.", dataType: "numbering" },
            ,
            { key: "judul", title: "judul" },
            {
              key: "bidang_keilmuan",
              title: "bidang keilmuan",
              render: (val) => (
                <div className="flex flex-col gap-2">
                  {val.bidang_keilmuan?.map((item, index) => (
                    <div key={item}>
                      <span>{index + 1}.</span> <span>{item}</span>
                    </div>
                  ))}
                </div>
              ),
            },
            { key: "tahun_pelaksanaan", title: "tahun pelaksanaan" },
            {
              key: "lama_kegiatan",
              title: "lama kegiatan",
              render: (val) => <span>{val.lama_kegiatan} tahun</span>,
            },
            {
              key: "rubrik_bkd",
              title: "rubrik bkd",
            },
            {
              key: "id",
              title: "aksi",
              align: "center",
              render: (val) => (
                <Action
                  param={val}
                  baseUrl={"/pengabdian"}
                  action={[
                    "delete",
                    "detail",
                    "edit",
                    "edit-bidang-ilmu",
                    "add-document",
                  ]}
                  addDocumentFn={() => {
                    setShowModal(!showModal);
                    setSelected(val?.judul);
                  }}
                />
              ),
            },
          ]}
          data={pengabdian}
          isLoading={isLoading}
        />
      </div>
    </MainLayout>
  );
};

export default Pengabdian;
