import {
  Action,
  Button,
  MainLayout,
  Nav,
  Table,
  TabRiwayatAjuanPerubahanData,
} from "@/components";
import { fetchListKepangkatan } from "@/helper/api/api";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";

const Kepangkatan = () => {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: Kepangkatan,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["Kepangkatan"],
    queryFn: () => fetchListKepangkatan(id),
    networkMode: "offlineFirst",
  });
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 dark:text-white w-full h-max">
        <Nav title={"Kepangkatan"} />
        <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
          Detail Riwayat Golongan/Pangkat
        </h1>
        {JSON.stringify(Kepangkatan)}
      </div>
    </MainLayout>
  );
};

export default Kepangkatan;
