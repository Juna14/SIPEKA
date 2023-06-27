import React from "react";
import { Formik, Form } from "formik";
import {
  Button,
  Input,
  KategoriKegiatanSelection,
  MultipleUploadFile,
  Select,
} from "..";
import * as yup from "yup";

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
  tingkat_penghargaan: yup
    .string()
    .required("tingkat penghargaan wajib diisi."),
  jenis_penghargaan: yup.string().required("jenis penghargaan wajib diisi."),
  nama_penghargaan: yup.string().required("nama penghargaan wajib diisi."),
  tahun: yup.string().required("tahun wajib diisi."),
  instansi_pemberi: yup.string().required("instansi pemberi wajib diisi."),
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
          jenis_penghargaan: "",
          nama_penghargaan: "",
          tahun: "",
          instansi_pemberi: "",
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
              menu={"penghargaan"}
              type={"tree"}
              value={values.kategori_kegiatan}
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
            <Input
              label="Instansi Pemberi"
              name="instansi_pemberi"
              type="number"
              errors={errors.instansi_pemberi}
              touched={touched.instansi_pemberi}
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
