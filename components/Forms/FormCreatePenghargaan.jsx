import React from "react";
import { Formik, Form } from "formik";
import {
  Button,
  Input,
  KategoriKegiatanSelection,
  MultipleUploadFile,
  NestedList,
  PerguruanTinggiSelection,
  Select,
  StackedTab,
  Textarea,
} from "..";
import * as yup from "yup";
import { createUser, fetchListInpassing } from "@/helper/api/api";
import { useQuery } from "@tanstack/react-query";

const schema = yup.object().shape({
  kategori_kegiatan: yup.string().required("kategori kegiatan wajib di isi."),
  tingkat_penghargaan: yup
    .string()
    .required("tingkat penghargaan wajib di isi."),
  jenis_penghargaan: yup.string().required("jenis penghargaan wajib di isi."),
  nama_penghargaan: yup.string().required("nama penghargaan wajib di isi."),
  tahun: yup.string().required("tahun wajib di isi."),
  instansi_pemberi: yup
    .string()
    .required("bidang ahli pembimbing wajib di isi."),
});

const FormCreatePenghargaan = () => {
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          kategori_kegiatan: "",
          tingkat_penghargaan: "",
          jenis_penghargaan: "",
          nama_penghargaan: "",
          tahun: "",
          instansi_pemberi: "",
        }}
        validationSchema={schema}
        onSubmit={(values, { setErrors, setStatus }) => null}
      >
        {({ isSubmitting, errors, touched, status, isValid }) => (
          <Form className="flex flex-col gap-4">
            <KategoriKegiatanSelection
              errors={errors.kategori_kegiatan}
              touched={touched.kategori_kegiatan}
            />
            <Select
              label="tingkat penghargaan"
              name="tingkat_penghargaan"
              option={[]}
              errors={errors.tingkat_penghargaan}
              touched={touched.tingkat_penghargaan}
            />
            <Select
              label="jenis penghargaan"
              name="jenis_penghargaan"
              option={[]}
              errors={errors.jenis_penghargaan}
              touched={touched.jenis_penghargaan}
            />
            <Input
              label="nama penghargaan"
              name="nama_penghargaan"
              type="text"
              errors={errors.nama_penghargaan}
              touched={touched.nama_penghargaan}
            />
            <Input
              label="tahun"
              name="tahun"
              type="number"
              errors={errors.tahun}
              touched={touched.tahun}
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

export default FormCreatePenghargaan;
