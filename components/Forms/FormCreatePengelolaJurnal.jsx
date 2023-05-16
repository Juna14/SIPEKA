import React from "react";
import { Formik, Form } from "formik";
import {
  Action,
  Button,
  Input,
  JabatanFungsionalSelection,
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
  media_publikasi: yup.string().required("media_publikasi wajib di isi."),
  peran: yup.string().required("peran wajib di isi."),
  sk_penugasan: yup.string().required("kelompok bidang wajib di isi."),
  tanggal_mulai: yup.string().required("litabmas sebelumnya wajib di isi."),
  tanggal_selesai: yup.string().required("jenis skim wajib di isi."),
  aktif: yup.string().required("aktif kegiatan wajib di isi."),
});

const FormCreatePengelolaJurnal = ({ initialValues }) => {
  const router = useRouter();

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          kategori_kegiatan: initialValues?.id_kategori_kegiatan || "",
          media_publikasi: initialValues?.media_publikasi || "",
          peran: initialValues?.peran || "",
          sk_penugasan: initialValues?.sk_penugasan || "",
          tanggal_mulai: initialValues?.tanggal_mulai || "",
          tanggal_selesai: initialValues?.tanggal_selesai || "",
          aktif: initialValues?.aktif || "",
        }}
        validationSchema={schema}
        onSubmit={(values, { setErrors, setStatus }) => null}
      >
        {({ isSubmitting, errors, touched, status, isValid }) => (
          <Form className="flex flex-col gap-4">
            <KategoriKegiatanSelection
              type={"tree"}
              menu={"pengelola_jurnal"}
              name={"kategori_kegiatan"}
              value={initialValues?.id_kategori_kegiatan}
              errors={errors.kategori_kegiatan}
              touched={touched.kategori_kegiatan}
            />
            <Input
              label="Media Publikasi"
              name="media_publikasi"
              type="text"
              value={initialValues?.media_publikasi}
              errors={errors.media_publikasi}
              touched={touched.media_publikasi}
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
              label="peran"
              name="peran"
              type="text"
              value={initialValues?.peran}
              errors={errors.peran}
              touched={touched.peran}
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
            <Input
              label="status aktif"
              name="aktif"
              type="text"
              value={initialValues?.aktif}
              errors={errors.aktif}
              touched={touched.aktif}
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

export default FormCreatePengelolaJurnal;
