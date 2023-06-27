import {
  FormCreatePengelolaJurnal,
  MainLayout,
  Nav,
  TabRiwayatAjuanPerubahanData,
} from "@/components";
import React from "react";

const PengelolaJurnalCreate = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-8">
        <Nav title={"Tambah Pengelola Jurnal"} />
        <div className="flex flex-col gap-4 dark:text-white w-full h-full">
          <h1 className="text-md font-bold capitalize">
            Formulir Tambah Data Pengelola Jurnal
          </h1>
          <div className="grid grid-flow-col gap-4 bg-white dark:bg-slate-800 px-4 py-8 rounded-xl ">
            <FormCreatePengelolaJurnal />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PengelolaJurnalCreate;
