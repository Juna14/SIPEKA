import React from "react";
import { Formik, Form } from "formik";
import { Button, Input, MultipleUploadFile, Select, UploadFile } from "..";
import * as yup from "yup";
import { createUser, fetchAlamat, fetchProfil } from "@/helper/api/api";
import { useQuery } from "@tanstack/react-query";
import { id } from "@/helper/constant";

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
  email: yup.string().required("email wajib diisi."),
  alamat: yup.string().required("alamat wajib diisi."),
  rt: yup.string().required("rt wajib diisi."),
  rw: yup.string().required("rw wajib diisi."),
  dusun: yup.string().required("dusun wajib diisi."),
  kelurahan: yup.string().required("kelurahan wajib diisi."),
  kota: yup.string().required("kota wajib diisi."),
  kode_pos: yup.string().required("kode pos wajib diisi."),
  telepon_rumah: yup.string().required("telepon rumah wajib diisi."),
  telepon_hp: yup.string().required("telepon hp wajib diisi."),
});

const FormEditAlamat = () => {
  const { data: alamat, isLoading } = useQuery({
    queryKey: ["alamat"],
    queryFn: async () => await fetchAlamat(id),
    networkMode: "offlineFirst",
  });
  if (isLoading) return <>Loading!!</>;
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
          email: alamat?.data[0]?.email,
          alamat: alamat?.data[0]?.alamat,
          rt: alamat?.data[0]?.rt,
          rw: alamat?.data[0]?.rw,
          dusun: alamat?.data[0]?.dusun,
          kelurahan: alamat?.data[0]?.kelurahan,
          kota: alamat?.data[0]?.wilayah.nama,
          kode_pos: alamat?.data[0]?.kode_pos,
          telepon_rumah: alamat?.data[0]?.telepon_rumah,
          telepon_hp: alamat?.data[0]?.telepon_hp,
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
            <Input
              label="email"
              name="email"
              type="text"
              value={alamat?.data[0]?.email}
              errors={errors.email}
              touched={touched.email}
            />
            <Input
              label="alamat"
              name="alamat"
              type="text"
              value={alamat?.data[0]?.alamat}
              errors={errors.alamat}
              touched={touched.alamat}
            />
            <Input
              label="rt"
              name="rt"
              type="text"
              value={alamat?.data[0]?.rt}
              errors={errors.rt}
              touched={touched.rt}
            />
            <Input
              label="rw"
              name="rw"
              type="text"
              value={alamat?.data[0]?.rw}
              errors={errors.rw}
              touched={touched.rw}
            />
            <Input
              label="dusun"
              name="dusun"
              type="text"
              value={alamat?.data[0]?.dusun}
              errors={errors.dusun}
              touched={touched.dusun}
            />
            <Input
              label="kelurahan"
              name="kelurahan"
              type="text"
              value={alamat?.data[0]?.kelurahan}
              errors={errors.kelurahan}
              touched={touched.kelurahan}
            />
            <Input
              label="kota"
              name="kota"
              type="text"
              value={alamat?.data[0]?.wilayah.nama}
              errors={errors.kota}
              touched={touched.kota}
            />
            <Input
              label="kode_pos"
              name="kode_pos"
              type="text"
              value={alamat?.data[0]?.kode_pos}
              errors={errors.kode_pos}
              touched={touched.kode_pos}
            />
            <Input
              label="telepon_rumah"
              name="telepon_rumah"
              type="text"
              value={alamat?.data[0]?.telepon_rumah}
              errors={errors.telepon_rumah}
              touched={touched.telepon_rumah}
            />
            <Input
              label="telepon_hp"
              name="telepon_hp"
              type="text"
              value={alamat?.data[0]?.telepon_hp}
              errors={errors.telepon_hp}
              touched={touched.telepon_hp}
            />
            <MultipleUploadFile
              values={values}
              errors={errors}
              touched={touched}
              setFieldValue={setFieldValue}
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

export default FormEditAlamat;
