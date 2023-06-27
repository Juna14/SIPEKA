import { Action, MainLayout, Nav, Table } from "@/components";
import { fetchDetailKekayaanIntelektual } from "@/helper/api/apiSister";
import { dateFormater } from "@/helper/constant";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const DetailPaten = () => {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: paten,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["paten", id],
    queryFn: () => fetchDetailKekayaanIntelektual(id),
  });
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 dark:text-white w-full h-max">
        <Nav title={"Detail Paten"} />
        <h1 className="text-md capitalize font-bold drop-shadow-lg shadow-white">
          Detail Paten
        </h1>
        <div className="flex flex-col gap-2 justify-center bg-white dark:bg-slate-800 rounded-xl p-4 divide-y dark:divide-slate-500">
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Judul Karya/Kegiatan</h1>
            <span className="flex-1">
              {paten?.judul || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Jenis</h1>
            <span className="flex-1">
              {paten?.jenis_publikasi || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Kategori Capaian</h1>
            <span className="flex-1">
              {paten?.kategori_capaian_luaran || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Aktivitas Litabmas</h1>
            <span className="flex-1">
              {paten?.judul_litabmas || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Tanggal</h1>
            <span className="flex-1">
              {dateFormater(paten?.tanggal) || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Penyelenggara</h1>
            <span className="flex-1">
              {paten?.penerbit || "( tidak ada data )"}
            </span>
          </div>

          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Tahun External</h1>
            <span className="flex-1">
              {paten?.tahun_external || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">
              Keterangan/Petunjuk Akses
            </h1>
            <span className="flex-1">
              {paten?.keterangan || "( tidak ada data )"}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
            Anggota Dosen
          </h1>
          <Table
            isLoading={isLoading}
            columns={[
              { key: "id", title: "No", dataType: "numbering" },
              { key: "nama", title: "nama" },
              { key: "urutan", title: "urutan" },
              { key: "afiliasi", title: "afiliasi" },
              { key: "peran", title: "peran" },
              {
                key: "corresponding_author",
                title: "corresponding author",
                render: (val) => (val.corresponding_author ? "Ya" : "Tidak"),
              },
            ]}
            data={paten?.penulis.filter((item) => item.jenis === "Dosen")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
            Anggota Mahasiswa
          </h1>
          <Table
            isLoading={isLoading}
            columns={[
              { key: "id", title: "No", dataType: "numbering" },
              { key: "nama", title: "nama" },
              { key: "urutan", title: "urutan" },
              { key: "afiliasi", title: "afiliasi" },
              { key: "peran", title: "peran" },
              {
                key: "corresponding_author",
                title: "corresponding author",
                render: (val) => (val.corresponding_author ? "Ya" : "Tidak"),
              },
            ]}
            data={paten?.penulis.filter((item) => item.jenis === "Mahasiswa")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
            Anggota Non Civitas Akademika
          </h1>
          <Table
            columns={[
              { key: "id", title: "No", dataType: "numbering" },
              { key: "nama", title: "nama" },
              { key: "urutan", title: "urutan" },
              { key: "afiliasi", title: "afiliasi" },
              { key: "peran", title: "peran" },
              {
                key: "corresponding_author",
                title: "corresponding author",
                render: (val) => (val.corresponding_author ? "Ya" : "Tidak"),
              },
            ]}
            data={paten?.penulis.filter((item) => item.jenis === "Other")}
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
            data={paten?.dokumen}
          />
        </div>
        <div className="flex justify-between items-center">
          <Link
            href={`/paten/${id}/edit`}
            className="bg-primary rounded-xl py-2 px-4 text-white text-sm"
          >
            <i className="fi-rr-pencil"></i> Ubah Data
          </Link>
          {/* <Link
            href={`/paten/${id}/edit`}
            className="bg-primary rounded-xl py-2 px-4 text-white text-sm"
          >
            <i className="fi-rr-pencil"></i> Laporkan Kesalahan
          </Link> */}
        </div>
      </div>
    </MainLayout>
  );
};

export default DetailPaten;
