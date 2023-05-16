import React from "react";
import { Formik, Form } from "formik";
import { Button, Input, MultipleUploadFile, Select } from "..";
import * as yup from "yup";
import { createUser, fetchKepegawaian } from "@/helper/api/api";
import { useQuery } from "@tanstack/react-query";
import { id } from "@/helper/constant";

const schema = yup.object().shape({
  nip: yup.string().required("nip wajib di isi."),
  sumbergaji: yup.string().required("sumbergaji wajib di isi."),
  sk_cpns: yup.string().required("sk cpns wajib di isi."),
  tanggal_sk_cpns: yup.string().required("tanggal sk cpns wajib di isi."),
  sk_tmmd: yup.string().required("sk tmmd wajib di isi."),
  tmmd: yup.string().required("tmmd wajib di isi."),
});

const FormEditKepegawaian = () => {
  const { data: kepegawaian, isLoading } = useQuery({
    queryKey: ["kepegawaian"],
    queryFn: async () => await fetchKepegawaian(id),
    networkMode: "offlineFirst",
  });
  if (isLoading) return <>Loading!!</>;
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          nip: kepegawaian?.data[0]?.pegawai.nip,
          sumbergaji: kepegawaian?.data[0]?.sumbergaji.nama,
          sk_cpns: kepegawaian?.data[0]?.sk_cpns,
          tanggal_sk_cpns: kepegawaian?.data[0]?.tanggal_sk_cpns,
          sk_tmmd: kepegawaian?.data[0]?.sk_tmmd,
          tmmd: kepegawaian?.data[0]?.tmmd,
        }}
        validationSchema={schema}
        onSubmit={(values, { setErrors, setStatus }) => null}
      >
        {({ isSubmitting, errors, touched, status, isValid }) => (
          <Form className="flex flex-col gap-4">
            <Input
              label="nip"
              name="nip"
              type="text"
              value={kepegawaian?.data[0]?.pegawai.nip}
              errors={errors.nip}
              touched={touched.nip}
            />
            <Select
              label="jenis kelamin"
              name="sk_cpns"
              type="text"
              values={kepegawaian?.data[0]?.pegawai.jenis_kelamin}
              errors={errors.sk_cpns}
              touched={touched.sk_cpns}
              option={[
                { value: "L", label: "Laki-laki" },
                { value: "P", label: "Perempuan" },
              ]}
              valueKey={"value"}
              labelKey={"label"}
            />
            <Input
              label="tanggal_sk_cpns"
              name="tanggal_sk_cpns"
              type="text"
              value={kepegawaian?.data[0]?.pegawai.tanggal_sk_cpns}
              errors={errors.tanggal_sk_cpns}
              touched={touched.tanggal_sk_cpns}
            />
            <Input
              label="sk_tmmd"
              name="sk_tmmd"
              type="text"
              value={kepegawaian?.data[0]?.pegawai.sk_tmmd}
              errors={errors.sk_tmmd}
              touched={touched.sk_tmmd}
            />
            <Input
              label="tmmd"
              name="tmmd"
              type="date"
              value={kepegawaian?.data[0]?.pegawai.tmmd}
              errors={errors.tmmd}
              touched={touched.tmmd}
            />
            <Input
              label="sumbergaji"
              name="sumbergaji"
              type="text"
              value={kepegawaian?.data[0]?.sumbergaji.nama}
              errors={errors.sumbergaji}
              touched={touched.sumbergaji}
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

export default FormEditKepegawaian;
