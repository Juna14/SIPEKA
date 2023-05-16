import { Action, MainLayout, Nav, Table } from "@/components";
import { fetchDetailJabatanFungsional } from "@/helper/api/api";
import { dateFormater } from "@/helper/constant";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";

const DetailJabatanFungsional = () => {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: jabatan_fungsional,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["jabatan_fungsional", id],
    queryFn: () => fetchDetailJabatanFungsional(id),
  });
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 dark:text-white w-full h-max">
        <Nav title={"Detail Jabatan Fungsional"} />
        <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
          Detail Jabatan Fungsional
        </h1>
        <div className="flex flex-col gap-2 justify-center bg-white dark:bg-slate-800 rounded-xl p-4 divide-y dark:divide-slate-500">
          <div className="grid grid-cols-2">
            <h1>Jabatan Fungsional</h1>
            <span>
              {jabatan_fungsional?.data.jabatan_fungsional ||
                "( tidak ada data )"}
            </span>
          </div>
          <div className="grid grid-cols-2">
            <h1>Nomor SK</h1>
            <span>{jabatan_fungsional?.data.sk || "( tidak ada data )"}</span>
          </div>
          <div className="grid grid-cols-2">
            <h1>Terhitung Mulai Tanggal</h1>
            <span>
              {dateFormater(jabatan_fungsional?.data.tanggal_mulai) ||
                "( tidak ada data )"}
            </span>
          </div>
          <div className="grid grid-cols-2">
            <h1>Angka Kredit</h1>
            <span>
              {jabatan_fungsional?.data.angka_kredit || "( tidak ada data )"}
            </span>
          </div>
          <div className="grid grid-cols-2">
            <h1>Kelebihan Pengajaran</h1>
            <span>
              {jabatan_fungsional?.data.kelebihan_pengajaran ||
                "( tidak ada data )"}
            </span>
          </div>
          <div className="grid grid-cols-2">
            <h1>Kelebihan Penelitian</h1>
            <span>
              {jabatan_fungsional?.data.kelebihan_penelitian ||
                "( tidak ada data )"}
            </span>
          </div>
          <div className="grid grid-cols-2">
            <h1>Kelebihan Pengabdian Masyarakat</h1>
            <span>
              {jabatan_fungsional?.data.kelebihan_pengabdian ||
                "( tidak ada data )"}
            </span>
          </div>
          <div className="grid grid-cols-2">
            <h1>Kelebihan Kegiatan Penunjang</h1>
            <span>
              {jabatan_fungsional?.data.kelebihan_penunjang ||
                "( tidak ada data )"}
            </span>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DetailJabatanFungsional;
