import { FormCreatePembicara, MainLayout, Nav } from "@/components";
import React from "react";

const PembicaraCreate = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-8">
        <Nav title={"Tambah Pembicara"} />
        <div className="flex flex-col gap-4 dark:text-white w-full h-full">
          <h1 className="text-md font-bold uppercase">Form Tambah Pembicara</h1>
          <div className="grid grid-flow-col gap-4 bg-white dark:bg-slate-800 px-4 py-8 rounded-xl ">
            <FormCreatePembicara />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PembicaraCreate;
