import React from "react";
import { Formik, Form } from "formik";
import {
  Button,
  GolonganPangkatSelection,
  Input,
  MultipleUploadFile,
  Select,
} from "..";
import * as yup from "yup";
import { createUser, fetchListInpassing } from "@/helper/api/api";
import { useQuery } from "@tanstack/react-query";

const schema = yup.object().shape({
  pangkat_golongan: yup.string().required("golongan pangkat wajib di isi."),
  sk: yup.string().required("sk wajib di isi."),
  tanggal_sk: yup.string().required("kelebihan pengajaran sk wajib di isi."),
  tanggal_mulai: yup.string().required("terhitung mulai tanggal wajib di isi."),
  masa_kerja_tahun: yup.string().required("kelebihan penelitian wajib di isi."),
  masa_kerja_bulan: yup
    .string()
    .required("kelebihan pengabdian masyarakat wajib di isi."),
});

const FormCreateKepangkatan = ({ initialValues }) => {
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          pangkat_golongan: initialValues?.id_pangkat_golongan || "",
          sk: initialValues?.sk || "",
          tanggal_sk: initialValues?.tanggal_sk || "",
          tanggal_mulai: initialValues?.tanggal_mulai || "",
          masa_kerja_tahun: initialValues?.masa_kerja_tahun || "",
          masa_kerja_bulan: initialValues?.masa_kerja_bulan || "",
        }}
        validationSchema={schema}
        onSubmit={(values, { setErrors, setStatus }) => null}
      >
        {({ isSubmitting, errors, touched, status, isValid }) => (
          <Form className="flex flex-col gap-4">
            <GolonganPangkatSelection
              label="jabatan fungsional"
              name="pangkat_golongan"
              value={initialValues?.id_pangkat_golongan}
              errors={errors.pangkat_golongan}
              touched={touched.pangkat_golongan}
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
              label="tanggal sk"
              name="tanggal_sk"
              type="date"
              errors={errors.tanggal_sk}
              touched={touched.tanggal_sk}
            />
            <Input
              label="masa kerja (tahun)"
              name="masa_kerja_tahun"
              type="number"
              errors={errors.masa_kerja_tahun}
              touched={touched.masa_kerja_tahun}
            />
            <Input
              label="masa kerja (bulan)"
              name="masa_kerja_bulan"
              type="number"
              errors={errors.masa_kerja_bulan}
              touched={touched.masa_kerja_bulan}
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

export default FormCreateKepangkatan;
