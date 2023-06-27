import { MainLayout, Nav } from "@/components";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { fetchDetailKepangkatan } from "@/helper/api/apiSister";
import React from "react";
import { dateFormater } from "@/helper/constant";
import Link from "next/link";

const Kepangkatan = () => {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: kepangkatan,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["kepangkatan"],
    queryFn: () => fetchDetailKepangkatan(id),
    networkMode: "offlineFirst",
  });
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 dark:text-white w-full h-max">
        <Nav title={"Kepangkatan"} />
        <h1 className="text-md capitalize font-bold drop-shadow-lg shadow-white">
          Detail Riwayat Golongan/Pangkat
        </h1>

        <div className="flex flex-col gap-2 justify-center bg-white dark:bg-slate-800 rounded-xl p-4 divide-y dark:divide-slate-500">
          <div className="grid grid-cols-2">
            <h1>Golongan</h1>
            <span>{kepangkatan?.golongan || "( tidak ada data )"}</span>
          </div>
          <div className="grid grid-cols-2">
            <h1>Pangkat</h1>
            <span>{kepangkatan?.pangkat || "( tidak ada data )"}</span>
          </div>
          <div className="grid grid-cols-2">
            <h1>Nomor SK</h1>
            <span>{kepangkatan?.sk || "( tidak ada data )"}</span>
          </div>
          <div className="grid grid-cols-2">
            <h1>Tanggal SK</h1>
            <span>{kepangkatan?.tanggal_sk || "( tidak ada data )"}</span>
          </div>
          <div className="grid grid-cols-2">
            <h1>Terhitung Mulai Tanggal</h1>
            <span>
              {dateFormater(kepangkatan?.tanggal_mulai) || "( tidak ada data )"}
            </span>
          </div>
          <div className="grid grid-cols-2">
            <h1>Masa Kerja Golongan (Tahun)</h1>
            <span>{kepangkatan?.masa_kerja_tahun || "( tidak ada data )"}</span>
          </div>
          <div className="grid grid-cols-2">
            <h1>Masa Kerja Golongan (Bulan)</h1>
            <span>{kepangkatan?.masa_kerja_bulan || "( tidak ada data )"}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center">
        <Link
          href={`/kepangkatan/${id}/edit`}
          className="bg-primary rounded-xl py-2 px-4 text-white text-sm"
        >
          <i className="fi-rr-pencil"></i> Ajukan Perubahan Data
        </Link>
      </div>
    </MainLayout>
  );
};

export default Kepangkatan;
