import React from "react";
import { Formik, Form } from "formik";
import {
  Action,
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
  lama_kegiatan: yup.string().required("lama kegiatan wajib diisi."),
  tahun_pelaksanaan_ke: yup.string().required("tahun pelaksanaan wajib diisi."),
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

const FormCreatePembinaanMahasiswa = ({ initialValues }) => {
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
          kelompok_bidang: initialValues?.kelompok_bidang || "",
          litabmas_sebelumnya: initialValues?.litabmas_sebelumnya || "",
          jenis_skim: initialValues?.jenis_skim || "",
          lokasi: initialValues?.lokasi || "",
          tahun_usulan: initialValues?.tahun_usulan.toLocaleString() || "",
          tahun_kegiatan: initialValues?.tahun_kegiatan.toLocaleString() || "",
          tahun_pelaksanaan: initialValues?.tahun_pelaksanaan || "",
          lama_kegiatan: initialValues?.lama_kegiatan.toLocaleString() || "",
          tahun_pelaksanaan_ke: initialValues?.tahun_pelaksanaan_ke || "",
          dana_dikti: initialValues?.dana_dikti.toLocaleString() || "",
          dana_perguruan_tinggi:
            initialValues?.dana_perguruan_tinggi.toLocaleString() || "",
          dana_institusi_lain:
            initialValues?.dana_institusi_lain.toLocaleString() || "",
          in_kind: initialValues?.in_kind || "",
          sk_penugasan: initialValues?.sk_penugasan || "",
          tanggal_sk_penugasan: initialValues?.tanggal_sk_penugasan || "",
          mitra_litabmas: initialValues?.mitra_litabmas[0]?.nama || "",
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
              menu={"penelitian"}
              name={"kategori_kegiatan"}
              value={initialValues?.id_kategori_kegiatan}
              errors={errors.kategori_kegiatan}
              touched={touched.kategori_kegiatan}
            />
            <Input
              label="Judul Kegiatan"
              name="judul"
              type="text"
              value={initialValues?.judul}
              errors={errors.judul}
              touched={touched.judul}
            />
            <Input
              label="kelompok bidang"
              name="kelompok_bidang"
              type="text"
              value={initialValues?.kelompok_bidang}
              errors={errors.kelompok_bidang}
              touched={touched.kelompok_bidang}
            />
            <Input
              label="afiliasi"
              name="afiliasi"
              type="text"
              value={initialValues?.afiliasi}
              errors={errors.afiliasi}
              touched={touched.afiliasi}
            />
            <Input
              label="litabmas sebelumnya"
              name="litabmas_sebelumnya"
              type="text"
              value={initialValues?.litabmas_sebelumnya}
              errors={errors.litabmas_sebelumnya}
              touched={touched.litabmas_sebelumnya}
            />
            <Input
              label="jenis skim"
              name="jenis_skim"
              type="text"
              value={initialValues?.jenis_skim}
              errors={errors.jenis_skim}
              touched={touched.jenis_skim}
            />
            <Input
              label="lokasi kegiatan"
              name="lokasi"
              type="text"
              value={initialValues?.lokasi}
              errors={errors.lokasi}
              touched={touched.lokasi}
            />
            <Input
              label="tahun usulan"
              name="tahun_usulan"
              type="number"
              value={initialValues?.tahun_usulan}
              errors={errors.tahun_usulan}
              touched={touched.tahun_usulan}
            />
            <Input
              label="tahun kegiatan"
              name="tahun_kegiatan"
              type="number"
              value={initialValues?.tahun_kegiatan}
              errors={errors.tahun_kegiatan}
              touched={touched.tahun_kegiatan}
            />
            <Input
              label="tahun pelaksanaan"
              name="tahun_pelaksanaan"
              type="number"
              value={initialValues?.tahun_pelaksanaan}
              errors={errors.tahun_pelaksanaan}
              touched={touched.tahun_pelaksanaan}
            />
            <Input
              label="lama kegiatan (tahun)"
              name="lama_kegiatan"
              type="number"
              value={initialValues?.lama_kegiatan}
              errors={errors.lama_kegiatan}
              touched={touched.lama_kegiatan}
            />
            <Input
              label="tahun pelaksanaan ke"
              name="tahun_pelaksanaan_ke"
              type="number"
              value={initialValues?.tahun_pelaksanaan_ke}
              errors={errors.tahun_pelaksanaan_ke}
              touched={touched.tahun_pelaksanaan_ke}
            />
            <Input
              label="dana dari dikti (Rp.)"
              name="dana_dikti"
              type="number"
              value={initialValues?.dana_dikti}
              errors={errors.dana_dikti}
              touched={touched.dana_dikti}
            />
            <Input
              label="dana dari perguruan tinggi (Rp.)"
              name="dana_perguruan_tinggi"
              type="number"
              value={initialValues?.dana_perguruan_tinggi}
              errors={errors.dana_perguruan_tinggi}
              touched={touched.dana_perguruan_tinggi}
            />
            <Input
              label="dana dari institusi lain (Rp.)"
              name="dana_institusi_lain"
              type="number"
              value={initialValues?.dana_institusi_lain}
              errors={errors.dana_institusi_lain}
              touched={touched.dana_institusi_lain}
            />
            <Input
              label="in kind"
              name="in_kind"
              type="text"
              value={initialValues?.in_kind}
              errors={errors.in_kind}
              touched={touched.in_kind}
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
              label="tanggal sk penugasan"
              name="tanggal_sk_penugasan"
              type="date"
              value={initialValues?.tanggal_sk_penugasan}
              errors={errors.tanggal_sk_penugasan}
              touched={touched.tanggal_sk_penugasan}
            />
            <Input
              label="Mitra Litabmas"
              name="mitra_litabmas"
              type="text"
              value={initialValues?.mitra_litabmas[0]?.nama}
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
                      title: "tanggal_upload",
                      dataType: "date",
                    },
                    { key: "jenis_dokumen", title: "jenis_dokumen" },
                    {
                      key: "action",
                      title: "action",
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

export default FormCreatePembinaanMahasiswa;
