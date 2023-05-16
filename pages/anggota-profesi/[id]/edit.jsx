import { FormCreateAnggotaProfesi, MainLayout, Nav } from "@/components";
import { fetchDetailAnggotaProfesi } from "@/helper/api/apiSister";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const AnggotaProfesiEdit = () => {
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {}, [router.isReady]);

  const { data: anggota_profesi, isLoading } = useQuery({
    queryKey: ["anggota_profesi", id],
    queryFn: async () => await fetchDetailAnggotaProfesi(id),
    networkMode: "offlineFirst",
  });

  return (
    <MainLayout>
      <div className="flex flex-col gap-8">
        <Nav title={"Edit Anggota Profesi"} />
        <div className="flex flex-col gap-4 dark:text-white w-full h-full">
          <h1 className="text-md font-bold uppercase">
            Form Edit AnggotaProfesi
          </h1>
          <div className="flex flex-col gap-4 bg-white dark:bg-slate-800 px-4 py-8 rounded-xl ">
            {isLoading ? (
              "Loading..."
            ) : (
              <FormCreateAnggotaProfesi initialValues={anggota_profesi} />
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AnggotaProfesiEdit;
