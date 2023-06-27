import {
  Action,
  MainLayout,
  ModalTambahDokumen,
  Nav,
  Table,
} from "@/components";
import {
  fetchListAnggotaProfesi,
  fetchListPenunjangLain,
} from "@/helper/api/apiSister";
import { id } from "@/helper/constant";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const AnggotaProfesi = () => {
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState(null);
  const {
    data: penunjang_lain,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["penunjang_lain"],
    queryFn: () => fetchListPenunjangLain(id),
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
        <Nav title={"Penunjang Lain"} />
        <h1 className="text-md capitalize font-bold drop-shadow-lg shadow-white">
          Penunjang Lain
        </h1>
        <Table
          createLink={"/penunjang-lain/create"}
          columns={[
            { key: "id", title: "No.", dataType: "numbering" },
            { key: "nama", title: "Nama kegiatan" },
            { key: "instansi", title: "Instansi penyelenggara" },
            { key: "sk_penugasan", title: "Nomor SK Penugasan" },
            {
              key: "tanggal_mulai",
              title: "Terhitung Mulai Tanggal",
              dataType: "date",
            },
            {
              key: "tanggal_selesai",
              title: "Tanggal Selesai",
              dataType: "date",
            },
            { key: "peran", title: "Peran" },
            { key: "rubrik_bkd", title: "Rubrik BKD" },
            {
              key: "id",
              title: "aksi",
              align: "center",
              render: (val) => (
                <Action
                  param={val}
                  baseUrl={"/penunjang-lain"}
                  addDocumentFn={() => {
                    setShowModal(!showModal);
                    setSelected(val?.nama);
                  }}
                />
              ),
            },
          ]}
          data={penunjang_lain}
          isLoading={isLoading}
        />
      </div>
    </MainLayout>
  );
};

export default AnggotaProfesi;
