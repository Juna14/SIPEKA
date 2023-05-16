import React from "react";
import { Formik, Form } from "formik";
import {
  Action,
  Button,
  Input,
  KategoriKegiatanSelection,
  MultipleUploadFile,
  NestedList,
  PerguruanTinggiSelection,
  Select,
  StackedTab,
  Table,
  Textarea,
} from "..";
import * as yup from "yup";
import { createUser, fetchListInpassing } from "@/helper/api/api";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { dateFormater } from "@/helper/constant";

const schema = yup.object().shape({
  kategori_kegiatan: yup.string().required("kategori kegiatan wajib di isi."),
  nama_organisasi: yup.string().required("nama organisasi wajib di isi."),
  peran: yup.string().required("peran wajib di isi."),
  tanggal_mulai_keanggotaan: yup
    .string()
    .required("mulai keanggotaan wajib di isi."),
  tanggal_selesai_keanggotaan: yup
    .string()
    .required("selesai keanggotaan wajib di isi."),
  instansi_profesi: yup.string().required("instansi profesi wajib di isi."),
});

const FormCreateAnggotaProfesi = ({ initialValues }) => {
  const router = useRouter();
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          kategori_kegiatan: initialValues?.id_kategori_kegiatan || "",
          nama_organisasi: initialValues?.nama_organisasi || "",
          peran: initialValues?.peran || "",
          tanggal_mulai_keanggotaan:
            initialValues?.tanggal_mulai_keanggotaan || "",
          tanggal_selesai_keanggotaan:
            initialValues?.tanggal_selesai_keanggotaan || "",
          instansi_profesi: initialValues?.instansi_profesi || "",
        }}
        validationSchema={schema}
        onSubmit={(values, { setErrors, setStatus }) => null}
      >
        {({ isSubmitting, errors, touched, status, isValid }) => (
          <Form className="flex flex-col gap-4">
            <KategoriKegiatanSelection
              type={"tree"}
              menu={"anggota_profesi"}
              value={initialValues?.id_kategori_kegiatan}
              errors={errors.kategori_kegiatan}
              touched={touched.kategori_kegiatan}
            />
            <Input
              label="nama organisasi"
              name="nama_organisasi"
              type="text"
              value={initialValues?.nama_organisasi}
              errors={errors.nama_organisasi}
              touched={touched.nama_organisasi}
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
              label="mulai keanggotaan"
              name="tanggal_mulai_keanggotaan"
              type="date"
              value={initialValues?.tanggal_mulai_keanggotaan}
              errors={errors.tanggal_mulai_keanggotaan}
              touched={touched.tanggal_mulai_keanggotaan}
            />
            <Input
              label="selesai keanggotaan"
              name="tanggal_selesai_keanggotaan"
              type="date"
              value={initialValues?.tanggal_selesai_keanggotaan}
              errors={errors.tanggal_selesai_keanggotaan}
              touched={touched.tanggal_selesai_keanggotaan}
            />
            <Input
              label="instansi profesi"
              name="instansi_profesi"
              type="text"
              value={initialValues?.instansi_profesi}
              errors={errors.instansi_profesi}
              touched={touched.instansi_profesi}
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

export default FormCreateAnggotaProfesi;
