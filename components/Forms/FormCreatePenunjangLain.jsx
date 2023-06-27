import React from "react";
import { Formik, Form } from "formik";
import {
  Action,
  Button,
  FormAnggotaKegiatan,
  Input,
  KategoriKegiatanSelection,
  MultipleUploadFile,
  Select,
  Table,
} from "..";
import * as yup from "yup";
import { useRouter } from "next/router";

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
  nama: yup.string().required("nama kegiatan wajib diisi."),
  jenis_kegiatan: yup.string().required("jenis kegiatan wajib diisi."),
  instansi: yup.string().required("instansi wajib diisi."),
  tingkat: yup.string().required("tingkat wajib diisi."),
  sk_penugasan: yup.string().required("sk_penugasan diisi."),
  tanggal_mulai: yup.string().required("tanggal mulai diisi."),
  tanggal_selesai: yup.string().required("tanggal selesai diisi."),
  anggota_dosen: yup.object().shape({
    id_sdm: yup.string().required("id_sdm wajib diisi."),
    name: yup.string().required("nama wajib diisi."),
    peran: yup.string().required("peran wajib diisi."),
  }),
});

const FormCreatePenunjangLain = ({ initialValues }) => {
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
          nama: initialValues?.nama || "",
          jenis_kegiatan: initialValues?.jenis_kegiatan || "",
          instansi: initialValues?.instansi || "",
          tingkat: initialValues?.tingkat || "",
          sk_penugasan: initialValues?.sk_penugasan || "",
          tanggal_mulai: initialValues?.tanggal_mulai || "",
          tanggal_selesai: initialValues?.tanggal_selesai || "",
          anggota_dosen: initialValues?.anggota_dosen || [],
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
              menu={"penunjang_lain"}
              type={"tree"}
              value={initialValues?.id_kategori_kegiatan}
              errors={errors.kategori_kegiatan}
              touched={touched.kategori_kegiatan}
            />
            <Input
              label="nama kegiatan"
              name="nama"
              type="text"
              value={initialValues?.nama}
              errors={errors.nama}
              touched={touched.nama}
            />
            <Select
              label="jenis kegiatan"
              name="jenis_kegiatan"
              type={[]}
              value={initialValues?.jenis_kegiatan}
              errors={errors.jenis_kegiatan}
              touched={touched.jenis_kegiatan}
            />
            <Input
              label="instansi"
              name="instansi"
              type="text"
              value={initialValues?.instansi}
              errors={errors.instansi}
              touched={touched.instansi}
            />
            <Select
              label="tingkat"
              name="tingkat"
              option={[
                { value: "internasional", label: "internasional" },
                { value: "nasional", label: "nasional" },
                { value: "lokal", label: "lokal" },
                { value: "daerah", label: "daerah" },
              ]}
              labelKey={"label"}
              valueKey={"value"}
              value={initialValues?.tingkat}
              errors={errors.tingkat}
              touched={touched.tingkat}
            />
            <Input
              label="no sk penugasan"
              name="sk_penugasan"
              type="text"
              value={initialValues?.sk_penugasan}
              errors={errors.sk_penugasan}
              touched={touched.sk_penugasan}
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
            <span className="uppercase leading-tight font-bold text-sm">
              Anggota Kegiatan (Dosen)
            </span>
            <FormAnggotaKegiatan
              name={"anggota_dosen"}
              values={values.anggota_dosen}
              defaultValue={{
                id_sdm: "",
                nama: "",
                peran: "",
              }}
            />
            <MultipleUploadFile
              values={values}
              errors={errors}
              touched={touched}
              setFieldValue={setFieldValue}
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

export default FormCreatePenunjangLain;
