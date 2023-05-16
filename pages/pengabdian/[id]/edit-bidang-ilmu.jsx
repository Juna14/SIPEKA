import {
  KelompokBidangSelection,
  FormCreatePenngabdian,
  MainLayout,
  Nav,
  Button,
} from "@/components";
import { fetchDetailPengabdian } from "@/helper/api/apiSister";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const PenngabdianEditBidangIlmu = () => {
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {}, [router.isReady]);

  const {
    data: pengabdian,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["pengabdian", id],
    queryFn: async () => await fetchDetailPengabdian(id),
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
        <Nav title={"Edit Penngabdian"} />
        <div className="flex flex-col gap-4 dark:text-white w-full h-full">
          <h1 className="text-md font-bold uppercase">Form Edit Penngabdian</h1>
          <div className="grid grid-flow-row gap-4 bg-white dark:bg-slate-800 px-4 py-8 rounded-xl ">
            <h1 className="text-lg font-bold text-slate-600 dark:text-slate-500">
              {pengabdian?.judul}
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

export default PenngabdianEditBidangIlmu;