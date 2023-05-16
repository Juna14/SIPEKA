import {
  FormEditKependudukan,
  MainLayout,
  Nav,
  TabRiwayatAjuanPerubahanData,
} from "@/components";
import React from "react";

const EditKependudukan = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-8">
        <Nav title={"Edit Kependudukan"} />
        <div className="flex flex-col gap-4 dark:text-white w-full h-full">
          <h1 className="text-md font-bold uppercase">
            Form Ajuan Perubahan Data Kependudukan
          </h1>
          <div className="grid grid-flow-col gap-4 bg-white dark:bg-slate-800 px-4 py-8 rounded-xl ">
            <FormEditKependudukan />
          </div>
        </div>
        <TabRiwayatAjuanPerubahanData
          title={"Riwayat Ajuan Perubahan Data Kependudukan"}
        />
      </div>
    </MainLayout>
  );
};

export default EditKependudukan;
