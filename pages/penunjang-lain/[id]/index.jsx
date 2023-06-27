import { Action, MainLayout, Nav, Table } from "@/components";
import { fetchDetailPenunjangLain } from "@/helper/api/apiSister";
import { dateFormater } from "@/helper/constant";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const DetailPenunjangLain = () => {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: penunjang_lain,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["penunjang_lain", id],
    queryFn: () => fetchDetailPenunjangLain(id),
  });
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 dark:text-white w-full h-max">
        <Nav title={"Detail Penunjang Lain"} />
        <h1 className="text-md capitalize font-bold drop-shadow-lg shadow-white">
          Detail Penunjang Lain
        </h1>
        <div className="flex flex-col gap-2 justify-center bg-white dark:bg-slate-800 rounded-xl p-4 divide-y dark:divide-slate-500">
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Kategori Kegiatan</h1>
            <span className="flex-1">
              {penunjang_lain?.kategori_kegiatan || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Jenis Kegiatan</h1>
            <span className="flex-1">
              {penunjang_lain?.jenis_kepanitiaan || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Nama Kegiatan</h1>
            <span className="flex-1">
              {penunjang_lain?.nama || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Instansi</h1>
            <span className="flex-1">
              {penunjang_lain?.instansi || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Tingkat</h1>
            <span className="flex-1">
              {penunjang_lain?.tingkat || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">No Sk Penugasan</h1>
            <span className="flex-1">
              {penunjang_lain?.sk_penugasan || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Tanggal Mulai</h1>
            <span className="flex-1">
              {dateFormater(penunjang_lain?.tanggal_mulai) ||
                "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Tanggal Selesai</h1>
            <span className="flex-1">
              {dateFormater(penunjang_lain?.tanggal_selesai) ||
                "( tidak ada data )"}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
            Anggota
          </h1>
          <Table
            isLoading={isLoading}
            columns={[
              { key: "id", title: "No", dataType: "numbering" },
              { key: "nama", title: "nama" },
              { key: "peran", title: "peran" },
            ]}
            data={penunjang_lain?.anggota_dosen}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
            Dokumen
          </h1>
          <Table
            isLoading={isLoading}
            columns={[
              { key: "id", title: "No", dataType: "numbering" },
              { key: "nama", title: "nama" },
              { key: "jenis_dokumen", title: "jenis dokumen" },
              { key: "nama_file", title: "nama file" },
              { key: "jenis_file", title: "jenis file" },
              { key: "tanggal_upload", title: "tanggal upload" },
              {
                key: "tautan",
                title: "tautan",
                render: (val) =>
                  val.tautan ? (
                    <Link href={val.tautan} className="text-primary">
                      Link
                    </Link>
                  ) : (
                    "(tidak ada data)"
                  ),
              },
              {
                key: "id",
                title: "aksi",
                align: "center",
                render: (val) => (
                  <Action
                    param={val}
                    baseUrl={"/dokumen"}
                    action={["delete", "detail", "edit"]}
                  />
                ),
              },
            ]}
            data={penunjang_lain?.dokumen}
          />
        </div>
        <div className="flex justify-between items-center">
          <Link
            href={`/penunjang-lain/${id}/edit`}
            className="bg-primary rounded-xl py-2 px-4 text-white text-sm"
          >
            <i className="fi-rr-pencil"></i> Ubah Data
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default DetailPenunjangLain;
