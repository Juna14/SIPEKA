import {
  Button,
  MainLayout,
  MultipleUploadFile,
  Nav,
  UploadFile,
} from "@/components";
import { fetchDetailDokumen } from "@/helper/api/apiSister";
import { useQuery } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React from "react";

const DokumenEdit = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: dokumen, isLoading } = useQuery({
    queryKey: ["dokumen", id],
    queryFn: () => fetchDetailDokumen(id),
  });
  return (
    <MainLayout>
      <Nav title={"Edit Dokumen"} />
      <div className="flex flex-col gap-4 dark:text-white w-full h-max">
        <h1 className="text-md font-bold uppercase">Form Edit Dokumen</h1>
        <div className="flex flex-col gap-4 bg-white dark:bg-slate-800 px-4 py-8 rounded-xl ">
          {isLoading ? (
            "Loading...!"
          ) : (
            <Formik
              enableReinitialize
              initialValues={{
                nama: dokumen?.nama || "",
                tautan: dokumen?.tautan || "",
                keterangan: dokumen?.keterangan || "",
                id_jenis_dokumen: dokumen?.id_jenis_dokumen || "",
                file: dokumen?.file || "",
              }}
              onSubmit={() => null}
            >
              {({ isSubmitting }) => (
                <Form className="flex flex-col gap-4">
                  <MultipleUploadFile limit={1} data={dokumen} />
                  <Button
                    type={"submit"}
                    text={isSubmitting ? "Loading..." : "Ajukan perubahan"}
                  />
                </Form>
              )}
            </Formik>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default DokumenEdit;
