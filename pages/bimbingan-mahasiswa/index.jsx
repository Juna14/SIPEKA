import {
  Action,
  Breadcrumbs,
  Button,
  MainLayout,
  Nav,
  PeriodeSelection,
  Select,
  Table,
} from "@/components";
import { fetchListBimbinganMahasiswa } from "@/helper/api/apiSister";
import { id } from "@/helper/constant";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useState } from "react";

const BimbinganMahasiswa = () => {
  const [semester, setSemester] = useState();
  const router = useRouter();
  const {
    data: bimbingan_mahasiswa,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bimbingan_mahasiswa", semester],
    queryFn: () => fetchListBimbinganMahasiswa(id, semester),
  });
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 w-full h-max">
        <Nav title={"Bimbingan Mahasiswa"} />
        <div className="flex flex-col  gap-2 p-4 bg-blue-200 rounded-lg divide-y divide-blue-400 text-sm shadow-lg">
          <h1 className="text-primary">
            <b>Info :</b> Sumber data pengisian berasal dari Feeder PDDIKTI yang
            ada pada masing-masing PT, silahkan menghubungi Admin PT untuk
            penginputan/perbaikan data.
          </h1>
        </div>
        <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
          Bimbingan Mahasiswa
        </h1>
        <div className="flex flex-col md:flex-row gap-2 justify-between">
          <Button
            size={"small"}
            icon={<i className="fi-rr-cloud-download-alt pt-1"></i>}
            text="Import Bimbingan Mahasiswa"
            onClick={() => router.push("/bimbingan-mahasiswa/list-data")}
          />
          <PeriodeSelection onChange={(e) => setSemester(e.target.value)} />
        </div>
        <Table
          columns={[
            { key: "id", title: "No.", dataType: "numbering" },
            { key: "semester", title: "Semester" },
            { key: "nm_kat", title: "Kategori Kegiatan" },
            { key: "judul", title: "Judul Bimbingan" },
            { key: "jenis_bimbingan", title: "Jenis Bimbingan" },
            {
              key: "program_studi",
              title: "Program Studi",
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
                  baseUrl={"/bimbingan-mahasiswa"}
                  action={["detail", "edit-bidang-ilmu"]}
                />
              ),
            },
          ]}
          data={bimbingan_mahasiswa}
          isLoading={isLoading}
        />
      </div>
    </MainLayout>
  );
};

export default BimbinganMahasiswa;
