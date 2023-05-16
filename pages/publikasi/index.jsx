import {
  Action,
  Button,
  MainLayout,
  ModalTambahDokumen,
  Nav,
  Table,
} from "@/components";
import { fetchListPublikasi } from "@/helper/api/apiSister";
import { id } from "@/helper/constant";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const Publikasi = () => {
  const [showModal, setShowModal] = useState(false);
  const {
    data: publikasi,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["publikasi"],
    queryFn: () => fetchListPublikasi(id),
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
        <Nav title={"Publikasi"} />
        <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
          Publikasi
        </h1>
        <div className="flex flex-col md:flex-row gap-2 justify-between">
          <Button
            size={"small"}
            icon={<i className="fi-rr-cloud-download"></i>}
            text={"Import Publikasi dari SINTA"}
          />
        </div>
        <Table
          searchAble
          createLink={"/publikasi/create"}
          columns={[
            { key: "id", title: "No.", dataType: "numbering" },
            ,
            { key: "judul", title: "judul" },
            {
              key: "kategori_kegiatan",
              title: "kategori kegiatan",
            },
            { key: "jenis_publikasi", title: "jenis publikasi" },
            { key: "quartile", title: "quartile" },
            { key: "tanggal", title: "tanggal terbit", dataType: "date" },
            { key: "asal_data", title: "asal data" },
            { key: "rubrik_bkd", title: "rubrik bkd" },
            {
              key: "id",
              title: "aksi",
              align: "center",
              render: (val) => (
                <Action
                  param={val}
                  baseUrl={"/publikasi"}
                  action={[
                    "delete",
                    "detail",
                    "edit",
                    "edit-bidang-ilmu",
                    "add-document",
                  ]}
                  addDocumentFn={() => setShowModal(!showModal)}
                />
              ),
            },
          ]}
          data={publikasi}
          isLoading={isLoading}
        />
      </div>
    </MainLayout>
  );
};

export default Publikasi;
