import { MainLayout, Nav, TabRiwayatAjuanPerubahanData } from "@/components";
import React from "react";

const RiwayatAjuanPerubahanData = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 dark:text-white w-full h-max">
        <Nav title={"Golongan/Pangkat"} />
        <TabRiwayatAjuanPerubahanData title={" Riwayat Golongan/Pangkat"} />
      </div>
    </MainLayout>
  );
};

export default RiwayatAjuanPerubahanData;
