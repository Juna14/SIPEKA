import React from "react";
import { Formik, Form } from "formik";
import {
  Action,
  Button,
  Input,
  KategoriKegiatanSelection,
  MultipleUploadFile,
  Table,
} from "..";
import * as yup from "yup";
import { createUser, fetchListInpassing } from "@/helper/api/api";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { dateFormater } from "@/helper/constant";

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
  nama_organisasi: yup.string().required("nama organisasi wajib diisi."),
  peran: yup.string().required("peran wajib diisi."),
  tanggal_mulai_keanggotaan: yup
    .string()
    .required("mulai keanggotaan wajib diisi."),
  tanggal_selesai_keanggotaan: yup
    .string()
    .required("selesai keanggotaan wajib diisi."),
  instansi_profesi: yup.string().required("instansi profesi wajib diisi."),
});

const FormCreateAnggotaProfesi = ({ initialValues }) => {
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
            <MultipleUploadFile
              setFieldValue={setFieldValue}
              values={values}
              errors={errors}
              touched={touched}
            >
              {router.pathname.includes("edit") && initialValues?.dokumen && (
                <Table
                  columns={[
                    { key: "id", title: "No.", dataType: "numbering" },
                    { key: "nama_file", title: "nama file" },
                    { key: "jenis_file", title: "jenis file" },
                    {
                      key: "tanggal_upload",
                      title: "tanggal upload",
                      dataType: "date",
                    },
                    { key: "jenis_dokumen", title: "jenis dokumen" },
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
              text={isSubmitting ? "Memuat..." : "Ajukan perubahan"}
            />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormCreateAnggotaProfesi;
