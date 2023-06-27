import React from "react";
import { Formik, Form } from "formik";
import {
  Button,
  Input,
  KategoriKegiatanSelection,
  MultipleUploadFile,
  PerguruanTinggiSelection,
  Select,
  Selector,
} from "..";
import * as yup from "yup";
import { createUser, fetchListInpassing } from "@/helper/api/api";
import { useQuery } from "@tanstack/react-query";
import KategoriCapaianLuaranSelection from "../Selections/KategoriCapaianLuaranSelection";
import { fetchPerguruanTinggi } from "@/helper/api/apiSister";

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
  aktivitas_litabmas: yup.string().required("aktivitas litabmas wajib diisi."),
  kategori_capaian_luaran: yup
    .string()
    .required("kategori capaian luaran wajib diisi."),
  ptn_pengundang: yup
    .string()
    .required("perguruan tinggi pengundang wajib diisi."),
  lama_kegiatan_hari: yup.string().required("lama kegiatan wajib diisi."),
  kategori_kegiatan: yup.string().required("kategori kegiatan wajib diisi."),
  kegiatan_penting: yup.string().required("kegiatan penting wajib diisi."),
  tanggal_pelaksanaan: yup
    .string()
    .required("tanggal pelaksanaan wajib diisi."),
  sk: yup.string().required("nomor sk wajib diisi."),
  tanggal_sk: yup.string().required("tanggal sk wajib diisi."),
});

const FormCreateVisitingScientist = () => {
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
          aktivitas_litabmas: "",
          kategori_capaian_luaran: "",
          ptn_pengundang: "",
          lama_kegiatan_hari: "",
          kategori_kegiatan: "",
          kegiatan_penting: "",
          tanggal_pelaksanaan: "",
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
            <Select
              label="aktivitas litabmas"
              name="aktivitas_litabmas"
              option={[]}
              errors={errors.aktivitas_litabmas}
              touched={touched.aktivitas_litabmas}
            />
            <KategoriCapaianLuaranSelection
              errors={errors.kategori_capaian_luaran}
              touched={touched.kategori_capaian_luaran}
            />
            <Selector
              name="ptn_pengundang"
              placeholder={"Pilih perguruan tinggi pengundang"}
              label={"perguruan tinggi pengundang"}
              values={{
                id: "",
                nama: "",
              }}
              onChange={setFieldValue}
              queryKey={"fetchPerguruanTinggi"}
              queryFn={() => fetchPerguruanTinggi()}
              valueKey="id"
              labelKey="nama"
              errors={errors.ptn_pengundang}
              touched={touched.ptn_pengundang}
            />
            <Input
              label="lama kegiatan (hari)"
              name="lama_kegiatan_hari"
              type="number"
              errors={errors.lama_kegiatan_hari}
              touched={touched.lama_kegiatan_hari}
            />
            <KategoriKegiatanSelection
              name="kategori_kegiatan"
              menu={"visiting_scientist"}
              type={`tree`}
              value={values.kategori_kegiatan}
              errors={errors.kategori_kegiatan}
              touched={touched.kategori_kegiatan}
            />
            <Input
              label="kegiatan penting"
              name="kegiatan_penting"
              type="text"
              errors={errors.kegiatan_penting}
              touched={touched.kegiatan_penting}
            />
            <Input
              label="tanggal pelaksanaan"
              name="tanggal_pelaksanaan"
              type="date"
              errors={errors.tanggal_pelaksanaan}
              touched={touched.tanggal_pelaksanaan}
            />
            <Input
              label="nomor sk penugasan"
              name="sk"
              type="text"
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

export default FormCreateVisitingScientist;
