import React from "react";
import { Formik, Form } from "formik";
import { Button, Input, MultipleUploadFile, Select } from "..";
import * as yup from "yup";
import { createUser, fetchKeluarga } from "@/helper/api/api";
import { useQuery } from "@tanstack/react-query";
import { id } from "@/helper/constant";

const schema = yup.object().shape({
  dokumen: yup.array().of(
    yup
      .object()
      .shape({
        id_jenis_dokumen: yup.string().required("jenis dokumen wajib diisi."),
        file: yup.string().required("file wajib diisi."),
        nama: yup.string().required("nama dokumen wajib diisi."),
        tautan: yup.string().required("tautan wajib diisi."),
        keterangan: yup.string().required("keterangan wajib diisi."),
      })
      .required("dokumen wajib diisi.")
  ),
  status_kawin: yup.string().required("status_kawin wajib diisi."),
  nama_pasangan: yup.string().required("nama_pasangan wajib diisi."),
  nip_pasangan: yup.string().required("nip_pasangan wajib diisi."),
  jenispekerjaan: yup.string().required("jenispekerjaan wajib diisi."),
});

const FormEditKeluarga = () => {
  const { data: keluarga, isLoading } = useQuery({
    queryKey: ["keluarga"],
    queryFn: async () => await fetchKeluarga(id),
    networkMode: "offlineFirst",
  });
  if (isLoading) return <>Loading!!</>;
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          dokumen: [
            {
              id: "",
              id_jenis_dokumen: "",
              nama: "",
              keterangan: "",
              tanggal_upload: "",
              tautan: "",
              jenis_file: "",
              nama_file: "",
              jenis_dokumen: "",
            },
          ],
          status_kawin: keluarga?.data[0]?.status_kawin,
          nama_pasangan: keluarga?.data[0]?.nama_pasangan,
          nip_pasangan: keluarga?.data[0]?.nip_pasangan,
          jenispekerjaan: keluarga?.data[0]?.jenispekerjaan.nama,
        }}
        validationSchema={schema}
        onSubmit={(values, { setErrors, setStatus }) => null}
      >
        {({
          isSubmitting,
          errors,
          touched,
          values,
          isValid,
          setFieldValue,
        }) => (
          <Form
            className="flex flex-col gap-4"
            onClick={(e) => e.preventDefault()}
          >
            <Input
              label="status_kawin"
              name="status_kawin"
              type="text"
              value={keluarga?.data[0]?.status_kawin}
              errors={errors.status_kawin}
              touched={touched.status_kawin}
            />
            <Input
              label="nama_pasangan"
              name="nama_pasangan"
              type="text"
              value={keluarga?.data[0]?.nama_pasangan}
              errors={errors.nama_pasangan}
              touched={touched.nama_pasangan}
            />
            <Input
              label="nip_pasangan"
              name="nip_pasangan"
              type="text"
              value={keluarga?.data[0]?.nip_pasangan}
              errors={errors.nip_pasangan}
              touched={touched.nip_pasangan}
            />
            <Input
              label="jenispekerjaan"
              name="jenispekerjaan"
              type="text"
              value={keluarga?.data[0]?.jenispekerjaan.nama}
              errors={errors.jenispekerjaan}
              touched={touched.jenispekerjaan}
            />
            <MultipleUploadFile
              values={values}
              errors={errors}
              touched={touched}
              setFieldValue={setFieldValue}
            />
            <Button
              disabled={!isValid}
              type={"submit"}
              text={isSubmitting ? "Memuat..." : "Ajukan perubahan"}
            />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormEditKeluarga;
