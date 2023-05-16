import React from "react";
import { Formik, Form } from "formik";
import {
  Button,
  FormAnggotaKegiatan,
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
  nama: yup.string().required("nama kegiatan wajib di isi."),
  jenis_kegiatan: yup.string().required("jenis kegiatan wajib di isi."),
  instansi: yup.string().required("instansi wajib di isi."),
  tingkat: yup.string().required("tingkat wajib di isi."),
  sk_penugasan: yup.string().required("sk_penugasan di isi."),
  tanggal_mulai: yup.string().required("tanggal mulai di isi."),
  tanggal_selesai: yup.string().required("tanggal selesai di isi."),
  anggota_dosen: yup.object().shape({
    id_sdm: yup.string().required("id_sdm wajib di isi."),
    name: yup.string().required("nama wajib di isi."),
    peran: yup.string().required("peran wajib di isi."),
  }),
});

const FormCreatePenunjangLain = ({ initialValues }) => {
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          kategori_kegiatan: initialValues?.id_kategori_kegiatan || "",
          nama: initialValues?.nama || "",
          jenis_kegiatan: initialValues?.jenis_kegiatan || "",
          instansi: initialValues?.instansi || "",
          tingkat: initialValues?.tingkat || "",
          sk_penugasan: initialValues?.sk_penugasan || "",
          tanggal_mulai: initialValues?.tanggal_mulai || "",
          tanggal_selesai: initialValues?.tanggal_selesai || "",
          anggota_dosen:
            initialValues?.anggota_dosen ||
            [
              // {
              //   id_sdm: "",
              //   nama: "",
              //   peran: "",
              // },
            ],
        }}
        validationSchema={schema}
        onSubmit={(values, { setErrors, setStatus }) => null}
      >
        {({ isSubmitting, errors, touched, values, isValid }) => (
          <Form className="flex flex-col gap-4">
            <KategoriKegiatanSelection
              menu={"penunjang_lain"}
              type={"list"}
              value={initialValues?.id_kategori_kegiatan}
              errors={errors.kategori_kegiatan}
              touched={touched.kategori_kegiatan}
            />
            <Input
              label="nama kegiatan"
              name="nama"
              type="text"
              value={initialValues?.nama}
              errors={errors.nama}
              touched={touched.nama}
            />
            <Select
              label="jenis kegiatan"
              name="jenis_kegiatan"
              type={[]}
              value={initialValues?.jenis_kegiatan}
              errors={errors.jenis_kegiatan}
              touched={touched.jenis_kegiatan}
            />
            <Input
              label="instansi"
              name="instansi"
              type="text"
              value={initialValues?.instansi}
              errors={errors.instansi}
              touched={touched.instansi}
            />
            <Select
              label="tingkat"
              name="tingkat"
              option={[]}
              value={initialValues?.tingkat}
              errors={errors.tingkat}
              touched={touched.tingkat}
            />
            <Input
              label="no sk penugasan"
              name="sk_penugasan"
              type="text"
              value={initialValues?.sk_penugasan}
              errors={errors.sk_penugasan}
              touched={touched.sk_penugasan}
            />
            <Input
              label="tanggal mulai"
              name="tanggal_mulai"
              type="date"
              value={initialValues?.tanggal_mulai}
              errors={errors.tanggal_mulai}
              touched={touched.tanggal_mulai}
            />
            <Input
              label="tanggal selesai"
              name="tanggal_selesai"
              type="date"
              value={initialValues?.tanggal_selesai}
              errors={errors.tanggal_selesai}
              touched={touched.tanggal_selesai}
            />
            <h1 className="text-primary">Anggota Kegiatan (Dosen)</h1>
            <FormAnggotaKegiatan
              name={"anggota_dosen"}
              values={values.anggota_dosen}
              defaultValue={{
                id_sdm: "",
                nama: "",
                peran: "",
              }}
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

export default FormCreatePenunjangLain;
