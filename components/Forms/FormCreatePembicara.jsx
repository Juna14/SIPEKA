import React from "react";
import { Formik, Form } from "formik";
import {
  Action,
  Button,
  Input,
  JabatanFungsionalSelection,
  KategoriCapaianLuaranSelection,
  KategoriKegiatanSelection,
  MultipleUploadFile,
  Select,
  Table,
} from "..";
import * as yup from "yup";
import { createUser } from "@/helper/api/api";
import { useRouter } from "next/router";

const schema = yup.object().shape({
  kategori_kegiatan: yup.string().required("kategori kegiatan wajib di isi."),
  kategori_capaian_luaran: yup
    .string()
    .required("kategori_capaian_luaran kegiatan wajib di isi."),
  litabmas: yup.string().required("litabmas kegiatan wajib di isi."),
  kategori_pembicara: yup
    .string()
    .required("kategori_pembicara kegiatan wajib di isi."),
  nama_pertemuan: yup.string().required("nama_pertemuan wajib di isi."),
  penyelenggara: yup.string().required("penyelenggara wajib di isi."),
  tanggal_pelaksanaan: yup
    .string()
    .required("tanggal_pelaksanaan wajib di isi."),
  bahasa: yup.string().required("bahasa sebelumnya wajib di isi."),
  sk_penugasan: yup.string().required("sk_penugasan bidang wajib di isi."),
  tanggal_sk_penugasan: yup
    .string()
    .required("tanggal_sk_penugasan bidang wajib di isi."),
});

const FormCreatePembicara = ({ initialValues }) => {
  const router = useRouter();

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          kategori_kegiatan: initialValues?.id_kategori_kegiatan || "",
          kategori_capaian_luaran:
            initialValues?.id_kategori_capaian_luaran || "",
          litabmas: initialValues?.litabmas || "",
          kategori_pembicara: initialValues?.kategori_pembicara || "",
          nama_pertemuan: initialValues?.nama_pertemuan || "",
          penyelenggara: initialValues?.penyelenggara || "",
          tanggal_pelaksanaan: initialValues?.tanggal_pelaksanaan || "",
          bahasa: initialValues?.bahasa || "",
          sk_penugasan: initialValues?.sk_penugasan || "",
          tanggal_sk_penugasan: initialValues?.tanggal_sk_penugasan || "",
        }}
        validationSchema={schema}
        onSubmit={(values, { setErrors, setStatus }) => null}
      >
        {({ isSubmitting, errors, touched, status, isValid }) => (
          <Form className="flex flex-col gap-4">
            <KategoriKegiatanSelection
              type={"tree"}
              menu={"pembicara"}
              name={"kategori_kegiatan"}
              value={initialValues?.id_kategori_kegiatan}
              errors={errors.kategori_kegiatan}
              touched={touched.kategori_kegiatan}
            />
            <KategoriCapaianLuaranSelection
              value={initialValues?.id_kategori_capaian_luaran}
              errors={errors.kategori_capaian_luaran}
              touched={touched.kategori_capaian_luaran}
            />
            <Input
              label="litabmas"
              name="litabmas"
              type="text"
              value={initialValues?.litabmas}
              errors={errors.litabmas}
              touched={touched.litabmas}
            />
            <Input
              label="kategori_pembicara"
              name="kategori_pembicara"
              type="text"
              value={initialValues?.kategori_pembicara}
              errors={errors.kategori_pembicara}
              touched={touched.kategori_pembicara}
            />
            <Input
              label="nama_pertemuan"
              name="nama_pertemuan"
              type="text"
              value={initialValues?.nama_pertemuan}
              errors={errors.nama_pertemuan}
              touched={touched.nama_pertemuan}
            />
            <Input
              label="tingkat_pertemuan"
              name="tingkat_pertemuan"
              type="text"
              value={initialValues?.tingkat_pertemuan}
              errors={errors.tingkat_pertemuan}
              touched={touched.tingkat_pertemuan}
            />
            <Input
              label="penyelenggara"
              name="penyelenggara"
              type="text"
              value={initialValues?.penyelenggara}
              errors={errors.penyelenggara}
              touched={touched.penyelenggara}
            />

            <Input
              label="tanggal pelaksanaan"
              name="tanggal_pelaksanaan"
              type="date"
              value={initialValues?.tanggal_pelaksanaan}
              errors={errors.tanggal_pelaksanaan}
              touched={touched.tanggal_pelaksanaan}
            />
            <Input
              label="bahasa"
              name="bahasa"
              type="text"
              value={initialValues?.bahasa}
              errors={errors.bahasa}
              touched={touched.bahasa}
            />
            <Input
              label="No SK Penugasan"
              name="sk_penugasan"
              type="text"
              value={initialValues?.sk_penugasan}
              errors={errors.sk_penugasan}
              touched={touched.sk_penugasan}
            />
            <Input
              label="Tanggal SK Penugasan"
              name="tanggal_sk_penugasan"
              type="date"
              value={initialValues?.tanggal_sk_penugasan}
              errors={errors.tanggal_sk_penugasan}
              touched={touched.tanggal_sk_penugasan}
            />
            <MultipleUploadFile data={initialValues?.dokumen}>
              {router.pathname.includes("edit") && initialValues?.dokumen && (
                <Table
                  columns={[
                    { key: "id", title: "No.", dataType: "numbering" },
                    { key: "nama_file", title: "nama file" },
                    { key: "jenis_file", title: "jenis file" },
                    {
                      key: "tanggal_upload",
                      title: "tanggal_upload",
                      render: (val) => dateFormater(val.tanggal_upload),
                    },
                    { key: "jenis_dokumen", title: "jenis_dokumen" },
                    {
                      key: "action",
                      title: "aksi",
                      align: "center",
                      render: (val) => (
                        <Action
                          param={val}
                          baseUrl={"/dokumen"}
                          action={["detail", "edit", "delete"]}
                        />
                      ),
                    },
                  ]}
                  data={initialValues?.dokumen}
                />
              )}
            </MultipleUploadFile>
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

export default FormCreatePembicara;
