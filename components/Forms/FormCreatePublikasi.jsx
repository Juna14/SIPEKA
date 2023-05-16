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
  kategori_kegiatan: yup.string().required("kategori kegiatan wajib di isi."),
  judul: yup.string().required("judul wajib di isi."),
  afiliasi: yup.string().required("afiliasi wajib di isi."),
  kelompok_bidang: yup.string().required("kelompok bidang wajib di isi."),
  litabmas_sebelumnya: yup
    .string()
    .required("litabmas sebelumnya wajib di isi."),
  jenis_skim: yup.string().required("jenis skim wajib di isi."),
  lokasi: yup.string().required("lokasi kegiatan wajib di isi."),
  tahun_usulan: yup.string().required("tahun usulan wajib di isi."),
  tahun_kegiatan: yup.string().required("tahun kegiatan wajib di isi."),
  tahun_pelaksanaan: yup.string().required("tahun pelaksanaan wajib di isi."),
  dana_dikti: yup.string().required("dana dikti wajib di isi."),
  dana_perguruan_tinggi: yup
    .string()
    .required("dana perguruan tinggi wajib di isi."),
  dana_institusi_lain: yup
    .string()
    .required("dana institusi lain wajib di isi."),
  in_kind: yup.string().required("in kind wajib di isi."),
  sk_penugasan: yup.string().required("sk penugasan wajib di isi."),
  tanggal_sk_penugasan: yup
    .string()
    .required("tanggal sk penugasan wajib di isi."),
  mitra_litabmas: yup.string().required("mitra litabmas wajib di isi."),
});

const FormCreatePublikasi = ({ initialValues }) => {
  const router = useRouter();
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          kategori_kegiatan: initialValues?.id_jabatan_fungsional || "",
        }}
        validationSchema={schema}
        onSubmit={(values, { setErrors, setStatus }) => null}
      >
        {({ isSubmitting, errors, touched, status, isValid }) => (
          <Form className="flex flex-col gap-4">
            <KategoriKegiatanSelection
              type={"tree"}
              menu={"publikasi"}
              name={"kategori_kegiatan"}
              value={initialValues?.id_kategori_kegiatan}
              errors={errors.kategori_kegiatan}
              touched={touched.kategori_kegiatan}
            />
            <Input
              label="Judul Kegiatan"
              name="judul"
              type="text"
              errors={errors.judul}
              touched={touched.judul}
            />
            <MultipleUploadFile />
            {router.pathname.includes("edit") && initialValues?.penulis && (
              <>
                <div>
                  <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
                    Anggota Dosen
                  </h1>
                  <Table
                    searchAble
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
                    searchAble
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
                    searchAble
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
              text={isSubmitting ? "Loading..." : "Ajukan perubahan"}
            />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormCreatePublikasi;
