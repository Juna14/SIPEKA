import {
  Action,
  Button,
  MainLayout,
  Nav,
  PeriodeSelection,
  Table,
} from "@/components";
import { fetchListPengajaran } from "@/helper/api/apiSister";
import { id } from "@/helper/constant";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Pengajaran = () => {
  const [semester, setSemester] = useState();
  const router = useRouter();
  const {
    data: pengajaran,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["pengajaran", semester],
    queryFn: () => fetchListPengajaran(id, semester),
  });

  return (
    <MainLayout>
      <div className="flex flex-col gap-4 w-full">
        <Nav title={"Pengajaran"} />
        <div className="flex flex-col  gap-2 p-4 bg-blue-200 rounded-lg divide-y divide-blue-400 text-sm shadow-lg">
          <h1 className="text-primary">
            <b>Info :</b> Sumber data pengisian berasal dari Feeder PDDIKTI yang
            ada pada masing-masing PT, silahkan menghubungi Admin PT untuk
            penginputan/perbaikan data.
          </h1>
          <p className="text-primary">
            Data yang bisa ditarik untuk BKD adalah data pengajaran yang jenis
            matakuliah <b>selain Tugas akhir/Skripsi/Thesis/Disertasi</b>
          </p>
        </div>
        <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
          Pengajaran
        </h1>
        <div className="flex flex-col md:flex-row gap-2 justify-between">
          <Button
            size={"small"}
            icon={<i className="fi-rr-cloud-download-alt pt-1"></i>}
            text="Import Pengajaran"
            onClick={() => router.push("/pengajaran/list-data")}
          />
          <PeriodeSelection
            withPendek={false}
            onChange={(e) => {
              setSemester(e.target.value);
            }}
          />
        </div>

        <Table
          searchAble
          columns={[
            { key: "id", title: "No.", dataType: "numbering" },
            { key: "mata_kuliah", title: "Mata Kuliah" },
            {
              key: "jns_mk",
              title: "Jenis Mata Kuliah",
              render: (val) => (
                <span>{val.jns_mk === "A" ? "Wajib" : "Pilihan"}</span>
              ),
            },
            { key: "bidang_keilmuan", title: "Bidang Keilmuan" },
            {
              key: "kelas",
              title: "Kelas",
            },
            {
              key: "jumlah_mahasiswa",
              title: "Jumlah Mahasiswa",
            },
            {
              key: "sks",
              title: "SKS",
            },
            {
              key: "rubrik_bkd",
              title: "Rubrik BKD",
            },
            {
              key: "id",
              title: "aksi",
              align: "center",
              render: (val) => (
                <Action
                  param={val}
                  action={["detail", "edit-bidang-ilmu"]}
                  baseUrl={"/pengajaran"}
                />
              ),
            },
          ]}
          data={pengajaran}
          isLoading={isLoading}
        />
      </div>
    </MainLayout>
  );
};

export default Pengajaran;
