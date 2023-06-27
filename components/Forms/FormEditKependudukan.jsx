import React from "react";
import { Formik, Form } from "formik";
import { Button, Input, MultipleUploadFile, Select } from "..";
import * as yup from "yup";
import { createUser, fetchKependudukan } from "@/helper/api/api";
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
  agama: yup.string().required("agama wajib diisi."),
  negara: yup.string().required("negara wajib diisi."),
  nik: yup.string().required("nik wajib diisi."),
});

const FormEditKependudukan = () => {
  const { data: kependudukan, isLoading } = useQuery({
    queryKey: ["kependudukan"],
    queryFn: async () => await fetchKependudukan(id),
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
          agama: kependudukan?.data[0]?.agama.nama,
          negara: kependudukan?.data[0]?.negara.nama,
          nik: kependudukan?.data[0]?.nik,
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
              label="nik"
              name="nik"
              type="text"
              value={kependudukan?.data[0]?.nik}
              errors={errors.nik}
              touched={touched.nik}
            />
            {/* <Select
              label="agama"
              name="agama"
              type="text"
              errors={errors.agama}
              touched={touched.agama}
              option={[
                { value: "L", label: "Laki-laki" },
                { value: "P", label: "Perempuan" },
              ]}
              valueKey={"value"}
                      labelKey={"label"}
            /> */}
            <Input
              label="agama"
              name="agama"
              type="text"
              value={kependudukan?.data[0]?.agama.nama}
              errors={errors.agama}
              touched={touched.agama}
            />
            <Input
              label="negara"
              name="negara"
              type="text"
              value={kependudukan?.data[0]?.negara.nama}
              errors={errors.negara}
              touched={touched.negara}
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

export default FormEditKependudukan;
