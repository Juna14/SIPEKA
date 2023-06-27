import {
  FormCreateJabatanFungsional,
  MainLayout,
  Nav,
  TabRiwayatAjuanPerubahanData,
} from "@/components";
import { fetchDetailJabatanFungsional } from "@/helper/api/apiSister";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";

const JabatanFungsionalEdit = () => {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: jabatan_fungsional,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["jabatan_fungsional", id],
    queryFn: () => fetchDetailJabatanFungsional(id),
    networkMode: "offlineFirst",
  });
  return (
    <MainLayout>
      <div className="flex flex-col gap-8">
        <Nav title={"Ubah Jabatan Fungsional"} />
        <div className="flex flex-col gap-4 dark:text-white w-full h-full">
          <h1 className="text-md font-bold capitalize">
            Formulir Tambah Riwayat Jabatan Fungsional
          </h1>
          <div className="grid grid-flow-col gap-4 bg-white dark:bg-slate-800 px-4 py-8 rounded-xl ">
            {isLoading ? (
              "Memuat..."
            ) : (
              <FormCreateJabatanFungsional initialValues={jabatan_fungsional} />
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default JabatanFungsionalEdit;
