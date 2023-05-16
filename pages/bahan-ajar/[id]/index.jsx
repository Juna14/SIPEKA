import { Action, MainLayout, Nav, Table } from "@/components";
import { fetchDetailBahanAjar } from "@/helper/api/apiSister";
import { dateFormater, dynamicSort } from "@/helper/constant";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const DetailBahanAjar = () => {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: bahan_ajar,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bahan_ajar", id],
    queryFn: () => fetchDetailBahanAjar(id),
  });
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 dark:text-white w-full h-max">
        <Nav title={"Detail Bahan Ajar"} />
        <div className="flex flex-col gap-2 justify-center bg-white dark:bg-slate-800 rounded-xl p-4 divide-y dark:divide-slate-500">
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Jenis Bahan Ajar</h1>
            <span className="flex-1">
              {bahan_ajar?.nama_jenis || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Kategori Capaian</h1>
            <span className="flex-1">
              {bahan_ajar?.kategori_capaian_luaran || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Aktivitas Litabmas</h1>
            <span className="flex-1">
              {bahan_ajar?.judul_litabmas || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Judul Bahan Ajar</h1>
            <span className="flex-1">
              {bahan_ajar?.judul || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Tanggal Terbit</h1>
            <span className="flex-1">
              {dateFormater(bahan_ajar?.tanggal_terbit) || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Penerbit</h1>
            <span className="flex-1">
              {bahan_ajar?.nama_penerbit || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Nomor SK Penugasan</h1>
            <span className="flex-1">
              {bahan_ajar?.sk_penugasan || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Tanggal SK Penugasan</h1>
            <span className="flex-1">
              {dateFormater(bahan_ajar?.tanggal_sk_penugasan) ||
                "( tidak ada data )"}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
            Penulis Dosen
          </h1>
          <Table
            searchAble
            columns={[
              { key: "id", title: "No", dataType: "numbering" },
              { key: "nama", title: "nama" },
              { key: "urutan", title: "urutan" },
              { key: "afiliasi", title: "afiliasi" },
              { key: "peran", title: "peran" },
            ]}
            data={bahan_ajar?.penulis.filter((item) => item.jenis === "Dosen")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
            Penulis Mahasiswa
          </h1>
          <Table
            isLoading={isLoading}
            searchAble
            columns={[
              { key: "id", title: "No", dataType: "numbering" },
              { key: "nama", title: "nama" },
              { key: "urutan", title: "urutan" },
              { key: "afiliasi", title: "afiliasi" },
              { key: "peran", title: "peran" },
            ]}
            data={bahan_ajar?.penulis.filter(
              (item) => item.jenis === "Mahasiswa"
            )}
          />
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
                render: (val) => dateFormater(val.tanggal_diajukan),
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
            data={bahan_ajar?.dokumen}
          />
        </div>
        <div className="flex justify-between items-center">
          <Link
            href={`/bahan_ajar/${id}/edit`}
            className="bg-primary rounded-xl py-2 px-4 text-white text-sm"
          >
            <i className="fi-rr-pencil"></i> Ubah Data
          </Link>
          <Link
            href={`/bahan_ajar/${id}/edit`}
            className="bg-primary rounded-xl py-2 px-4 text-white text-sm"
          >
            <i className="fi-rr-pencil"></i> Laporkan Kesalahan
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default DetailBahanAjar;
