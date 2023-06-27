import { FormCreatePenelitian, MainLayout, Nav } from "@/components";
import { fetchDetailPenelitian } from "@/helper/api/apiSister";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const PenelitianEdit = () => {
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {}, [router.isReady]);

  const { data: penelitian, isLoading } = useQuery({
    queryKey: ["penelitian", id],
    queryFn: async () => await fetchDetailPenelitian(id),
    networkMode: "offlineFirst",
  });

  return (
    <MainLayout>
      <div className="flex flex-col gap-8">
        <Nav title={"Ubah Penelitian"} />
        <div className="flex flex-col gap-4 dark:text-white w-full h-full">
          <h1 className="text-md font-bold capitalize">
            Formulir Ubah Penelitian
          </h1>
          <div className="flex flex-col gap-4 bg-white dark:bg-slate-800 px-4 py-8 rounded-xl ">
            {isLoading ? (
              "Memuat..."
            ) : (
              <FormCreatePenelitian initialValues={penelitian} />
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PenelitianEdit;
