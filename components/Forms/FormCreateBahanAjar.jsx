import React from "react";
import { Formik, Form } from "formik";
import {
  Button,
  FormAnggotaKegiatan,
  KategoriKegiatanSelection,
  MultipleUploadFile,
  Selector,
} from "..";
import * as yup from "yup";
import { createUser, fetchListInpassing } from "@/helper/api/api";
import { useQuery } from "@tanstack/react-query";
import { fetchBahanAjar } from "@/helper/api/apiSister";

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
  golongan_pangkat: yup.string().required("jabatan fungsional wajib diisi."),
  sk: yup.string().required("sk wajib diisi."),
  tanggal_sk: yup.string().required("kelebihan pengajaran sk wajib diisi."),
  terhitung_mulai_tanggal: yup
    .string()
    .required("terhitung mulai tanggal wajib diisi."),
  masa_kerja_tahun: yup.string().required("kelebihan penelitian wajib diisi."),
  jenis_bahan_ajar: yup.string().required("jenis bahan ajar wajib diisi."),
});

const FormCreateBahanAjar = () => {
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
          anggota_dosen: [],
          anggota_mahasiswa: [],
          anggota_lain: [],
          golongan_pangkat: "",
          sk: "",
          tanggal_sk: "",
          terhitung_mulai_tanggal: "",
          masa_kerja_tahun: "",
          jenis_bahan_ajar: "",
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
              menu={"bahan_ajar"}
              type={"tree"}
              errors={errors.kategori_kegiatan}
              touched={touched.kategori_kegiatan}
            />
            <Selector
              label="jenis bahan ajar"
              name="jenis_bahan_ajar"
              placeholder={"Pilih Bahan Ajar"}
              values={{
                id: values.jenis_bahan_ajar,
                nama: values.jenis_bahan_ajar,
              }}
              onChange={setFieldValue}
              queryKey={"bahan_ajar"}
              queryFn={() => fetchBahanAjar()}
              valueKey="id"
              labelKey="nama"
              errors={errors.jenis_bahan_ajar}
              touched={touched.jenis_bahan_ajar}
            />
            <MultipleUploadFile
              values={values}
              errors={errors}
              touched={touched}
              setFieldValue={setFieldValue}
            />
            <h1 className="uppercase">Anggota Kegiatan (Dosen)</h1>
            <FormAnggotaKegiatan
              name={"anggota_dosen"}
              values={values.anggota_dosen}
              defaultValue={{
                id_sdm: "",
                nama: "",
                peran: "",
              }}
            />
            <h1 className="uppercase">Anggota Kegiatan (Mahasiswa)</h1>
            <FormAnggotaKegiatan
              name={"anggota_mahasiswa"}
              values={values.anggota_mahasiswa}
              defaultValue={{
                id_sdm: "",
                nama: "",
                peran: "",
              }}
            />
            <h1 className="uppercase">Anggota Kegiatan (Lain)</h1>
            <FormAnggotaKegiatan
              name={"anggota_lain"}
              values={values.anggota_lain}
              defaultValue={{
                id_sdm: "",
                nama: "",
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

export default FormCreateBahanAjar;
