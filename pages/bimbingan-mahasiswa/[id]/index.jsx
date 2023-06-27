import { Action, MainLayout, Nav, Table } from "@/components";
import { fetchDetailBimbinganMahasiswa } from "@/helper/api/apiSister";
import { dateFormater, dynamicSort } from "@/helper/constant";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const DetailBimbinganMahasiswa = () => {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: bimbingan_mahasiswa,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bimbingan_mahasiswa", id],
    queryFn: () => fetchDetailBimbinganMahasiswa(id),
  });
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 dark:text-white w-full h-max">
        <Nav title={"Detail Bimbingan Mahasiswa"} />
        <h1 className="text-md capitalize font-bold drop-shadow-lg shadow-white">
          Detail Bimbingan Mahasiswa
        </h1>
        <div className="flex flex-col gap-2 justify-center bg-white dark:bg-slate-800 rounded-xl p-4 divide-y dark:divide-slate-500">
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">
              Judul Aktivitas Bimbingan
            </h1>
            <span className="flex-1">
              {bimbingan_mahasiswa?.judul || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Lokasi Kegiatan</h1>
            <span className="flex-1">
              {bimbingan_mahasiswa?.lokasi || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Nomor SK Penugasan</h1>
            <span className="flex-1">
              {bimbingan_mahasiswa?.sk_penugasan || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Tanggal SK Penugasan</h1>
            <span className="flex-1">
              {dateFormater(bimbingan_mahasiswa?.tanggal_sk_penugasan) ||
                "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Keterangan Aktivitas</h1>
            <span className="flex-1">
              {bimbingan_mahasiswa?.keterangan || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Apakah Komunal ?</h1>
            <span className="flex-1">
              {bimbingan_mahasiswa?.komunal
                ? "Ya"
                : "Tidak" || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Jenis Bimbingan</h1>
            <span className="flex-1">
              {bimbingan_mahasiswa?.jenis_bimbingan || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">
              Program Studi Mahasiswa
            </h1>
            <span className="flex-1">
              {bimbingan_mahasiswa?.program_studi || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Semester</h1>
            <span className="flex-1">
              {bimbingan_mahasiswa?.semester || "( tidak ada data )"}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
            Dosen Pembimbing
          </h1>
          <Table
            columns={[
              { key: "id", title: "No", dataType: "numbering" },
              { key: "nama", title: "nama" },
              { key: "kategori_kegiatan", title: "kategori kegiatan" },
              { key: "urutan", title: "urutan promotor" },
            ]}
            data={bimbingan_mahasiswa?.dosen.sort(dynamicSort("urutan"))}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
            Mahasiswa yang Dibimbing
          </h1>
          <Table
            isLoading={isLoading}
            columns={[
              { key: "id", title: "No", dataType: "numbering" },
              {
                key: "nama",
                title: "nama",
                render: (val) => (
                  <div className="flex flex-col">
                    <span>{val.nama}</span>{" "}
                    <span className="text-xs">
                      NIPD:{" "}
                      <span className="font-semibold">{val.nomor_induk}</span>
                    </span>
                  </div>
                ),
              },
              { key: "peran", title: "peran" },
            ]}
            data={bimbingan_mahasiswa?.mahasiswa}
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
              {
                key: "tanggal_upload",
                title: "tanggal upload",
                dataType: "date",
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
            data={bimbingan_mahasiswa?.dokumen}
          />
        </div>
        {/* <div className="flex justify-between items-center">
          <Link
            href={`/bimbingan_mahasiswa/${id}/edit`}
            className="bg-primary rounded-xl py-2 px-4 text-white text-sm"
          >
            <i className="fi-rr-pencil"></i> Ubah Data
          </Link>
          <Link
            href={`/bimbingan_mahasiswa/${id}/edit`}
            className="bg-primary rounded-xl py-2 px-4 text-white text-sm"
          >
            <i className="fi-rr-pencil"></i> Laporkan Kesalahan
          </Link>
        </div> */}
      </div>
    </MainLayout>
  );
};

export default DetailBimbinganMahasiswa;
