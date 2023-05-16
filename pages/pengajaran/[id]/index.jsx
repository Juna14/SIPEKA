import { MainLayout, Nav } from "@/components";
import { fetchDetailPengajaran } from "@/helper/api/apiSister";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";

const DetailPengajaran = () => {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: pengajaran,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["pengajaran", id],
    queryFn: () => fetchDetailPengajaran(id),
  });
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 dark:text-white w-full h-max">
        <Nav title={"Detail Pengajaran"} />
        <div className="flex flex-col gap-2 justify-center bg-white dark:bg-slate-800 rounded-xl p-4 divide-y dark:divide-slate-500">
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Sks Total Persubstansi</h1>
            <span className="flex-1">
              {pengajaran?.sks || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">
              Sks Tatap Muka Persubstansi
            </h1>
            <span className="flex-1">
              {pengajaran?.sks_tatap_muka || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">
              Sks Praktek Lapangan Persubstansi
            </h1>
            <span className="flex-1">
              {pengajaran?.sks_praktek_lapangan || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">
              Jumlah Tatap Muka Rencana
            </h1>
            <span className="flex-1">
              {pengajaran?.tatap_muka_rencana || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">
              Jumlah Tatap Muka Realisasi
            </h1>
            <span className="flex-1">
              {pengajaran?.tatap_muka_realisasi || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Jumlah Mahasiswa</h1>
            <span className="flex-1">
              {pengajaran?.jumlah_mahasiswa || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Nama Matakuliah</h1>
            <span className="flex-1">
              {pengajaran?.mata_kuliah || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Nama Kelas</h1>
            <span className="flex-1">
              {pengajaran?.kelas || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Jenis Matakuliah</h1>
            <span className="flex-1">
              {pengajaran?.jns_mk || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Jenis Evaluasi</h1>
            <span className="flex-1">
              {pengajaran?.jenis_evaluasi || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Nama Substansi</h1>
            <span className="flex-1">
              {pengajaran?.nama_substansi || "( tidak ada data )"}
            </span>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DetailPengajaran;
