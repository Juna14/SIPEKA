import { FormCreatePengabdian, MainLayout, Nav } from "@/components";
import { fetchDetailPengabdian } from "@/helper/api/apiSister";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const PengabdianEdit = () => {
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {}, [router.isReady]);

  const { data: pengabdian, isLoading } = useQuery({
    queryKey: ["pengabdian", id],
    queryFn: async () => await fetchDetailPengabdian(id),
    networkMode: "offlineFirst",
  });

  return (
    <MainLayout>
      <div className="flex flex-col gap-8">
        <Nav title={"Ubah Pengabdian"} />
        <div className="flex flex-col gap-4 dark:text-white w-full h-full">
          <h1 className="text-md font-bold capitalize">
            Formulir Ubah Pengabdian
          </h1>
          <div className="flex flex-col gap-4 bg-white dark:bg-slate-800 px-4 py-8 rounded-xl ">
            {isLoading ? (
              "Memuat..."
            ) : (
              <FormCreatePengabdian initialValues={pengabdian} />
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PengabdianEdit;
