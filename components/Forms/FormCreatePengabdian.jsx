import React from "react";
import { Formik, Form } from "formik";
import {
  Action,
  Button,
  FormAnggotaPengabdian,
  Input,
  JabatanFungsionalSelection,
  KategoriKegiatanSelection,
  KelompokBidangSelection,
  MultipleUploadFile,
  Select,
  Selector,
  Table,
} from "..";
import * as yup from "yup";
import { createUser } from "@/helper/api/api";
import { useRouter } from "next/router";
import { fetchKelompokBidang } from "@/helper/api/apiSister";

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
  lokasi: yup.string().required("lokasi wajib diisi."),
  tahun_usulan: yup.string().required("tahun usulan wajib diisi."),
  tahun_kegiatan: yup.string().required("tahun kegiatan wajib diisi."),
  tahun_pelaksanaan: yup.string().required("tahun pelaksanaan wajib diisi."),
  tahun_pelaksanaan_ke: yup
    .string()
    .required("tahun pelaksanaan ke wajib diisi."),
  lama_kegiatan: yup.string().required("lama kegiatan wajib diisi."),
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

const FormCreatePengabdian = ({ initialValues }) => {
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
          judul: initialValues?.judul || "",
          afiliasi: initialValues?.afiliasi || "",
          kelompok_bidang: initialValues?.id_kelompok_bidang || "",
          litabmas_sebelumnya: initialValues?.litabmas_sebelumnya || "",
          jenis_skim: initialValues?.jenis_skim || "",
          lokasi: initialValues?.lokasi || "",
          tahun_usulan: initialValues?.tahun_usulan || "",
          tahun_kegiatan: initialValues?.tahun_kegiatan || "",
          tahun_pelaksanaan: initialValues?.tahun_pelaksanaan || "",
          tahun_pelaksanaan_ke: initialValues?.tahun_pelaksanaan_ke || "",
          lama_kegiatan: initialValues?.lama_kegiatan || "",
          dana_dikti: initialValues?.dana_dikti || "",
          dana_perguruan_tinggi: initialValues?.dana_perguruan_tinggi || "",
          dana_institusi_lain: initialValues?.dana_institusi_lain || "",
          in_kind: initialValues?.in_kind || "",
          sk_penugasan: initialValues?.sk_penugasan || "",
          tanggal_sk_penugasan: initialValues?.tanggal_sk_penugasan || "",
          mitra_litabmas: initialValues?.mitra_litabmas || "",
          anggota_dosen: initialValues?.anggota.filter(
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
          anggota_mahasiswa: initialValues?.anggota.filter(
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
          anggota_lain: initialValues?.anggota.filter(
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
              menu={"pengabdian"}
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
            <Input
              label="afiliasi"
              name="afiliasi"
              type="text"
              errors={errors.afiliasi}
              touched={touched.afiliasi}
            />
            <Selector
              label="Kelompok Bidang"
              name="kelompok_bidang"
              placeholder={"Pilih Bidang Ilmu"}
              values={{
                id: values?.id_bidang_ilmu,
                nama: values?.bidang_ilmu,
              }}
              onChange={setFieldValue}
              queryKey={"bahan_ajar"}
              queryFn={() => fetchKelompokBidang(true)}
              valueKey="id"
              labelKey="nama"
              errors={errors.bidang_ilmu}
              touched={touched.bidang_ilmu}
            />
            <Input
              label="litabmas sebelumnya"
              name="litabmas_sebelumnya"
              type="text"
              errors={errors.litabmas_sebelumnya}
              touched={touched.litabmas_sebelumnya}
            />
            <Input
              label="jenis skim"
              name="jenis_skim"
              type="text"
              errors={errors.jenis_skim}
              touched={touched.jenis_skim}
            />
            <Input
              label="lokasi"
              name="lokasi"
              type="text"
              errors={errors.lokasi}
              touched={touched.lokasi}
            />
            <Input
              label="tahun usulan"
              name="tahun_usulan"
              type="number"
              errors={errors.tahun_usulan}
              touched={touched.tahun_usulan}
            />
            <Input
              label="tahun kegiatan"
              name="tahun_kegiatan"
              type="number"
              errors={errors.tahun_kegiatan}
              touched={touched.tahun_kegiatan}
            />
            <Input
              label="tahun pelaksanaan"
              name="tahun_pelaksanaan"
              type="number"
              errors={errors.tahun_pelaksanaan}
              touched={touched.tahun_pelaksanaan}
            />
            <Input
              label="lama kegiatan"
              name="lama_kegiatan"
              type="number"
              errors={errors.lama_kegiatan}
              touched={touched.lama_kegiatan}
            />
            <Input
              label="tahun pelaksanaan ke"
              name="tahun_pelaksanaan_ke"
              type="number"
              errors={errors.tahun_pelaksanaan_ke}
              touched={touched.tahun_pelaksanaan_ke}
            />
            <Input
              label="dana dikti"
              name="dana_dikti"
              type="number"
              errors={errors.dana_dikti}
              touched={touched.dana_dikti}
            />
            <Input
              label="dana perguruan tinggi"
              name="dana_perguruan_tinggi"
              type="number"
              errors={errors.dana_perguruan_tinggi}
              touched={touched.dana_perguruan_tinggi}
            />
            <Input
              label="dana institusi lain"
              name="dana_institusi_lain"
              type="number"
              errors={errors.dana_institusi_lain}
              touched={touched.dana_institusi_lain}
            />
            <Input
              label="in kind"
              name="in_kind"
              type="text"
              errors={errors.in_kind}
              touched={touched.in_kind}
            />
            <Input
              label="sk penugasan"
              name="sk_penugasan"
              type="text"
              errors={errors.sk_penugasan}
              touched={touched.sk_penugasan}
            />
            <Input
              label="tanggal sk penugasan"
              name="tanggal_sk_penugasan"
              type="date"
              errors={errors.tanggal_sk_penugasan}
              touched={touched.tanggal_sk_penugasan}
            />
            <Input
              label="mitra litabmas"
              name="mitra_litabmas"
              type="text"
              errors={errors.mitra_litabmas}
              touched={touched.mitra_litabmas}
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
            <span className="uppercase leading-tight font-bold text-sm">
              Anggota Kegiatan (Dosen)
            </span>
            <FormAnggotaPengabdian
              name={"anggota_dosen"}
              values={values.anggota_dosen}
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
            <FormAnggotaPengabdian
              name={"anggota_mahasiswa"}
              values={values.anggota_mahasiswa}
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
            <FormAnggotaPengabdian
              name={"anggota_lain"}
              values={values?.anggota_lain}
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
            {/* {router.pathname.includes("edit") && initialValues?.anggota && (
              <>
                <div>
                  <span className="uppercase leading-tight font-bold text-sm">
                    Anggota Dosen
                  </span>
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
                    data={initialValues?.anggota.filter(
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
                    data={initialValues?.anggota.filter(
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
                    data={initialValues?.anggota.filter(
                      (item) => item.jenis === "Other"
                    )}
                  />
                </div>
              </>
            )} */}
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

export default FormCreatePengabdian;
