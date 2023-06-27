import { FormCreateBahanAjar, MainLayout, Nav } from "@/components";
import { fetchDetailBahanAjar } from "@/helper/api/apiSister";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";

const DetailPengajaran = () => {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: bahan_ajar,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bahan_ajar", id],
    queryFn: () => fetchDetailBahanAjar(id),
  });
  return (
    <MainLayout>
      <div className="flex flex-col gap-8">
        <Nav title={"Ubah Bahan Ajar"} />
        <div className="flex flex-col gap-4 dark:text-white w-full h-full">
          <h1 className="text-md font-bold capitalize">
            Formulir Tambah Bahan Ajar
          </h1>
          <div className="grid grid-flow-col gap-4 bg-white dark:bg-slate-800 px-4 py-8 rounded-xl ">
            <FormCreateBahanAjar initialValues={bahan_ajar} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DetailPengajaran;
