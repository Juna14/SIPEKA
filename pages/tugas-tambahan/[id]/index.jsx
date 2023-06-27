import { Action, MainLayout, Nav, Table } from "@/components";
import { fetchDetailTugasTambahan } from "@/helper/api/apiSister";
import { dateFormater } from "@/helper/constant";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const DetailTugasTambahan = () => {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: TugasTambahan,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["TugasTambahan", id],
    queryFn: () => fetchDetailTugasTambahan(id),
  });
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 dark:text-white w-full h-max">
        <Nav title={"Detail TugasTambahan"} />
        <h1 className="text-md capitalize font-bold drop-shadow-lg shadow-white">
          Detail Tugas Tambahan
        </h1>
        <div className="flex flex-col gap-2 justify-center bg-white dark:bg-slate-800 rounded-xl p-4 divide-y dark:divide-slate-500">
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Kategori Kegiatan</h1>
            <span className="flex-1">
              {TugasTambahan?.kategori_kegiatan || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Jenis Tugas Tambahan</h1>
            <span className="flex-1">
              {TugasTambahan?.jenis_tugas || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Unit Kerja</h1>
            <span className="flex-1">
              {TugasTambahan?.unit_kerja || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Instansi</h1>
            <span className="flex-1">
              {TugasTambahan?.perguruan_tinggi || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Jumlah Jam Diakui</h1>
            <span className="flex-1">
              {TugasTambahan?.jumlah_jam || "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Nomor SK Penugasan</h1>
            <span className="flex-1">
              {dateFormater(TugasTambahan?.sk_penugasan) ||
                "( tidak ada data )"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">
              Terhitung Mulai Tanggal
            </h1>
            <span className="flex-1">
              {TugasTambahan?.tanggal_mulai_tugas || "( tidak ada data )"}
            </span>
          </div>

          <div className="flex flex-col lg:flex-row p-2 hover:bg-blue-50 dark:hover:bg-slate-500">
            <h1 className="w-[300px] text-slate-500">Tanggal Selesai</h1>
            <span className="flex-1">
              {TugasTambahan?.tanggal_selesai_tugas || "( tidak ada data )"}
            </span>
          </div>
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
            data={TugasTambahan?.dokumen}
          />
        </div>
        <div className="flex justify-between items-center">
          <Link
            href={`/tugas-tambahan/${id}/edit`}
            className="bg-primary rounded-xl py-2 px-4 text-white text-sm"
          >
            <i className="fi-rr-pencil"></i> Ubah Data
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default DetailTugasTambahan;
