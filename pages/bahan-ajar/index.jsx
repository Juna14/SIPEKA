import {
  Action,
  Breadcrumbs,
  Button,
  MainLayout,
  Nav,
  Table,
} from "@/components";
import { fetchListBahanAjar } from "@/helper/api/apiSister";
import { dateFormater, id } from "@/helper/constant";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const BahanAjar = () => {
  const {
    data: bahan_ajar,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bahan_ajar"],
    queryFn: () => fetchListBahanAjar(id),
  });
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 w-full">
        <Nav title={"Bahan Ajar"} />
        <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
          Bahan Ajar
        </h1>
        <Table
          searchAble
          createLink={"/bahan-ajar/create"}
          columns={[
            { key: "id", title: "No.", dataType: "numbering" },
            { key: "judul", title: "Judul Bahan Ajar" },
            { key: "isbn", title: "ISBN" },
            {
              key: "tanggal_terbit",
              title: "Tanggal Terbit",
              render: (val) => dateFormater(val.tanggal_terbit),
            },
            {
              key: "nama_penerbit",
              title: "Penerbit",
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
                  baseUrl={"/bahan-ajar"}
                  action={["delete", "detail", "edit"]}
                />
              ),
            },
          ]}
          data={bahan_ajar}
          isLoading={isLoading}
        />
      </div>
    </MainLayout>
  );
};

export default BahanAjar;
