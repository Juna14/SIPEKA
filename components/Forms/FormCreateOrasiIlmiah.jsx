import React from "react";
import { Formik, Form } from "formik";
import {
  Button,
  Input,
  JabatanFungsionalSelection,
  KategoriKegiatanSelection,
  MultipleUploadFile,
  Select,
  Selector,
  Table,
} from "..";
import * as yup from "yup";
import { createUser } from "@/helper/api/api";
import { useRouter } from "next/router";
import { fetchListKateogriCapaianLuaran } from "@/helper/api/apiSister";

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
  judul_makalah: yup.string().required("judul_makalah wajib diisi."),
  nama_pertemuan: yup.string().required("nama pertemuan wajib diisi."),
  kelompok_bidang: yup.string().required("kelompok bidang wajib diisi."),
  litabmas_sebelumnya: yup
    .string()
    .required("litabmas sebelumnya wajib diisi."),
  jenis_skim: yup.string().required("jenis skim wajib diisi."),
  lokasi: yup.string().required("lokasi kegiatan wajib diisi."),
  tahun_usulan: yup.string().required("tahun usulan wajib diisi."),
  tahun_kegiatan: yup.string().required("tahun kegiatan wajib diisi."),
  tanggal_pelaksanaan: yup
    .string()
    .required("tanggal pelaksanaan wajib diisi."),
  penyelenggara: yup.string().required("penyelenggara wajib diisi."),
  bahasa: yup.string().required("bahasa wajib diisi."),
  dana_institusi_lain: yup
    .string()
    .required("dana institusi lain wajib diisi."),
  in_kind: yup.string().required("in kind wajib diisi."),
  sk_penugasan: yup.string().required("sk penugasan wajib diisi."),
  tanggal_sk_penugasan: yup
    .string()
    .required("tanggal sk penugasan wajib diisi."),
  mitra_litabmas: yup.string().required("mitra litabmas wajib diisi."),
});

const FormCreatePaten = ({ initialValues }) => {
  const router = useRouter();
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
          id_sdm: initialValues?.id_sdm || "",
          id_kategori_kegiatan: initialValues?.id_kategori_kegiatan || "",
          id_kategori_capaian_luaran:
            initialValues?.id_kategori_capaian_luaran || "",
          id_penelitian_pengabdian:
            initialValues?.id_penelitian_pengabdian || "",
          id_kategori_pembicara: initialValues?.id_kategori_pembicara || "",
          judul_makalah: initialValues?.judul_makalah || "",
          nama_pertemuan: initialValues?.nama_pertemuan || "",
          id_tingkat_pertemuan: initialValues?.id_tingkat_pertemuan || "",
          penyelenggara: initialValues?.penyelenggara || "",
          tanggal_pelaksanaan: initialValues?.tanggal_pelaksanaan || "",
          bahasa: initialValues?.bahasa || "",
          sk_penugasan: initialValues?.sk_penugasan || "",
          tanggal_sk_penugasan: initialValues?.tanggal_sk_penugasan || "",
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
              type={"tree"}
              menu={"orasi_ilmiah"}
              name={"kategori_kegiatan"}
              value={initialValues?.id_kategori_kegiatan}
              errors={errors.kategori_kegiatan}
              touched={touched.kategori_kegiatan}
            />

            <Selector
              label={"Kategori Capaian Luaran"}
              name={"kategori_capaian_luaran"}
              errors={errors.kategori_capaian_luaran}
              touched={touched.kategori_capaian_luaran}
              queryFn={() => fetchListKateogriCapaianLuaran()}
              queryKey={"list_kategori_capaian_luaran"}
              labelKey={"nama"}
              valueKey={"id"}
              onChange={setFieldValue}
              placeholder={"Pilih Kategori Capaian Luaran"}
              values={{
                id: "",
                nama: "",
              }}
            />

            <Select
              label={"Litabmas"}
              name={"litabmas_sebelumnya"}
              errors={errors.litabmas_sebelumnya}
              touched={touched.litabmas_sebelumnya}
              option={[]}
              labelKey={"nama"}
              valueKey={"id"}
              placeholder={"Pilih Litabmas"}
            />

            <Select
              label={"kategori pembicara"}
              name={"kategori_pembicara"}
              errors={errors.kategori_pembicara}
              touched={touched.kategori_pembicara}
              option={[]}
              labelKey={"nama"}
              valueKey={"id"}
              placeholder={"Pilih Pembicara"}
            />

            <Input
              type={"text"}
              name={"judul_makalah"}
              label={"Judul Makalah"}
              errors={errors.judul_makalah}
              touched={touched.judul_makalah}
            />

            <Input
              type={"text"}
              name={"nama_pertemuan"}
              label={"nama pertemuan pertemuan ilmiah"}
              errors={errors.nama_pertemuan}
              touched={touched.nama_pertemuan}
            />

            <Select
              label={"tingkat pertemuan"}
              name={"id_tingkat_pertemuan"}
              errors={errors.id_tingkat_pertemuan}
              touched={touched.id_tingkat_pertemuan}
              option={[]}
              labelKey={"nama"}
              valueKey={"id"}
              placeholder={"Pilih Tingkat Pertemuan"}
            />
            <Input
              type={"text"}
              name={"penyelenggara"}
              label={"penyelenggara"}
              errors={errors.penyelenggara}
              touched={touched.penyelenggara}
            />
            <Input
              type={"date"}
              name={"tanggal_pelaksanaan"}
              label={"tanggal pelaksanaan"}
              errors={errors.tanggal_pelaksanaan}
              touched={touched.tanggal_pelaksanaan}
            />
            <Input
              type={"text"}
              name={"bahasa"}
              label={"bahasa"}
              errors={errors.bahasa}
              touched={touched.bahasa}
            />
            <Input
              type={"text"}
              name={"sk_penugasan"}
              label={"no sk penugasan"}
              errors={errors.sk_penugasan}
              touched={touched.sk_penugasan}
            />
            <Input
              type={"date"}
              name={"tanggal_sk_penugasan"}
              label={"tanggal sk penugasan"}
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

export default FormCreatePaten;
