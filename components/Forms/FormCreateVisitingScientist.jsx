import React from "react";
import { Formik, Form } from "formik";
import {
  Button,
  Input,
  KategoriKegiatanSelection,
  MultipleUploadFile,
  PerguruanTinggiSelection,
  Select,
} from "..";
import * as yup from "yup";
import { createUser, fetchListInpassing } from "@/helper/api/api";
import { useQuery } from "@tanstack/react-query";
import KategoriCapaianLuaranSelection from "../Selections/KategoriCapaianLuaranSelection";

const schema = yup.object().shape({
  aktivitas_litabmas: yup.string().required("aktivitas litabmas wajib di isi."),
  kategori_capaian_luaran: yup
    .string()
    .required("kategori capaian luaran wajib di isi."),
  ptn_pengundang: yup
    .string()
    .required("perguruan tinggi pengundang wajib di isi."),
  lama_kegiatan_hari: yup.string().required("lama kegiatan wajib di isi."),
  kategori_kegiatan: yup.string().required("kategori kegiatan wajib di isi."),
  kegiatan_penting: yup.string().required("kegiatan penting wajib di isi."),
  tanggal_pelaksanaan: yup
    .string()
    .required("tanggal pelaksanaan wajib di isi."),
  sk: yup.string().required("nomor sk wajib di isi."),
  tanggal_sk: yup.string().required("tanggal sk wajib di isi."),
});

const FormCreateVisitingScientist = () => {
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
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
        {({ isSubmitting, errors, touched, status, isValid }) => (
          <Form className="flex flex-col gap-4">
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
            <PerguruanTinggiSelection
              label={"perguruan tinggi pengundang"}
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
              errors={errors.kategori_kegiatan}
              touched={touched.kategori_kegiatan}
            />
            <Input
              label="kegiatan penting"
              name="kegiatan_penting"
              type="date"
              errors={errors.kegiatan_penting}
              touched={touched.kegiatan_penting}
            />
            <Input
              label="nomor sk penugasan"
              name="sk"
              type="date"
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

export default FormCreateVisitingScientist;
