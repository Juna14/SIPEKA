import React from "react";
import { Formik, Form } from "formik";
import {
  Button,
  Input,
  KategoriKegiatanSelection,
  MultipleUploadFile,
  Select,
  Selector,
  Textarea,
} from "..";
import * as yup from "yup";

import {
  fetchListInpassing,
  fetchPerguruanTinggi,
  fetchJabatanFungsional,
  fetchListBimbinganDosen,
} from "@/helper/api/apiSister";
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
  kategori_kegiatan: yup.string().required("kategori kegiatan wajib diisi."),
  program_studi: yup.string().required("program studi wajib diisi."),
  tanggal_mulai: yup.string().required("tanggal mulai wajib diisi."),
  tanggal_selesai: yup.string().required("tanggal selesai wajib diisi."),
  jenis_bimbingan: yup.string().required("jenis bimbingan wajib diisi."),
  bidang_ahli_pembimbing: yup
    .string()
    .required("bidang ahli pembimbing wajib diisi."),
  jabatan_fungsional_pembimbing: yup
    .string()
    .required("jabatan fungsional pembimbing wajib diisi."),
  dosen_bimbingan: yup.string().required("dosen bimbingan wajib diisi."),
  jabatan_fungsional_bimbingan: yup
    .string()
    .required("jabatan fungsional bimbingan wajib diisi."),
  bidang_ahli_bimbingan: yup
    .string()
    .required("bidang ahli bimbingan wajib diisi."),
  deskripsi_kegiatan: yup.string().required("deskripsi kegiatan wajib diisi."),
  sk: yup.string().required("sk wajib diisi."),
  tanggal_sk: yup.string().required("tanggal sk wajib diisi."),
});

const FormCreateBimbingDosen = () => {
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
              menu={"bimbing_dosen"}
              type={"tree"}
              errors={errors.kategori_kegiatan}
              touched={touched.kategori_kegiatan}
            />
            <Selector
              label="program studi"
              name="program_studi"
              placeholder={"Pilih program studi"}
              values={{
                id: "",
                nama: "",
              }}
              onChange={setFieldValue}
              queryKey={"fetchPerguruanTinggi"}
              queryFn={() => fetchPerguruanTinggi()}
              valueKey="id"
              labelKey="nama"
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
              option={[
                { value: "reguler", label: "reguler" },
                { value: "pencangkokan", label: "pencangkokan" },
              ]}
              labelKey={"label"}
              valueKey={"value"}
              errors={errors.jenis_bimbingan}
              touched={touched.jenis_bimbingan}
            />
            <Input
              label="bidang ahli pembimbing"
              name="bidang_ahli_pembimbing"
              type="text"
              errors={errors.bidang_ahli_pembimbing}
              touched={touched.bidang_ahli_pembimbing}
            />
            <Selector
              label="Jabatan Fungsional Pembimbing"
              name="jabatan_fungsional_pembimbing"
              placeholder={"Pilih Jabatan Fungsional Pembimbing"}
              values={{ id: "", nama: "" }}
              onChange={setFieldValue}
              queryKey={"fetchJabatanFungsional"}
              queryFn={() => fetchJabatanFungsional()}
              valueKey="id"
              labelKey="nama"
              errors={errors.jabatan_fungsional_pembimbing}
              touched={touched.jabatan_fungsional_pembimbing}
            />
            <Selector
              label="dosen bimbingan"
              name="dosen_bimbingan"
              placeholder={"Pilih Dosen Bimbingan"}
              values={{ id: "", nama: "" }}
              onChange={setFieldValue}
              queryKey={"fetchListBimbinganDosen"}
              queryFn={() => fetchListBimbinganDosen(id)}
              valueKey="id"
              labelKey="nama"
              errors={errors.dosen_bimbingan}
              touched={touched.dosen_bimbingan}
            />
            <Selector
              label="jabatan fungsional bimbingan"
              name="jabatan_fungsional_bimbingan"
              placeholder={"Pilih Perguruan Tinggi"}
              values={{ id: "", nama: "" }}
              onChange={setFieldValue}
              queryKey={"fetchJabatanFungsional"}
              queryFn={() => fetchJabatanFungsional()}
              valueKey="id"
              labelKey="nama"
              errors={errors.jabatan_fungsional_bimbingan}
              touched={touched.jabatan_fungsional_bimbingan}
            />
            <Input
              label="bidang ahli bimbingan"
              name="bidang_ahli_bimbingan"
              type="text"
              errors={errors.bidang_ahli_bimbingan}
              touched={touched.bidang_ahli_bimbingan}
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

export default FormCreateBimbingDosen;
