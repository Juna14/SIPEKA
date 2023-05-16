import {
  Action,
  Button,
  MainLayout,
  Nav,
  PeriodeSelection,
  Table,
} from "@/components";
import { fetchListPengujianMahasiswa } from "@/helper/api/apiSister";
import { id } from "@/helper/constant";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useState } from "react";

const PengujianMahasiswa = () => {
  const [semester, setSemester] = useState();
  const router = useRouter();
  const {
    data: pengujian_mahasiswa,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["pengujian_mahasiswa", semester],
    queryFn: () => fetchListPengujianMahasiswa(id, semester),
  });
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 w-full">
        <Nav title={"Pengujian Mahasiswa"} />
        <div className="flex flex-col  gap-2 p-4 bg-blue-200 rounded-lg divide-y divide-blue-400 text-sm shadow-lg">
          <h1 className="text-primary">
            <b>Info :</b> Sumber data pengisian berasal dari Feeder PDDIKTI yang
            ada pada masing-masing PT, silahkan menghubungi Admin PT untuk
            penginputan/perbaikan data.
          </h1>
        </div>
        <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
          Pengujian Mahasiswa
        </h1>
        <div className="flex flex-col md:flex-row gap-2 justify-between">
          <Button
            size={"small"}
            icon={<i className="fi-rr-cloud-download-alt pt-1"></i>}
            text="Import Pengujian Mahasiswa"
            onClick={() => {
              router.push("/pengujian-mahasiswa/list-data");
            }}
          />
          <PeriodeSelection onChange={(e) => setSemester(e.target.value)} />
        </div>
        <Table
          searchAble
          columns={[
            { key: "id", title: "No.", dataType: "numbering" },
            { key: "judul", title: "Judul Pengujian" },
            { key: "bidang_keilmuan", title: "Bidang Keilmuan" },
            { key: "jenis_pengujian", title: "Jenis Pengujian" },
            { key: "program_studi", title: "Program Studi" },
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
                  baseUrl={"/pengujian-mahasiswa"}
                  action={["detail", "edit-bidang-ilmu"]}
                />
              ),
            },
          ]}
          data={pengujian_mahasiswa}
          isLoading={isLoading}
        />
      </div>
    </MainLayout>
  );
};

export default PengujianMahasiswa;
