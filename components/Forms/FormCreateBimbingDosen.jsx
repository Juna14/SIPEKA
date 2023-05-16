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
  program_studi: yup.string().required("program studi wajib di isi."),
  tanggal_mulai: yup.string().required("tanggal mulai wajib di isi."),
  tanggal_selesai: yup.string().required("tanggal selesai wajib di isi."),
  jenis_bimbingan: yup.string().required("jenis bimbingan wajib di isi."),
  bidang_ahli_pembimbing: yup
    .string()
    .required("bidang ahli pembimbing wajib di isi."),
  jabatan_fungsional_pembimbing: yup
    .string()
    .required("jabatan fungsional pembimbing wajib di isi."),
  dosen_bimbingan: yup.string().required("dosen bimbingan wajib di isi."),
  jabatan_fungsional_bimbingan: yup
    .string()
    .required("jabatan fungsional bimbingan wajib di isi."),
  bidang_ahli_bimbingan: yup
    .string()
    .required("bidang ahli bimbingan wajib di isi."),
  deskripsi_kegiatan: yup.string().required("deskripsi kegiatan wajib di isi."),
  sk: yup.string().required("sk wajib di isi."),
  tanggal_sk: yup.string().required("tanggal sk wajib di isi."),
});

const FormCreateBimbingDosen = () => {
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          kategori_kegiatan: "",
          program_studi: "",
          tanggal_mulai: "",
          tanggal_selesai: "",
          jenis_bimbingan: "",
          bidang_ahli_pembimbing: "",
          jabatan_fungsional_pembimbing: "",
          dosen_bimbingan: "",
          jabatan_fungsional_bimbingan: "",
          bidang_ahli_bimbingan: "",
          deskripsi_kegiatan: "",
          sk: "",
          tanggal_sk: "",
        }}
        validationSchema={schema}
        onSubmit={(values, { setErrors, setStatus }) => null}
      >
        {({ isSubmitting, errors, touched, status, isValid }) => (
          <Form className="flex flex-col gap-4">
            <KategoriKegiatanSelection
              menu={"bimbing_dosen"}
              type={"tree"}
              errors={errors.kategori_kegiatan}
              touched={touched.kategori_kegiatan}
            />
            <Select
              label="program studi"
              name="program_studi"
              option={[]}
              errors={errors.program_studi}
              touched={touched.program_studi}
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
              type="date"
              errors={errors.tanggal_selesai}
              touched={touched.tanggal_selesai}
            />
            <Select
              label="jenis bimbingan"
              name="jenis_bimbingan"
              option={[]}
              errors={errors.jenis_bimbingan}
              touched={touched.jenis_bimbingan}
            />
            <Input
              label="bidang ahli pembimbing"
              name="bidang_ahli_pembimbing"
              type="date"
              errors={errors.bidang_ahli_pembimbing}
              touched={touched.bidang_ahli_pembimbing}
            />
            <Select
              label="jabatan fungsional pembimbing"
              name="jabatan_fungsional_pembimbing"
              option={[]}
              errors={errors.jabatan_fungsional_pembimbing}
              touched={touched.jabatan_fungsional_pembimbing}
            />
            <Select
              label="dosen bimbingan"
              name="dosen_bimbingan"
              option={[]}
              errors={errors.dosen_bimbingan}
              touched={touched.dosen_bimbingan}
            />
            <Select
              label="jabatan fungsional bimbingan"
              name="jabatan_fungsional_bimbingan"
              option={[]}
              errors={errors.jabatan_fungsional_bimbingan}
              touched={touched.jabatan_fungsional_bimbingan}
            />
            <Textarea
              label="deskripsi kegiatan"
              name="deskripsi_kegiatan"
              errors={errors.deskripsi_kegiatan}
              touched={touched.deskripsi_kegiatan}
            />
            <Input
              label="nomor sk penugasan"
              name="sk"
              type="number"
              errors={errors.sk}
              touched={touched.sk}
            />
            <Input
              label="tanggal sk penugasan"
              name="tanggal_sk"
              type="date"
              errors={errors.tanggal_sk}
              touched={touched.tanggal_sk}
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

export default FormCreateBimbingDosen;
