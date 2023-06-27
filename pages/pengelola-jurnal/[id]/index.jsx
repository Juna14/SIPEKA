import { Action, MainLayout, Nav, Table } from "@/components";
import { fetchDetailPengelolaJurnal } from "@/helper/api/apiSister";
import { dateFormater } from "@/helper/constant";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const DetailPengelolaJurnal = () => {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: pengelola_jurnal,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["pengelola_jurnal", id],
    queryFn: () => fetchDetailPengelolaJurnal(id),
  });
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 dark:text-white w-full h-max">
        <Nav title={"Detail Pengelola Jurnal"} />
        <h1 className="text-md capitalize font-bold drop-shadow-lg shadow-white">
          Detail Pengelola Jurnal
        </h1>
        <div className="flex flex-col gap-2 justify-center bg-white dark:bg-slate-800 rounded-xl p-4 divide-y dark:divide-slate-500">
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Kategori Kegiatan</h1>
            <span className="flex-1">
              {pengelola_jurnal?.kategori_kegiatan || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Media Publikasi</h1>
            <span className="flex-1">
              {pengelola_jurnal?.media_publikasi || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Peran</h1>
            <span className="flex-1">
              {pengelola_jurnal?.peran || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Nomor SK Penugasan</h1>
            <span className="flex-1">
              {pengelola_jurnal?.sk_penugasan || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">
              Terhitung Mulai Tanggal
            </h1>
            <span className="flex-1">
              {dateFormater(pengelola_jurnal?.tanggal_mulai) ||
                "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Tanggal Selesai</h1>
            <span className="flex-1">
              {dateFormater(pengelola_jurnal?.tanggal_selesai) ||
                "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Status Aktif</h1>
            <span className="flex-1">
              {pengelola_jurnal?.aktif || "( tidak ada data )"}
            </span>
          </div>
        </div>

        {/* <div className="flex flex-col gap-2">
          <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
            Anggota Dosen
          </h1>
          <Table
            isLoading={isLoading}
            
            columns={[
              { key: "id", title: "No", dataType: "numbering" },
              { key: "nama", title: "nama" },
              { key: "peran", title: "peran" },
              {
                key: "stat_aktif",
                title: "aktif",
                render: (val) => (val.stat_aktif ? "Aktif" : "Tidak Aktif"),
              },
            ]}
            data={pengelola_jurnal?.anggota.filter(
              (item) => item.jenis === "Dosen"
            )}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
            Anggota Mahasiswa
          </h1>
          <Table
            isLoading={isLoading}
            
            columns={[
              { key: "id", title: "No" , dataType: "numbering"},
              { key: "nama", title: "nama" },
              { key: "peran", title: "peran" },
              {
                key: "stat_aktif",
                title: "aktif",
                render: (val) => (val.stat_aktif ? "Aktif" : "Tidak Aktif"),
              },
            ]}
            data={pengelola_jurnal?.anggota.filter(
              (item) => item.jenis === "Mahasiswa"
            )}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
            Anggota Non Civitas Akademika
          </h1>
          <Table
            
            columns={[
              { key: "id", title: "No" , dataType: "numbering"},
              { key: "nama", title: "nama" },
              { key: "peran", title: "peran" },
              {
                key: "aktif",
                title: "aktif",
                render: (val) => (val.aktif ? "Aktif" : "Tidak Aktif"),
              },
            ]}
            data={pengelola_jurnal?.anggota.filter(
              (item) => item.jenis === "Other"
            )}
          />
        </div> */}
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
            data={pengelola_jurnal?.dokumen}
          />
        </div>
        <div className="flex justify-between items-center">
          <Link
            href={`/pengelola-jurnal/${id}/edit`}
            className="bg-primary rounded-xl py-2 px-4 text-white text-sm"
          >
            <i className="fi-rr-pencil"></i> Ubah Data
          </Link>
          {/* <Link
            href={`/pengelola_jurnal/${id}/edit`}
            className="bg-primary rounded-xl py-2 px-4 text-white text-sm"
          >
            <i className="fi-rr-pencil"></i> Laporkan Kesalahan
          </Link> */}
        </div>
      </div>
    </MainLayout>
  );
};

export default DetailPengelolaJurnal;
