import {
  FormCreateJabatanFungsional,
  MainLayout,
  Nav,
  TabRiwayatAjuanPerubahanData,
} from "@/components";
import React from "react";

const JabatanFungsionalCreate = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-8">
        <Nav title={"Edit Lain"} />
        <div className="flex flex-col gap-4 dark:text-white w-full h-full">
          <h1 className="text-md font-bold uppercase">
            Form Tambah Riwayat Jabatan Fungsional
          </h1>
          <div className="grid grid-flow-col gap-4 bg-white dark:bg-slate-800 px-4 py-8 rounded-xl ">
            <FormCreateJabatanFungsional initialValues={[]} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default JabatanFungsionalCreate;
