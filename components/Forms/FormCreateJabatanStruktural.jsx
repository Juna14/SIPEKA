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
  Selector,
  Table,
} from "..";
import * as yup from "yup";
import { createUser } from "@/helper/api/api";
import { useRouter } from "next/router";
import { fetchJabatanNegara } from "@/helper/api/apiSister";

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
  jabatan: yup.string().required("jabatan kegiatan wajib diisi."),
  kategori_kegiatan: yup.string().required("kategori kegiatan wajib diisi."),
  sk_jabatan: yup.string().required("sk_jabatan bidang wajib diisi."),
  tanggal_mulai_jabatan: yup
    .string()
    .required("tanggal_mulai_jabatan wajib diisi."),
  tanggal_selesai_jabatan: yup
    .string()
    .required("tanggal_selesai_jabatan sebelumnya wajib diisi."),
  lokasi: yup.string().required("lokasi wajib diisi."),
});

const FormCreateJabatanStruktural = ({ initialValues }) => {
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
            <Selector
              label="jabatan tugas"
              name="jabatan"
              placeholder={"Pilih Jabatan"}
              queryKey={"fetchJabatanNegara"}
              queryFn={() => fetchJabatanNegara()}
              onChange={setFieldValue}
              valueKey={"id"}
              labelKey={"nama"}
              values={{
                id: "",
                nama: "",
              }}
              errors={errors.jabatan}
              touched={touched.jabatan}
            />
            <KategoriKegiatanSelection
              type={"tree"}
              menu={"jabatan_struktural"}
              name={"kategori_kegiatan"}
              value={initialValues?.id_kategori_kegiatan}
              errors={errors.kategori_kegiatan}
              touched={touched.kategori_kegiatan}
            />
            <Input
              label="No SK Jabatan Struktural"
              name="sk_jabatan"
              type="text"
              value={initialValues?.sk_jabatan}
              errors={errors.sk_jabatan}
              touched={touched.sk_jabatan}
            />
            <Input
              label="terhitung mulai tanggal"
              name="tanggal_mulai_jabatan"
              type="date"
              value={initialValues?.tanggal_mulai_jabatan}
              errors={errors.tanggal_mulai_jabatan}
              touched={touched.tanggal_mulai_jabatan}
            />
            <Input
              label="terhitung selesai tanggal"
              name="tanggal_selesai_jabatan"
              type="date"
              value={initialValues?.tanggal_selesai_jabatan}
              errors={errors.tanggal_selesai_jabatan}
              touched={touched.tanggal_selesai_jabatan}
            />
            <Input
              label="lokasi penugasan"
              name="lokasi"
              type="text"
              value={initialValues?.lokasi}
              errors={errors.lokasi}
              touched={touched.lokasi}
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

export default FormCreateJabatanStruktural;
