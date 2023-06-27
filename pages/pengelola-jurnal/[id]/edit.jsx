import { FormCreatePengelolaJurnal, MainLayout, Nav } from "@/components";
import { fetchDetailPengelolaJurnal } from "@/helper/api/apiSister";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const PengelolaJurnalEdit = () => {
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {}, [router.isReady]);

  const { data: pengabdian_jurnal, isLoading } = useQuery({
    queryKey: ["pengabdian_jurnal", id],
    queryFn: async () => await fetchDetailPengelolaJurnal(id),
    networkMode: "offlineFirst",
  });

  return (
    <MainLayout>
      <div className="flex flex-col gap-8">
        <Nav title={"Ubah Data Pengelola Jurnal"} />
        <div className="flex flex-col gap-4 dark:text-white w-full h-full">
          <h1 className="text-md font-bold capitalize">
            Formulir Ubah Data Pengelola Jurnal
          </h1>
          <div className="flex flex-col gap-4 bg-white dark:bg-slate-800 px-4 py-8 rounded-xl ">
            {isLoading ? (
              "Memuat..."
            ) : (
              <FormCreatePengelolaJurnal initialValues={pengabdian_jurnal} />
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PengelolaJurnalEdit;
