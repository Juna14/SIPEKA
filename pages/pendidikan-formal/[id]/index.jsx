import { MainLayout, Nav } from "@/components";
import { fetchDetailPendidikanFormal } from "@/helper/api/apiSister";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";

const DetailPendidikanFormal = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useQuery({
    queryKey: ["pendidikan-formal", id],
    queryFn: () => fetchDetailPendidikanFormal(id),
  });
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 w-full">
        <Nav title={"Detail Pendidikan Formal"} />
        <h1 className="text-md capitalize font-bold drop-shadow-lg shadow-white">
          Detail Pendidikan Formal
        </h1>
        <div className="flex flex-col gap-2 justify-center bg-white dark:bg-slate-800 rounded-xl p-4 divide-y dark:divide-slate-500">
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Kategori</h1>
            <span className="flex-1">
              {data?.kategori_kegiatan || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Jenjang Studi</h1>
            <span className="flex-1">
              {data?.jenjang_pendidikan || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Gelar Akademik</h1>
            <span className="flex-1">
              {data?.gelar_akademik || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Bidang Studi</h1>
            <span className="flex-1">
              {data?.bidang_studi || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Perguruan Tinggi</h1>
            <span className="flex-1">
              {data?.nama_perguruan_tinggi || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Program Studi</h1>
            <span className="flex-1">
              {data?.program_studi || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Tahun Masuk</h1>
            <span className="flex-1">
              {data?.tahun_masuk || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Tahun Lulus</h1>
            <span className="flex-1">
              {data?.tahun_lulus || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Tanggal Kelulusan</h1>
            <span className="flex-1">
              {data?.tanggal_lulus || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Nomor Induk</h1>
            <span className="flex-1">
              {data?.nomor_induk || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Jumlah Semester</h1>
            <span className="flex-1">
              {data?.jumlah_semester || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Jumlah SKS kelulusan</h1>
            <span className="flex-1">
              {data?.jumlah_sks || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">IPK Kelulusan</h1>
            <span className="flex-1">{data?.ipk || "( tidak ada data )"}</span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">No Sk Penyetaraan</h1>
            <span className="flex-1">
              {data?.sk_penyetaraan || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Tanggal Sk Penyetaraan</h1>
            <span className="flex-1">
              {data?.tanggal_sk_penyetaraan || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Nomor Ijazah</h1>
            <span className="flex-1">
              {data?.nomor_ijasah || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Judul Tesis/Disertasi</h1>
            <span className="flex-1">
              {data?.judul_tugas_akhir || "( tidak ada data )"}
            </span>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DetailPendidikanFormal;
