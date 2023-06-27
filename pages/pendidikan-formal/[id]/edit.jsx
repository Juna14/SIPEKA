import {
  FormCreatePendidikanFormal,
  FormCreatePengelolaJurnal,
  MainLayout,
  Nav,
} from "@/components";
import {
  fetchDetailPendidikanFormal,
  fetchDetailPengelolaJurnal,
} from "@/helper/api/apiSister";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const PendidikanFormalEdit = () => {
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {}, [router.isReady]);

  const { data: pendidikan_formal, isLoading } = useQuery({
    queryKey: ["pendidikan_formal", id],
    queryFn: async () => await fetchDetailPendidikanFormal(id),
    networkMode: "offlineFirst",
  });

  return (
    <MainLayout>
      <div className="flex flex-col gap-8">
        <Nav title={"Ubah Pendidikan Formal"} />
        <div className="flex flex-col gap-4 dark:text-white w-full h-full">
          <h1 className="text-md font-bold capitalize">
            Formulir Ubah Pendidikan Formal
          </h1>
          <div className="flex flex-col gap-4 bg-white dark:bg-slate-800 px-4 py-8 rounded-xl ">
            {isLoading ? (
              "Memuat..."
            ) : (
              <FormCreatePendidikanFormal initialValues={pendidikan_formal} />
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PendidikanFormalEdit;
