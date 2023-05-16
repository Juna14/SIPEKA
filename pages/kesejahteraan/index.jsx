import { Action, MainLayout, Nav, Table } from "@/components";
import { fetchKesejahteraan } from "@/helper/api/apiSister";
import { id } from "@/helper/constant";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Kesejahteraan = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["kesejahteraan", id],
    queryFn: () => fetchKesejahteraan(id),
  });
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 w-full">
        <Nav title={"Kesejahteraan"} />
        <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
          Kesejahteraan
        </h1>
        <Table
          createLink={"/kesejahteraan/create"}
          columns={[
            { key: "id", title: "No.", dataType: "numbering" },
            {
              key: "jenis_kesejahteraan",
              title: "Jenis Kesejahteraan",
            },
            { key: "nama", title: "Layanan Kesejahteraan" },
            { key: "penyelenggara", title: "Penyelenggara" },
            { key: "tahun_mulai", title: "Tahun Mulai" },
            { key: "tahun_selesai", title: "Tahun Selesai" },
            {
              key: "id",
              title: "aksi",
              align: "center",
              render: (val) => (
                <Action param={val} baseUrl={"/kesejahteraan"} />
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

export default Kesejahteraan;
