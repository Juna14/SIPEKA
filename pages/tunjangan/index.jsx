import { Action, MainLayout, Nav, Table } from "@/components";
import { fetchTunjangan } from "@/helper/api/apiSister";
import { id } from "@/helper/constant";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Tunjangan = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["tunjangan", id],
    queryFn: () => fetchTunjangan(id),
  });
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 w-full">
        <Nav title={"Tunjangan"} />
        <h1 className="text-md capitalize font-bold drop-shadow-lg shadow-white">
          Tunjangan
        </h1>
        <Table
          createLink={"/tunjangan/create"}
          columns={[
            { key: "id", title: "No.", dataType: "numbering" },
            {
              key: "jenis_tunjangan",
              title: "Jenis Tunjangan",
            },
            { key: "nama", title: "Nama Tunjangan" },
            { key: "instansi_pemberi", title: "Instansi Pemberi Tunjangan" },
            { key: "sumber_dana", title: "Sumber Dana" },
            { key: "tahun_mulai", title: "Tahun Mulai" },
            { key: "tahun_selesai", title: "Tahun Selesai" },
            { key: "nominal", title: "Nominal", dataType: "currency" },
            {
              key: "id",
              title: "aksi",
              align: "center",
              render: (val) => (
                <Action
                  param={val}
                  baseUrl={"/tunjangan"}
                  action={["detail", "delete", "edit"]}
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

export default Tunjangan;
