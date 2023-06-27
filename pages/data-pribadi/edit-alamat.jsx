import {
  FormEditAlamat,
  MainLayout,
  Nav,
  TabRiwayatAjuanPerubahanData,
} from "@/components";
import React from "react";

const EditAlamat = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-8 px-8">
        <Nav title={"Ubah Biodata"} />
        <div className="flex flex-col gap-4 dark:text-white w-full h-full">
          <h1 className="text-md font-bold capitalize">
            Form Ajuan Perubahan Data Alamat
          </h1>
          <div className="grid grid-flow-col gap-4  bg-white dark:bg-slate-800 px-4 py-8 rounded-xl ">
            <FormEditAlamat />
          </div>
          <TabRiwayatAjuanPerubahanData
            title={"Riwayat Ajuan Perubahan Data Alamat"}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default EditAlamat;
