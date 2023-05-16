import { Action, MainLayout, Nav, Table } from "@/components";
import { fetchPendidikanFormal } from "@/helper/api/apiSister";
import { id } from "@/helper/constant";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const PendidikanFormal = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["pendidikan-formal", id],
    queryFn: () => fetchPendidikanFormal(id),
  });
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 w-full">
        <Nav title={"PendidikanFormal"} />
        <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
          PendidikanFormal
        </h1>
        <Table
          createLink={"/pendidikan-formal/create"}
          columns={[
            { key: "id", title: "No.", dataType: "numbering" },
            {
              key: "jenjang_pendidikan",
              title: "Jenjang",
            },
            { key: "gelar_akademik", title: "Gelar" },
            { key: "bidang_studi", title: "Bidang Studi" },
            { key: "nama_perguruan_tinggi", title: "Perguruan tinggi" },
            { key: "tahun_lulus", title: "Tahun Lulus" },
            {
              key: "id",
              title: "aksi",
              align: "center",
              render: (val) => (
                <Action
                  param={val}
                  baseUrl={"/pendidikan-formal"}
                  action={["delete", "detail", "edit"]}
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

export default PendidikanFormal;
