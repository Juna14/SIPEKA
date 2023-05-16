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
} from "..";
import * as yup from "yup";
import { createUser, fetchListInpassing } from "@/helper/api/api";
import { useQuery } from "@tanstack/react-query";

const schema = yup.object().shape({
  kategori_kegiatan: yup.string().required("kategori kegiatan wajib di isi."),
  jenis_tugas_tambahan: yup
    .string()
    .required("jenis tugas tambahan wajib di isi."),
  ptn_tugas_tambahan: yup
    .string()
    .required("perguruan tinggi penugasan wajib di isi."),
  unit_kerja: yup.string().required("unit kerja wajib di isi."),
  jumlah_jam_diakui: yup.string().required("jumlah jam diakui wajib di isi."),
  sk: yup.string().required("sk wajib di isi."),
  tanggal_sk: yup.string().required("kelebihan pengajaran sk wajib di isi."),
  terhitung_mulai_tanggal: yup
    .string()
    .required("terhitung mulai tanggal wajib di isi."),
  tanggal_berakhir_tugas: yup
    .string()
    .required("kelebihan penelitian wajib di isi."),
  jenis_tugas_tambahan: yup
    .string()
    .required("kelebihan pengabdian masyarakat wajib di isi."),
});

const FormCreateTugasTambahan = () => {
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          kategori_kegiatan: "",
          jenis_tugas_tambahan: "",
          ptn_tugas_tambahan: "",
          unit_kerja: "",
          jumlah_jam_diakui: "",
          sk: "",
          tanggal_sk: "",
          terhitung_mulai_tanggal: "",
          tanggal_berakhir_tugas: "",
        }}
        validationSchema={schema}
        onSubmit={(values, { setErrors, setStatus }) => null}
      >
        {({ isSubmitting, errors, touched, status, isValid }) => (
          <Form className="flex flex-col gap-4">
            <KategoriKegiatanSelection
              menu={"tugas_tambahan"}
              type={"tree"}
              errors={errors.kategori_kegiatan}
              touched={touched.kategori_kegiatan}
            />
            <Select
              label="jenis tugas tambahan"
              name="jenis_tugas_tambahan"
              option={[]}
              errors={errors.jenis_tugas_tambahan}
              touched={touched.jenis_tugas_tambahan}
            />
            <PerguruanTinggiSelection
              label="perguruan tinggi penugasan"
              errors={errors.ptn_tugas_tambahan}
              touched={touched.ptn_tugas_tambahan}
            />
            <Select
              label="Unit Kerja"
              name="unit_kerja"
              option={[]}
              errors={errors.unit_kerja}
              touched={touched.unit_kerja}
            />
            <Input
              label="jumlah jam diakui"
              name="jumlah_jam_diakui"
              type="number"
              errors={errors.jumlah_jam_diakui}
              touched={touched.jumlah_jam_diakui}
            />
            <Input
              label="nomor sk penugasan"
              name="sk"
              type="date"
              errors={errors.sk}
              touched={touched.sk}
            />
            <Input
              label="terhitung mulai tanggal"
              name="terhitung_mulai_tanggal"
              type="date"
              errors={errors.terhitung_mulai_tanggal}
              touched={touched.terhitung_mulai_tanggal}
            />
            <Input
              label="tanggal berakhir tugas"
              name="tanggal_berakhir_tugas"
              type="date"
              errors={errors.tanggal_berakhir_tugas}
              touched={touched.tanggal_berakhir_tugas}
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

export default FormCreateTugasTambahan;
