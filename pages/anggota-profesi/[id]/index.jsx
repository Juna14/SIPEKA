import { Action, MainLayout, Nav, Table } from "@/components";
import { fetchDetailAnggotaProfesi } from "@/helper/api/apiSister";
import { dateFormater } from "@/helper/constant";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const DetailAnggotaProfesi = () => {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: anggota_profesi,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["anggota_profesi", id],
    queryFn: () => fetchDetailAnggotaProfesi(id),
  });
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 dark:text-white w-full h-max">
        <Nav title={"Detail Anggota Profesi"} />
        <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
          Detail Anggota Profesi
        </h1>
        <div className="flex flex-col gap-2 justify-center bg-white dark:bg-slate-800 rounded-xl p-4 divide-y dark:divide-slate-500">
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Kategori Kegiatan</h1>
            <span className="flex-1">
              {anggota_profesi?.kategori_kegiatan || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Nama Organisasi</h1>
            <span className="flex-1">
              {anggota_profesi?.nama_organisasi || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Peran</h1>
            <span className="flex-1">
              {anggota_profesi?.peran || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Mulai Keanggotaan</h1>
            <span className="flex-1">
              {dateFormater(anggota_profesi?.tanggal_mulai_keanggotaan) ||
                "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Selesai Keanggotaan</h1>
            <span className="flex-1">
              {dateFormater(anggota_profesi?.tanggal_selesai_keanggotaan) ||
                "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Instansi Profesi</h1>
            <span className="flex-1">
              {anggota_profesi?.instansi_profesi || "( tidak ada data )"}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
            Dokumen
          </h1>
          <Table
            isLoading={isLoading}
            searchAble={true}
            columns={[
              { key: "id", title: "No", dataType: "numbering" },
              { key: "nama", title: "nama" },
              { key: "jenis_dokumen", title: "jenis dokumen" },
              { key: "nama_file", title: "nama file" },
              { key: "jenis_file", title: "jenis file" },
              {
                key: "tanggal_upload",
                title: "tanggal upload",
                render: (val) => dateFormater(val.tanggal_upload),
              },
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
            data={anggota_profesi?.dokumen}
          />
        </div>
        <div className="flex justify-between items-center">
          <Link
            href={`/anggota_profesi/${id}/edit`}
            className="bg-primary rounded-xl py-2 px-4 text-white text-sm"
          >
            <i className="fi-rr-pencil"></i> Ubah Data
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default DetailAnggotaProfesi;
