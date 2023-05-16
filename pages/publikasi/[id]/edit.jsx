import { FormCreatePublikasi, MainLayout, Nav } from "@/components";
import { fetchDetailPublikasi } from "@/helper/api/apiSister";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const PublikasiEdit = () => {
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {}, [router.isReady]);

  const { data: publikasi, isLoading } = useQuery({
    queryKey: ["publikasi", id],
    queryFn: async () => await fetchDetailPublikasi(id),
    networkMode: "offlineFirst",
  });

  return (
    <MainLayout>
      <div className="flex flex-col gap-8">
        <Nav title={"Edit Publikasi"} />
        <div className="flex flex-col gap-4 dark:text-white w-full h-full">
          <h1 className="text-md font-bold uppercase">Form Edit Publikasi</h1>
          <div className="flex flex-col gap-4 bg-white dark:bg-slate-800 px-4 py-8 rounded-xl ">
            {isLoading ? (
              "Loading..."
            ) : (
              <FormCreatePublikasi initialValues={publikasi} />
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PublikasiEdit;
