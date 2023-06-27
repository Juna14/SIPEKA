import React from "react";
import { Formik, Form } from "formik";
import {
  Button,
  FormAnggotaPaten,
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
          penulis_dosen: initialValues?.penulis.filter(
            (item) => item.jenis === "Dosen"
          ) || [
            {
              nama: "",
              jenis: "",
              id_sdm: "",
              id_peserta_didik: "",
              nomor_induk_peserta_didik: "",
              id_orang: "",
              aktif: "",
              peran: "",
            },
          ],
          penulis_mahasiswa: initialValues?.penulis.filter(
            (item) => item.jenis === "Mahasiswa"
          ) || [
            {
              nama: "",
              jenis: "",
              id_sdm: "",
              id_peserta_didik: "",
              nomor_induk_peserta_didik: "",
              id_orang: "",
              aktif: "",
              peran: "",
            },
          ],
          penulis_lain: initialValues?.penulis.filter(
            (item) => item.jenis === "Lain"
          ) || [
            {
              nama: "",
              jenis: "",
              id_sdm: "",
              id_peserta_didik: "",
              nomor_induk_peserta_didik: "",
              id_orang: "",
              aktif: "",
              peran: "",
            },
          ],
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

            <span className="uppercase leading-tight font-bold text-sm">
              Anggota Kegiatan (Dosen)
            </span>
            <FormAnggotaPaten
              name={"penulis_dosen"}
              values={values.penulis_dosen}
              defaultValue={{
                nama: "",
                jenis: "",
                id_sdm: "",
                id_peserta_didik: "",
                nomor_induk_peserta_didik: "",
                id_orang: "",
                aktif: "",
                peran: "",
              }}
            />
            <span className="uppercase leading-tight font-bold text-sm">
              Anggota Kegiatan (Mahasiswa)
            </span>
            <FormAnggotaPaten
              name={"penulis_mahasiswa"}
              values={values.penulis_mahasiswa}
              defaultValue={{
                nama: "",
                jenis: "",
                id_sdm: "",
                id_peserta_didik: "",
                nomor_induk_peserta_didik: "",
                id_orang: "",
                aktif: "",
                peran: "",
              }}
            />
            <span className="uppercase leading-tight font-bold text-sm">
              Anggota Kegiatan (Kolaborator Eksternal)
            </span>
            <FormAnggotaPaten
              name={"penulis_lain"}
              values={values?.penulis_lain}
              defaultValue={{
                nama: "",
                jenis: "",
                id_sdm: "",
                id_peserta_didik: "",
                nomor_induk_peserta_didik: "",
                id_orang: "",
                aktif: "",
                peran: "",
              }}
            />
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
