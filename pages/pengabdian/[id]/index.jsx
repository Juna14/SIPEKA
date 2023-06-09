import { Action, MainLayout, Nav, Table } from "@/components";
import { fetchDetailPengabdian } from "@/helper/api/apiSister";
import { dateFormater } from "@/helper/constant";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Swal from "sweetalert2";

const DetailPengabdian = () => {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: pengabdian,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["pengabdian", id],
    queryFn: () => fetchDetailPengabdian(id),
  });
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 dark:text-white w-full h-max">
        <Nav title={"Detail Pengabdian"} />
        <h1 className="text-md capitalize font-bold drop-shadow-lg shadow-white">
          Detail Pengabdian
        </h1>
        <div className="flex flex-col gap-2 justify-center bg-white dark:bg-slate-800 rounded-xl p-4 divide-y dark:divide-slate-500">
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Skim Kegiatan</h1>
            <span className="flex-1">
              {pengabdian?.jenis_skim || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Tahun Anggaran</h1>
            <span className="flex-1">
              {pengabdian?.tahun_kegiatan || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Litabmas Sebelumnya</h1>
            <span className="flex-1">
              {pengabdian?.litabmas_sebelumnya || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Afiliasi</h1>
            <span className="flex-1">
              {pengabdian?.afiliasi || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Kelompok Bidang</h1>
            <span className="flex-1">
              {pengabdian?.kelompok_bidang || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Nomor SK Penugasan</h1>
            <span className="flex-1">
              {pengabdian?.sk_penugasan || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Tanggal SK Penugasan</h1>
            <span className="flex-1">
              {dateFormater(pengabdian?.tanggal_sk_penugasan) ||
                "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Lama Kegiatan (tahun)</h1>
            <span className="flex-1">
              {pengabdian?.lama_kegiatan || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Judul Kegiatan</h1>
            <span className="flex-1">
              {pengabdian?.judul || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Lokasi Kegiatan</h1>
            <span className="flex-1">
              {pengabdian?.lokasi || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Tahun Pelaksanaan Ke</h1>
            <span className="flex-1">
              {pengabdian?.tahun_pelaksanaan_ke || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Dana Dari Dikti (Rp.)</h1>
            <span className="flex-1">
              {pengabdian?.dana_dikti.toLocaleString() || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">
              Dana Dari Perguruan Tinggi (Rp.)
            </h1>
            <span className="flex-1">
              {pengabdian?.dana_perguruan_tinggi.toLocaleString() ||
                "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">
              Dana Dari Institusi Lain (Rp.)
            </h1>
            <span className="flex-1">
              {pengabdian?.dana_institusi_lain.toLocaleString() ||
                "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">In Kind</h1>
            <span className="flex-1">
              {pengabdian?.in_kind || "( tidak ada data )"}
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
              { key: "peran", title: "peran" },
              {
                key: "stat_aktif",
                title: "aktif",
                render: (val) => (val.stat_aktif ? "Aktif" : "Tidak Aktif"),
              },
            ]}
            data={pengabdian?.anggota.filter((item) => item.jenis === "Dosen")}
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
              { key: "peran", title: "peran" },
              {
                key: "stat_aktif",
                title: "aktif",
                render: (val) => (val.stat_aktif ? "Aktif" : "Tidak Aktif"),
              },
            ]}
            data={pengabdian?.anggota.filter(
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
              { key: "id", title: "No", dataType: "numbering" },
              { key: "nama", title: "nama" },
              { key: "peran", title: "peran" },
              {
                key: "aktif",
                title: "aktif",
                render: (val) => (val.aktif ? "Aktif" : "Tidak Aktif"),
              },
            ]}
            data={pengabdian?.anggota.filter((item) => item.jenis === "Other")}
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
            data={pengabdian?.dokumen}
          />
        </div>
        <div className="flex justify-between items-center">
          <Link
            href={`/pengabdian/${id}/edit`}
            className="bg-primary rounded-xl py-2 px-4 text-white text-sm"
          >
            <i className="fi-rr-pencil"></i> Ubah Data
          </Link>
          <button
            onClick={() =>
              Swal.fire({
                title:
                  "Maaf, Anda tidak mempunyai akses untuk membuka halaman tersebut",
                icon: "warning",
                confirmButtonText: "Tutup",
              })
            }
            className="bg-primary rounded-xl py-2 px-4 text-white text-sm"
          >
            <i className="fi-rr-pencil"></i> Laporkan Kesalahan
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default DetailPengabdian;
