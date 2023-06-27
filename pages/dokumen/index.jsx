import { Action, MainLayout, Nav, Table } from "@/components";
import { fetchListDokumen } from "@/helper/api/apiSister";
import { id } from "@/helper/constant";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";

const Dokumen = () => {
  const { data: dokumen, isLoading } = useQuery({
    queryKey: ["dokumen"],
    queryFn: () => fetchListDokumen(id),
  });
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 dark:text-white w-full h-max">
        <Nav title={"Dokumen"} />
        <h1 className="text-md capitalize font-bold drop-shadow-lg shadow-white">
          Pembicara
        </h1>
        <Table
          columns={[
            { key: "id", title: "No.", dataType: "numbering" },
            ,
            { key: "nama", title: "nama dokumen" },
            { key: "nama_file", title: "nama file" },
            {
              key: "tautan",
              title: "tautan",
              render: (val) => (
                <Link className="text-primary" href={val?.tautan || "#"}>
                  {val.tautan}
                </Link>
              ),
            },
            { key: "keterangan", title: "keterangan" },
            {
              key: "id",
              title: "aksi",
              align: "center",
              render: (val) => (
                <Action
                  param={val}
                  baseUrl={"/dokumen"}
                  action={["detail", "delete", "edit"]}
                />
              ),
            },
          ]}
          data={dokumen}
          isLoading={isLoading}
        />
      </div>
    </MainLayout>
  );
};

export default Dokumen;
