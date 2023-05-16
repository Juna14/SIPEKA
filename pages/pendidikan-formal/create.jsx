import {
  FormCreatePendidikanFormal,
  FormCreatePengelolaJurnal,
  MainLayout,
  Nav,
} from "@/components";
import {
  fetchDetailPendidikanFormal,
  fetchDetailPengelolaJurnal,
} from "@/helper/api/apiSister";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const PendidikanFormalCreate = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-8">
        <Nav title={"Create Pendidikan Formal"} />
        <div className="flex flex-col gap-4 dark:text-white w-full h-full">
          <h1 className="text-md font-bold uppercase">
            Form Create Pendidikan Formal
          </h1>
          <div className="flex flex-col gap-4 bg-white dark:bg-slate-800 px-4 py-8 rounded-xl ">
            <FormCreatePendidikanFormal />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PendidikanFormalCreate;
