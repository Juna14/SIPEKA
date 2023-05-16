import {
  FormEditBiodata,
  MainLayout,
  Nav,
  TabRiwayatAjuanPerubahanData,
} from "@/components";
import React from "react";

const EditBiodata = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-8">
        <Nav title={"Edit Biodata"} />
        <div className="flex flex-col gap-4 dark:text-white w-full h-full">
          <h1 className="text-md font-bold uppercase">
            Form Ajuan Perubahan Data Profil
          </h1>
          <div className="grid grid-flow-col gap-4 bg-white dark:bg-slate-800 px-4 py-8 rounded-xl ">
            <FormEditBiodata />
          </div>
        </div>
        <TabRiwayatAjuanPerubahanData
          title={"Riwayat Ajuan Perubahan Data Profil"}
        />
      </div>
    </MainLayout>
  );
};

export default EditBiodata;
