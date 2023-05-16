import { Action, MainLayout, Nav, Table } from "@/components";
import { fetchDetailPenempatan } from "@/helper/api/api";
import { dateFormater } from "@/helper/constant";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";

const Penempatan = () => {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: penempatan,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["penempatan"],
    queryFn: () => fetchDetailPenempatan(id),
  });
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 dark:text-white w-full h-max">
        <Nav title={"Detail Penempatan"} />
        <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
          Detail Penempatan
        </h1>
        <div className="flex flex-col gap-2 justify-center bg-white dark:bg-slate-800 rounded-xl p-4 divide-y dark:divide-slate-500">
          <div className="grid grid-cols-2">
            <h1>Status</h1>
            <span>
              {penempatan?.data.status_kepegawaian || "( tidak ada data )"}
            </span>
          </div>
          <div className="grid grid-cols-2">
            <h1>Jenjang Pendidikan</h1>
            <span>
              {penempatan?.data.jenjang_pendidikan || "( tidak ada data )"}
            </span>
          </div>
          <div className="grid grid-cols-2">
            <h1>Unit</h1>
            <span>{penempatan?.data.unit_kerja || "( tidak ada data )"}</span>
          </div>
          <div className="grid grid-cols-2">
            <h1>Perguruan Tinggi</h1>
            <span>
              {penempatan?.data.perguruan_tinggi || "( tidak ada data )"}
            </span>
          </div>
          <div className="grid grid-cols-2">
            <h1>No. Surat Tugas</h1>
            <span>{penempatan?.data.surat_tugas || "( tidak ada data )"}</span>
          </div>
          <div className="grid grid-cols-2">
            <h1>Terhitung Mulai Tanggal</h1>
            <span>
              {dateFormater(penempatan?.data.tanggal_mulai) ||
                "( tidak ada data )"}
            </span>
          </div>
          <div className="grid grid-cols-2">
            <h1>Tanggal Surat Keluar</h1>
            <span>
              {dateFormater(penempatan?.data.tanggal_surat_tugas) ||
                "( tidak ada data )"}
            </span>
          </div>
          <div className="grid grid-cols-2">
            <h1>Tanggal Keluar</h1>
            <span>
              {dateFormater(penempatan?.data.tanggal_keluar) ||
                "( tidak ada data )"}
            </span>
          </div>
          <div className="grid grid-cols-2">
            <h1>Keterangan Keluar</h1>
            <span>
              {penempatan?.data.keterangan_keluar || "( tidak ada data )"}
            </span>
          </div>
          <div className="grid grid-cols-2">
            <h1>Ikatan Kerja</h1>
            <span>{penempatan?.data.ikatan_kerja || "( tidak ada data )"}</span>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Penempatan;
