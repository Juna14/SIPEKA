import React from "react";
import { Formik, Form } from "formik";
import {
  Button,
  FormAnggotaPaten,
  Input,
  KategoriKegiatanSelection,
  MultipleUploadFile,
  Select,
  Selector,
  Table,
  Textarea,
} from "..";
import * as yup from "yup";
import { useRouter } from "next/router";
import { fetchListKateogriCapaianLuaran } from "@/helper/api/apiSister";

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
});

const FormCreatePublikasi = ({ initialValues }) => {
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
          id_kategori_kegiatan: initialValues?.id_kategori_kegiatan || "",
          id_jenis_publikasi: initialValues?.id_jenis_publikasi || "",
          id_kategori_capaian_luaran:
            initialValues?.id_kategori_capaian_luaran || "",
          id_litabmas: initialValues?.id_litabmas || "",
          judul: initialValues?.judul || "",
          tanggal: initialValues?.tanggal || "",
          nomor_paten: initialValues?.nomor_paten || "",
          pemberi_paten: initialValues?.pemberi_paten || "",
          penerbit: initialValues?.penerbit || "",
          isbn: initialValues?.isbn || "",
          jumlah_halaman: initialValues?.jumlah_halaman || "",
          tautan: initialValues?.tautan || "",
          keterangan: initialValues?.keterangan || "",
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
              menu={"publikasi"}
              name={"kategori_kegiatan"}
              value={initialValues?.id_kategori_kegiatan}
              errors={errors.kategori_kegiatan}
              touched={touched.kategori_kegiatan}
            />

            {router.pathname.includes("edit") && initialValues?.penulis && (
              <>
                <Select
                  label={"Jenis"}
                  name={"id_jenis_publikasi"}
                  option={[
                    { value: 21, label: "Jurnal nasional" },
                    {
                      value: 22,
                      label: "Jurnal nasional terakreditasi",
                    },
                  ]}
                  labelKey={"label"}
                  valueKey={"value"}
                  errors={errors.id_jenis_publikasi}
                  touched={touched.id_jenis_publikasi}
                />
                <Selector
                  placeholder={"Pilih Kategori Capaian"}
                  label={"Kategori Capaian"}
                  name={"kategori_capaian"}
                  onChange={setFieldValue}
                  values={{
                    id: initialValues?.id_kategori_capaian_luaran || "",
                    name: initialValues?.kategori_capaian_luaran || "",
                  }}
                  errors={errors.kategori_capaian}
                  touched={touched.kategori_capaian}
                  labelKey={"nama"}
                  valueKey={"id"}
                  queryKey={"list-kategori-capaian-luaran"}
                  queryFn={() => fetchListKateogriCapaianLuaran()}
                />
                <Select
                  label={"Aktivitas Litabmas"}
                  name={"aktivitas_litabmas"}
                  option={[]}
                  labelKey={"label"}
                  valueKey={"value"}
                  errors={errors.aktivitas_litabmas}
                  touched={touched.aktivitas_litabmas}
                />
                <Input
                  label="Judul Artikel"
                  name="judul"
                  type="text"
                  errors={errors.judul}
                  touched={touched.judul}
                />
                <Input
                  label="Nama Jurnal"
                  name="nama_jurnal"
                  type="text"
                  errors={errors.nama_jurnal}
                  touched={touched.nama_jurnal}
                />
                <Input
                  label="Tautan Laman Jurnal"
                  name="tautan_laman_jurnal"
                  type="text"
                  errors={errors.tautan_laman_jurnal}
                  touched={touched.tautan_laman_jurnal}
                />
                <Input
                  label="Tanggal Terbit"
                  name="tanggal_terbit"
                  type="date"
                  errors={errors.tanggal_terbit}
                  touched={touched.tanggal_terbit}
                />
                <Input
                  label="Volume"
                  name="volume"
                  type="number"
                  errors={errors.volume}
                  touched={touched.volume}
                />
                <Input
                  label="nomor"
                  name="nomor"
                  type="number"
                  errors={errors.nomor}
                  touched={touched.nomor}
                />
                <Input
                  label="halaman"
                  name="halaman"
                  type="text"
                  errors={errors.halaman}
                  touched={touched.halaman}
                />
                <Input
                  label="Penerbit/Penyelenggara"
                  name="penerbit"
                  type="text"
                  errors={errors.penerbit}
                  touched={touched.penerbit}
                />
                <Input
                  label="DOI"
                  name="doi"
                  type="text"
                  errors={errors.doi}
                  touched={touched.doi}
                />
                <Input
                  label="ISSN"
                  name="issn"
                  type="text"
                  errors={errors.issn}
                  touched={touched.issn}
                />
                <Input
                  label="Tautan External"
                  name="tautan_external"
                  type="text"
                  errors={errors.tautan_external}
                  touched={touched.tautan_external}
                />
                <Textarea
                  label="Keterangan/Petunjuk Akses"
                  name="keterangan"
                  placeholder={"Keterangan/Petunjuk Akses"}
                  errors={errors.keterangan}
                  touched={touched.keterangan}
                />{" "}
              </>
            )}

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

export default FormCreatePublikasi;
