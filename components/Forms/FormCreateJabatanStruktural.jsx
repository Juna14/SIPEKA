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
  jabatan: yup.string().required("jabatan kegiatan wajib di isi."),
  kategori_kegiatan: yup.string().required("kategori kegiatan wajib di isi."),
  sk_jabatan: yup.string().required("sk_jabatan bidang wajib di isi."),
  tanggal_mulai_jabatan: yup
    .string()
    .required("tanggal_mulai_jabatan wajib di isi."),
  tanggal_selesai_jabatan: yup
    .string()
    .required("tanggal_selesai_jabatan sebelumnya wajib di isi."),
  lokasi: yup.string().required("lokasi wajib di isi."),
});

const FormCreateJabatanStruktural = ({ initialValues }) => {
  const router = useRouter();

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          jabatan: initialValues?.jabatan || "",
          kategori_kegiatan: initialValues?.id_kategori_kegiatan || "",
          sk_jabatan: initialValues?.sk_jabatan || "",
          tanggal_mulai_jabatan: initialValues?.tanggal_mulai_jabatan || "",
          tanggal_selesai_jabatan: initialValues?.tanggal_selesai_jabatan || "",
          lokasi: initialValues?.lokasi || "",
        }}
        validationSchema={schema}
        onSubmit={(values, { setErrors, setStatus }) => null}
      >
        {({ isSubmitting, errors, touched, status, isValid }) => (
          <Form className="flex flex-col gap-4">
            <Input
              label="jabatan"
              name="jabatan"
              type="text"
              value={initialValues?.jabatan}
              errors={errors.jabatan}
              touched={touched.jabatan}
            />
            <KategoriKegiatanSelection
              type={"tree"}
              menu={"pembicara"}
              name={"kategori_kegiatan"}
              value={initialValues?.id_kategori_kegiatan}
              errors={errors.kategori_kegiatan}
              touched={touched.kategori_kegiatan}
            />
            <Input
              label="No SK Penugasan"
              name="sk_jabatan"
              type="text"
              value={initialValues?.sk_jabatan}
              errors={errors.sk_jabatan}
              touched={touched.sk_jabatan}
            />
            <Input
              label="tanggal pelaksanaan"
              name="tanggal_mulai_jabatan"
              type="date"
              value={initialValues?.tanggal_mulai_jabatan}
              errors={errors.tanggal_mulai_jabatan}
              touched={touched.tanggal_mulai_jabatan}
            />
            <Input
              label="tanggal_selesai_jabatan"
              name="tanggal_selesai_jabatan"
              type="date"
              value={initialValues?.tanggal_selesai_jabatan}
              errors={errors.tanggal_selesai_jabatan}
              touched={touched.tanggal_selesai_jabatan}
            />
            <Input
              label="lokasi"
              name="lokasi"
              type="text"
              value={initialValues?.lokasi}
              errors={errors.lokasi}
              touched={touched.lokasi}
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

export default FormCreateJabatanStruktural;
