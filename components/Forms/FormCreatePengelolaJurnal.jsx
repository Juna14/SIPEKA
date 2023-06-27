import React from "react";
import { Formik, Form } from "formik";
import {
  Action,
  Button,
  Input,
  InputRadio,
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
import { fetchMediaPublikasi } from "@/helper/api/apiSister";

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
  media_publikasi: yup.string().required("media_publikasi wajib diisi."),
  peran: yup.string().required("peran wajib diisi."),
  sk_penugasan: yup.string().required("kelompok bidang wajib diisi."),
  tanggal_mulai: yup.string().required("litabmas sebelumnya wajib diisi."),
  tanggal_selesai: yup.string().required("jenis skim wajib diisi."),
  aktif: yup.string().required("aktif kegiatan wajib diisi."),
});

const FormCreatePengelolaJurnal = ({ initialValues }) => {
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
              menu={"pengelola_jurnal"}
              name={"kategori_kegiatan"}
              value={initialValues?.id_kategori_kegiatan}
              errors={errors.kategori_kegiatan}
              touched={touched.kategori_kegiatan}
            />
            <Selector
              label="Media Publikasi"
              name="media_publikasi"
              values={{
                id: "",
                nama: "",
              }}
              errors={errors.media_publikasi}
              touched={touched.media_publikasi}
              queryKey={"media_publikasi"}
              queryFn={() => fetchMediaPublikasi("")}
              labelKey={"nama"}
              valueKey={"id"}
              onChange={setFieldValue}
              placeholder={"Pilih Media Publikasi"}
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

            <Select
              label="status aktif"
              name="aktif"
              option={[
                { value: "1", label: "Aktif" },
                { value: "0", label: "Tidak aktif" },
              ]}
              labelKey={"label"}
              valueKey={"value"}
              value={values?.aktif}
              errors={errors.aktif}
              touched={touched.aktif}
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

export default FormCreatePengelolaJurnal;
