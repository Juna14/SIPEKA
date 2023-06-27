import { FormCreatePenunjangLain, MainLayout, Nav } from "@/components";
import React from "react";

const PenunjangLainCreate = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-8">
        <Nav title={"Tambah Data Penunjang Lain"} />
        <div className="flex flex-col gap-4 dark:text-white w-full h-full">
          <h1 className="text-md font-bold capitalize">
            Formulir Tambah Data Penunjang Lain
          </h1>
          <div className="grid grid-flow-col gap-4 bg-white dark:bg-slate-800 px-4 py-8 rounded-xl ">
            <FormCreatePenunjangLain />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PenunjangLainCreate;
