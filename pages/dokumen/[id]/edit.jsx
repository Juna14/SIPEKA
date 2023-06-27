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
      <Nav title={"Ubah Dokumen"} />
      <div className="flex flex-col gap-4 dark:text-white w-full h-max">
        <h1 className="text-md font-bold capitalize">Formulir Ubah Dokumen</h1>
        <div className="flex flex-col gap-4 bg-white dark:bg-slate-800 px-4 py-8 rounded-xl ">
          {isLoading ? (
            "Memuat...!"
          ) : (
            <Formik
              enableReinitialize
              initialValues={{
                // dokumen: [
                //   {
                //     id: dokumen.id || "",
                //     id_jenis_dokumen: dokumen.id_jenis_dokumen || "",
                //     nama: dokumen.nama || "",
                //     keterangan: dokumen.keterangan || "",
                //     tanggal_upload: dokumen.tanggal_upload || "",
                //     tautan: dokumen.tautan || "",
                //     jenis_file: dokumen.jenis_file || "",
                //     nama_file: dokumen.nama_file || "",
                //     jenis_dokumen: dokumen.jenis_dokumen || "",
                //   },
                // ],
                // nama: dokumen?.nama || "",
                // tautan: dokumen?.tautan || "",
                // keterangan: dokumen?.keterangan || "",
                // id_jenis_dokumen: dokumen?.id_jenis_dokumen || "",
                // file: dokumen?.file || "",
                dokumen: [
                  {
                    id: dokumen?.id || "",
                    id_jenis_dokumen: dokumen?.id_jenis_dokumen || "",
                    nama: dokumen?.nama || "",
                    keterangan: dokumen?.keterangan || "",
                    tanggal_upload: dokumen?.tanggal_upload || "",
                    tautan: dokumen?.tautan || "",
                    jenis_file: dokumen?.jenis_file || "",
                    nama_file: dokumen?.nama_file || "",
                    jenis_dokumen: dokumen?.jenis_dokumen || "",
                  },
                ],
              }}
              onSubmit={() => null}
            >
              {({ values, errors, touched, isSubmitting, setFieldValue }) => (
                <Form
                  className="flex flex-col gap-4"
                  onClick={(e) => e.preventDefault}
                >
                  <MultipleUploadFile
                    limit={1}
                    values={values}
                    errors={errors}
                    touched={touched}
                    setFieldValue={setFieldValue}
                  />
                  <Button
                    type={"submit"}
                    text={isSubmitting ? "Memuat..." : "Ajukan perubahan"}
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
