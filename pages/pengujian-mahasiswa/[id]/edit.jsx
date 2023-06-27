import { MainLayout, Nav } from "@/components";
import React from "react";

const DetailPengajaran = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 dark:text-white w-full h-max">
        <Nav title={"Ubah Pengajaran"} />
      </div>
    </MainLayout>
  );
};

export default DetailPengajaran;
