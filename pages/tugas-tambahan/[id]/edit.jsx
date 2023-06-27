import { FormCreateTugasTambahan, MainLayout, Nav } from "@/components";
import { fetchDetailTugasTambahan } from "@/helper/api/apiSister";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const TugasTambahanEdit = () => {
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {}, [router.isReady]);

  const { data: TugasTambahan, isLoading } = useQuery({
    queryKey: ["TugasTambahan", id],
    queryFn: async () => await fetchDetailTugasTambahan(id),
    networkMode: "offlineFirst",
  });

  return (
    <MainLayout>
      <div className="flex flex-col gap-8">
        <Nav title={"Ubah Tugas Tambahan"} />
        <div className="flex flex-col gap-4 dark:text-white w-full h-full">
          <h1 className="text-md font-bold capitalize">
            Formulir Ubah Tugas Tambahan
          </h1>
          <div className="flex flex-col gap-4 bg-white dark:bg-slate-800 px-4 py-8 rounded-xl ">
            {isLoading ? (
              "Memuat..."
            ) : (
              <FormCreateTugasTambahan initialValues={TugasTambahan} />
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default TugasTambahanEdit;
