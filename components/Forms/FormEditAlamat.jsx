import React from "react";
import { Formik, Form } from "formik";
import { Button, Input, MultipleUploadFile, Select, UploadFile } from "..";
import * as yup from "yup";
import { createUser, fetchAlamat, fetchProfil } from "@/helper/api/api";
import { useQuery } from "@tanstack/react-query";
import { id } from "@/helper/constant";

const schema = yup.object().shape({
  email: yup.string().required("email wajib di isi."),
  alamat: yup.string().required("alamat wajib di isi."),
  rt: yup.string().required("rt wajib di isi."),
  rw: yup.string().required("rw wajib di isi."),
  dusun: yup.string().required("dusun wajib di isi."),
  kelurahan: yup.string().required("kelurahan wajib di isi."),
  kota: yup.string().required("kota wajib di isi."),
  kode_pos: yup.string().required("kode pos wajib di isi."),
  telepon_rumah: yup.string().required("telepon rumah wajib di isi."),
  telepon_hp: yup.string().required("telepon hp wajib di isi."),
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
        {({ isSubmitting, errors, touched, status, isValid }) => (
          <Form className="flex flex-col gap-4">
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
            <MultipleUploadFile />
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

export default FormEditAlamat;
