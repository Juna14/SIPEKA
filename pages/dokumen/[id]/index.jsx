import { MainLayout, Nav } from "@/components";
import { fetchDetailDokumen } from "@/helper/api/apiSister";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";

const DetailDokumen = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: dokumen, isLoading } = useQuery({
    queryKey: ["dokumen", id],
    queryFn: () => fetchDetailDokumen(id),
  });
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 dark:text-white w-full h-max">
        <Nav title={"Detail Dokumen"} />
        <h1 className="text-md capitalize font-bold drop-shadow-lg shadow-white">
          Detail Dokumen
        </h1>
        <div className="flex flex-col gap-2 justify-center bg-white dark:bg-slate-800 rounded-xl p-4 divide-y dark:divide-slate-500">
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Nama Dokumen</h1>
            <span className="flex-1">
              {dokumen?.nama || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Nama File</h1>
            <span className="flex-1">
              {dokumen?.nama_file || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Waktu Unggah</h1>
            <span className="flex-1">
              {dokumen?.tanggal_upload || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Keterangan</h1>
            <span className="flex-1">
              {dokumen?.keterangan || "( tidak ada data )"}
            </span>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DetailDokumen;
