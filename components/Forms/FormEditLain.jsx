import React from "react";
import { Formik, Form } from "formik";
import { Button, Input, MultipleUploadFile, Select } from "..";
import * as yup from "yup";
import { createUser, fetchLainLain } from "@/helper/api/api";
import { useQuery } from "@tanstack/react-query";
import { id } from "@/helper/constant";

const schema = yup.object().shape({
  npwp: yup.string().required("npwp wajib di isi."),
  nama_wp: yup.string().required("nama_wp wajib di isi."),
});

const FormEditLain = () => {
  const { data: lain, isLoading } = useQuery({
    queryKey: ["lain"],
    queryFn: async () => await fetchLainLain(id),
    networkMode: "offlineFirst",
  });
  if (isLoading) return <>Loading!!</>;
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          npwp: lain?.data?.npwp,
          nama_wp: lain?.data?.nama_wp,
        }}
        validationSchema={schema}
        onSubmit={(values, { setErrors, setStatus }) => null}
      >
        {({ isSubmitting, errors, touched, status, isValid }) => (
          <Form className="flex flex-col gap-4">
            <Input
              label="npwp"
              name="npwp"
              type="text"
              value={lain?.data?.npwp}
              errors={errors.npwp}
              touched={touched.npwp}
            />
            <Input
              label="nama_wp"
              name="nama_wp"
              type="text"
              value={lain?.data?.nama_wp}
              errors={errors.nama_wp}
              touched={touched.nama_wp}
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

export default FormEditLain;
