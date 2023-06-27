import { FormCreatePengabdian, MainLayout, Nav } from "@/components";
import React from "react";

const PengabdianCreate = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-8">
        <Nav title={"Tambah Pengabdian"} />
        <div className="flex flex-col gap-4 dark:text-white w-full h-full">
          <h1 className="text-md font-bold capitalize">
            Formulir Tambah Pengabdian
          </h1>
          <div className="grid grid-flow-col gap-4 bg-white dark:bg-slate-800 px-4 py-8 rounded-xl ">
            <FormCreatePengabdian />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PengabdianCreate;
