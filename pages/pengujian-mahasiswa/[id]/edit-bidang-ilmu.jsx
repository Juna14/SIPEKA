import {
  KelompokBidangSelection,
  FormCreateBimbinganMahasiswa,
  MainLayout,
  Nav,
  Button,
} from "@/components";
import { fetchDetailBimbinganMahasiswa } from "@/helper/api/apiSister";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const BimbinganMahasiswaEditBidangIlmu = () => {
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {}, [router.isReady]);

  const {
    data: bimbingan_mahasiswa,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["bimbingan_mahasiswa", id],
    queryFn: async () => await fetchDetailBimbinganMahasiswa(id),
    networkMode: "offlineFirst",
  });
  {
    isLoading && <p>Loading...</p>;
  }
  {
    isError && <p>Error fetching data</p>;
  }
  return (
    <MainLayout>
      <div className="flex flex-col gap-8">
        <Nav title={"Edit Bimbingan Mahasiswa"} />
        <div className="flex flex-col gap-4 dark:text-white w-full h-full">
          <h1 className="text-md font-bold uppercase">
            Form Edit Bimbingan Mahasiswa
          </h1>
          <div className="grid grid-flow-row gap-4 bg-white dark:bg-slate-800 px-4 py-8 rounded-xl ">
            <h1 className="text-lg font-bold text-slate-600 dark:text-slate-500">
              {bimbingan_mahasiswa?.judul}
            </h1>
            <div className="flex gap-8">
              <div className="flex flex-col gap-2">
                <span className="font-bold uppercase text-sm">urutan</span>
              </div>
              <KelompokBidangSelection />
              <div className="flex flex-col gap-2">
                <span className="font-bold uppercase text-sm">Action</span>
                <Button text={"Simpan"} size={"small"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BimbinganMahasiswaEditBidangIlmu;
