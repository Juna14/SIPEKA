import {
  Action,
  Button,
  MainLayout,
  Nav,
  Table,
  TabRiwayatAjuanPerubahanData,
} from "@/components";
import { fetchListJabatanFungsional } from "@/helper/api/apiSister";
import { id } from "@/helper/constant";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const JabatanFungsional = () => {
  const router = useRouter();
  const {
    data: jabatan_fungsional,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["jabatan_fungsional"],
    queryFn: () => fetchListJabatanFungsional(id),
    networkMode: "offlineFirst",
  });
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 dark:text-white w-full h-max">
        <Nav title={"Jabatan Fungsional"} />
        <h1 className="text-md capitalize font-bold drop-shadow-lg shadow-white">
          Riwayat Jabatan Fungsional
        </h1>
        <div className="flex flex-col md:flex-row gap-2 justify-between">
          <Button
            size={"small"}
            icon={<i className="fi-rr-time-past pt-1"></i>}
            text="Riwayat Ajuan Perubahan"
            onClick={() =>
              router.push("/jabatan-fungsional/riwayat-ajuan-perubahan-data")
            }
          />
        </div>
        <Table
          createLink={"/jabatan-fungsional/create"}
          columns={[
            { key: "id", title: "No.", dataType: "numbering" },
            { key: "jabatan_fungsional", title: "Jabatan Fungsional" },
            { key: "sk", title: "Nomor SK" },
            {
              key: "tanggal_mulai",
              title: "Terhitung Mulai Tanggal",
              dataType: "date",
            },
            {
              key: "id",
              title: "aksi",
              align: "center",
              render: (val) => (
                <Action
                  param={val}
                  baseUrl={"/jabatan-fungsional"}
                  action={["delete", "edit", "detail"]}
                />
              ),
            },
          ]}
          data={jabatan_fungsional}
        />
      </div>
    </MainLayout>
  );
};

export default JabatanFungsional;
