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
  perguruan_tinggi_sasaran: yup
    .string()
    .required("tingkat penghargaan wajib di isi."),
  tanggal_mulai: yup.string().required("nama penghargaan wajib di isi."),
  tanggal_selesai: yup.string().required("tanggal_selesai wajib di isi."),
  bidang_tugas: yup.string().required("bidang tugas wajib di isi."),
  deskripsi_kegiatan: yup.string().required("deskripsi kegiatan wajib di isi."),
  metode_pelaksanaan: yup.string().required("metode pelaksanaan wajib di isi."),
  sk_penugasan: yup.string().required("nomor sk penugasan wajib di isi."),
  tanggal_sk_penugasan: yup
    .string()
    .required("tanggal sk penugasan wajib di isi."),
});

const FormCreatePenghargaan = () => {
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          kategori_kegiatan: "",
          tingkat_penghargaan: "",
          tanggal_mulai: "",
          tanggal_selesai: "",
          bidang_tugas: "",
          deskripsi_kegiatan: "",
          metode_pelaksanaan: "",
          sk_penugasan: "",
          tanggal_sk_penugasan: "",
        }}
        validationSchema={schema}
        onSubmit={(values, { setErrors, setStatus }) => null}
      >
        {({ isSubmitting, errors, touched, status, isValid }) => (
          <Form className="flex flex-col gap-4">
            <KategoriKegiatanSelection
              type="list"
              errors={errors.kategori_kegiatan}
              touched={touched.kategori_kegiatan}
            />
            <PerguruanTinggiSelection
              label={"perguruan tinggi sasaran"}
              name="perguruan_tinggi_sasaran"
              errors={errors.perguruan_tinggi_sasaran}
              touched={touched.perguruan_tinggi_sasaran}
            />
            <Input
              label="tanggal mulai"
              name="tanggal_mulai"
              type="date"
              errors={errors.tanggal_mulai}
              touched={touched.tanggal_mulai}
            />
            <Input
              label="tanggal selesai"
              name="tanggal_selesai"
              type="number"
              errors={errors.tanggal_selesai}
              touched={touched.tanggal_selesai}
            />
            <Input
              label="bidang tugas"
              name="bidang_tugas"
              type="text"
              errors={errors.bidang_tugas}
              touched={touched.bidang_tugas}
            />
            <Textarea
              name="deskripsi_kegiatan"
              label={"deskripsi kegiatan"}
              errors={errors.deskripsi_kegiatan}
              touched={touched.deskripsi_kegiatan}
            />
            <Input
              label="metode pelaksanaan"
              name="metode_pelaksanaan"
              type="text"
              errors={errors.metode_pelaksanaan}
              touched={touched.metode_pelaksanaan}
            />
            <Input
              label="Nomor SK Pelaksanaan"
              name="sk_penugasan"
              type="text"
              errors={errors.sk_penugasan}
              touched={touched.sk_penugasan}
            />
            <Input
              label="Tanggal SK Pelaksanaan"
              name="tanggal_sk_penugasan"
              type="date"
              errors={errors.tanggal_sk_penugasan}
              touched={touched.tanggal_sk_penugasan}
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
