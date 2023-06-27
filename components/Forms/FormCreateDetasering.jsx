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
  kategori_kegiatan: yup.string().required("kategori kegiatan wajib diisi."),
  perguruan_tinggi_sasaran: yup
    .string()
    .required("tingkat penghargaan wajib diisi."),
  tanggal_mulai: yup.string().required("nama penghargaan wajib diisi."),
  tanggal_selesai: yup.string().required("tanggal_selesai wajib diisi."),
  bidang_tugas: yup.string().required("bidang tugas wajib diisi."),
  deskripsi_kegiatan: yup.string().required("deskripsi kegiatan wajib diisi."),
  metode_pelaksanaan: yup.string().required("metode pelaksanaan wajib diisi."),
  sk_penugasan: yup.string().required("nomor sk penugasan wajib diisi."),
  tanggal_sk_penugasan: yup
    .string()
    .required("tanggal sk penugasan wajib diisi."),
});

const FormCreatePenghargaan = () => {
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
            <KategoriKegiatanSelection
              type="tree"
              menu={"detasering"}
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

export default FormCreatePenghargaan;
