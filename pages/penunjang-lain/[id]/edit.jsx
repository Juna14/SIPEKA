import { FormCreatePenunjangLain, MainLayout, Nav } from "@/components";
import { fetchDetailPenunjangLain } from "@/helper/api/apiSister";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const PenunjangLainEdit = () => {
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {}, [router.isReady]);

  const { data: penunjang_lain, isLoading } = useQuery({
    queryKey: ["penunjang_lain", id],
    queryFn: async () => await fetchDetailPenunjangLain(id),
    networkMode: "offlineFirst",
  });

  return (
    <MainLayout>
      <div className="flex flex-col gap-8">
        <Nav title={"Ubah Anggota Profesi"} />
        <div className="flex flex-col gap-4 dark:text-white w-full h-full">
          <h1 className="text-md font-bold capitalize">
            Formulir Ubah Penunjang Lain
          </h1>
          <div className="flex flex-col gap-4 bg-white dark:bg-slate-800 px-4 py-8 rounded-xl ">
            {isLoading ? (
              "Memuat..."
            ) : (
              <FormCreatePenunjangLain initialValues={penunjang_lain} />
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PenunjangLainEdit;
