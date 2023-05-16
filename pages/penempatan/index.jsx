import { Action, MainLayout, Nav, Table } from "@/components";
import { fetchListPenempatan } from "@/helper/api/api";
import { id } from "@/helper/constant";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Penempatan = () => {
  const {
    data: penempatan,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["penempatan"],
    queryFn: () => fetchListPenempatan(id),
  });
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 dark:text-white w-full h-max">
        <Nav title={"Penempatan"} />
        <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
          Penempatan
        </h1>

        <Table
          columns={[
            { key: "id", title: "No.", dataType: "numbering" },
            ,
            { key: "status_kepegawaian", title: "Status" },
            { key: "ikatan_kerja", title: "Ikatan Kerja" },
            { key: "jenjang_pendidikan", title: "Jenjang Pendidikan" },
            { key: "unit_kerja", title: "Unit" },
            { key: "perguruan_tinggi", title: "Perguruan Tinggi" },
            {
              key: "tanggal_mulai",
              title: "Terhitung Mulai Tanggal",
            },
            { key: "tanggal_keluar", title: "Tanggal Keluar" },
            {
              key: "id",
              title: "aksi",
              align: "center",
              render: (val) => (
                <Action
                  param={val}
                  baseUrl={"/penempatan"}
                  action={["detail"]}
                />
              ),
            },
          ]}
          data={penempatan?.data}
        />
      </div>
    </MainLayout>
  );
};

export default Penempatan;
