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
  jabatan_fungsional: yup.string().required("jabatan fungsional wajib diisi."),
  sk: yup.string().required("sk wajib diisi."),
  kelebihan_pengajaran: yup
    .string()
    .required("kelebihan pengajaran sk wajib diisi."),
  tanggal_mulai: yup.string().required("terhitung mulai tanggal wajib diisi."),
  kelebihan_penelitian: yup
    .string()
    .required("kelebihan penelitian wajib diisi."),
  kelebihan_pengabdian: yup
    .string()
    .required("kelebihan pengabdian masyarakat wajib diisi."),
  kelebihan_penunjang: yup
    .string()
    .required("kelebihan kegiatan penunjang wajib diisi."),
});

const FormCreateJabatanFungsional = ({ initialValues }) => {
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
              value={values.sk}
            />
            <Input
              label="terhitung mulai tanggal"
              name="tanggal_mulai"
              type="date"
              errors={errors.tanggal_mulai}
              touched={touched.tanggal_mulai}
              value={values.tanggal_mulai}
            />
            <Input
              label="kelebihan pengajaran"
              name="kelebihan_pengajaran"
              type="number"
              errors={errors.kelebihan_pengajaran}
              touched={touched.kelebihan_pengajaran}
              value={values.kelebihan_pengajaran}
            />
            <Input
              label="kelebihan penelitian"
              name="kelebihan_penelitian"
              type="number"
              errors={errors.kelebihan_penelitian}
              touched={touched.kelebihan_penelitian}
              value={values.kelebihan_penelitian}
            />
            <Input
              label="kelebihan pengabdian masyarakat"
              name="kelebihan_pengabdian"
              type="number"
              errors={errors.kelebihan_pengabdian}
              touched={touched.kelebihan_pengabdian}
              value={values.kelebihan_pengabdian}
            />
            <Input
              label="kelebihan kegiatan penunjang"
              name="kelebihan_penunjang"
              type="number"
              errors={errors.kelebihan_penunjang}
              touched={touched.kelebihan_penunjang}
              value={values.kelebihan_penunjang}
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

export default FormCreateJabatanFungsional;
