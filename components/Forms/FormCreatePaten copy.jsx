import React from "react";
import { Formik, Form } from "formik";
import {
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
  judul: yup.string().required("judul wajib diisi."),
  afiliasi: yup.string().required("afiliasi wajib diisi."),
  kelompok_bidang: yup.string().required("kelompok bidang wajib diisi."),
  litabmas_sebelumnya: yup
    .string()
    .required("litabmas sebelumnya wajib diisi."),
  jenis_skim: yup.string().required("jenis skim wajib diisi."),
  lokasi: yup.string().required("lokasi kegiatan wajib diisi."),
  tahun_usulan: yup.string().required("tahun usulan wajib diisi."),
  tahun_kegiatan: yup.string().required("tahun kegiatan wajib diisi."),
  tahun_pelaksanaan: yup.string().required("tahun pelaksanaan wajib diisi."),
  dana_dikti: yup.string().required("dana dikti wajib diisi."),
  dana_perguruan_tinggi: yup
    .string()
    .required("dana perguruan tinggi wajib diisi."),
  dana_institusi_lain: yup
    .string()
    .required("dana institusi lain wajib diisi."),
  in_kind: yup.string().required("in kind wajib diisi."),
  sk_penugasan: yup.string().required("sk penugasan wajib diisi."),
  tanggal_sk_penugasan: yup
    .string()
    .required("tanggal sk penugasan wajib diisi."),
  mitra_litabmas: yup.string().required("mitra litabmas wajib diisi."),
});

const FormCreatePaten = ({ initialValues }) => {
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
          kategori_kegiatan: initialValues?.id_jabatan_fungsional || "",
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
              menu={"kekayaan_intelektual"}
              name={"kategori_kegiatan"}
              value={initialValues?.id_kategori_kegiatan}
              errors={errors.kategori_kegiatan}
              touched={touched.kategori_kegiatan}
            />

            <MultipleUploadFile
              values={values}
              errors={errors}
              touched={touched}
              setFieldValue={setFieldValue}
            />

            {router.pathname.includes("edit") && initialValues?.penulis && (
              <>
                <div>
                  <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
                    Anggota Dosen
                  </h1>
                  <Table
                    columns={[
                      { key: "id", title: "No", dataType: "numbering" },
                      { key: "nama", title: "nama" },
                      { key: "urutan", title: "urutan" },
                      { key: "afiliasi", title: "afiliasi" },
                      { key: "peran", title: "peran" },
                      {
                        key: "corresponding_author",
                        title: "corresponding author",
                        render: (val) =>
                          val.corresponding_author ? "Ya" : "Tidak",
                      },
                    ]}
                    data={initialValues?.penulis.filter(
                      (item) => item.jenis === "Dosen"
                    )}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
                    Anggota Mahasiswa
                  </h1>
                  <Table
                    columns={[
                      { key: "id", title: "No", dataType: "numbering" },
                      { key: "nama", title: "nama" },
                      { key: "urutan", title: "urutan" },
                      { key: "afiliasi", title: "afiliasi" },
                      { key: "peran", title: "peran" },
                      {
                        key: "corresponding_author",
                        title: "corresponding author",
                        render: (val) =>
                          val.corresponding_author ? "Ya" : "Tidak",
                      },
                    ]}
                    data={initialValues?.penulis.filter(
                      (item) => item.jenis === "Mahasiswa"
                    )}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
                    Anggota Non Civitas Akademika
                  </h1>
                  <Table
                    columns={[
                      { key: "id", title: "No", dataType: "numbering" },
                      { key: "nama", title: "nama" },
                      { key: "urutan", title: "urutan" },
                      { key: "afiliasi", title: "afiliasi" },
                      { key: "peran", title: "peran" },
                      {
                        key: "corresponding_author",
                        title: "corresponding author",
                        render: (val) =>
                          val.corresponding_author ? "Ya" : "Tidak",
                      },
                    ]}
                    data={initialValues?.penulis.filter(
                      (item) => item.jenis === "Other"
                    )}
                  />
                </div>
              </>
            )}
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

export default FormCreatePaten;
