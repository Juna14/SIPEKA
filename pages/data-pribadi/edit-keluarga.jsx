import {
  FormEditKeluarga,
  MainLayout,
  Nav,
  TabRiwayatAjuanPerubahanData,
} from "@/components";
import React from "react";

const EditKeluarga = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-8">
        <Nav title={"Ubah Keluarga"} />
        <div className="flex flex-col gap-4 dark:text-white w-full h-full">
          <h1 className="text-md font-bold capitalize">
            Form Ajuan Perubahan Data Keluarga
          </h1>
          <div className="grid grid-flow-col gap-4 bg-white dark:bg-slate-800 px-4 py-8 rounded-xl ">
            <FormEditKeluarga />
          </div>
        </div>
        <TabRiwayatAjuanPerubahanData
          title={"Riwayat Ajuan Perubahan Data Keluarga"}
        />
      </div>
    </MainLayout>
  );
};

export default EditKeluarga;
