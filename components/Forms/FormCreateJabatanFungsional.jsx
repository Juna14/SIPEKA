import React from "react";
import { Formik, Form } from "formik";
import {
  Button,
  Input,
  JabatanFungsionalSelection,
  MultipleUploadFile,
  Select,
} from "..";
import * as yup from "yup";
import { createUser } from "@/helper/api/api";

const schema = yup.object().shape({
  jabatan_fungsional: yup.string().required("jabatan fungsional wajib di isi."),
  sk: yup.string().required("sk wajib di isi."),
  kelebihan_pengajaran: yup
    .string()
    .required("kelebihan pengajaran sk wajib di isi."),
  tanggal_mulai: yup.string().required("terhitung mulai tanggal wajib di isi."),
  kelebihan_penelitian: yup
    .string()
    .required("kelebihan penelitian wajib di isi."),
  kelebihan_pengabdian: yup
    .string()
    .required("kelebihan pengabdian masyarakat wajib di isi."),
  kelebihan_penunjang: yup
    .string()
    .required("kelebihan kegiatan penunjang wajib di isi."),
});

const FormCreateJabatanFungsional = ({ initialValues }) => {
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          id: initialValues?.id || "",
          jabatan_fungsional: initialValues?.id_jabatan_fungsional || "",
          sk: initialValues?.sk || "",
          tanggal_mulai: initialValues?.tanggal_mulai || "",
          kelebihan_pengajaran:
            initialValues?.kelebihan_pengajaran?.toString() || "",
          kelebihan_penelitian:
            initialValues?.kelebihan_penelitian?.toString() || "",
          kelebihan_pengabdian:
            initialValues?.kelebihan_pengabdian?.toString() || "",
          kelebihan_penunjang:
            initialValues?.kelebihan_penunjang?.toString() || "",
        }}
        validationSchema={schema}
        onSubmit={(values, { setErrors, setStatus }) => null}
      >
        {({ isSubmitting, errors, touched, status, isValid }) => (
          <Form className="flex flex-col gap-4">
            <JabatanFungsionalSelection
              name={"jabatan_fungsional"}
              value={initialValues?.id_jabatan_fungsional}
              errors={errors.jabatan_fungsional}
              touched={touched.jabatan_fungsional}
            />
            <Input
              label="nomor sk"
              name="sk"
              type="text"
              errors={errors.sk}
              touched={touched.sk}
            />
            <Input
              label="terhitung mulai tanggal"
              name="tanggal_mulai"
              type="date"
              errors={errors.tanggal_mulai}
              touched={touched.tanggal_mulai}
            />
            <Input
              label="kelebihan pengajaran"
              name="kelebihan_pengajaran"
              type="number"
              errors={errors.kelebihan_pengajaran}
              touched={touched.kelebihan_pengajaran}
            />
            <Input
              label="kelebihan penelitian"
              name="kelebihan_penelitian"
              type="number"
              errors={errors.kelebihan_penelitian}
              touched={touched.kelebihan_penelitian}
            />
            <Input
              label="kelebihan pengabdian masyarakat"
              name="kelebihan_pengabdian"
              type="number"
              errors={errors.kelebihan_pengabdian}
              touched={touched.kelebihan_pengabdian}
            />
            <Input
              label="kelebihan kegiatan penunjang"
              name="kelebihan_penunjang"
              type="number"
              errors={errors.kelebihan_penunjang}
              touched={touched.kelebihan_penunjang}
            />
            <MultipleUploadFile />
            <Button
              disabled={!isValid}
              type={"submit"}
              text={isSubmitting ? "Loading..." : "Ajukan perubahan"}
            />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormCreateJabatanFungsional;
