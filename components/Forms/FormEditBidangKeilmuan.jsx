import React from "react";
import { Formik, Form } from "formik";
import { Action, Button, Input, MultipleUploadFile, Select, Table } from "..";
import * as yup from "yup";
import { createUser, fetchBidangIlmu } from "@/helper/api/api";
import { useQuery } from "@tanstack/react-query";

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
  bidangilmu: yup.string().required("bidangilmu wajib diisi."),
});

const FormEditBidangKeilmuan = () => {
  const id = "";
  const { data: bidang_keilmuan, isLoading } = useQuery({
    queryKey: ["bidang_keilmuan"],
    queryFn: async () => await fetchBidangIlmu(),
    networkMode: "offlineFirst",
  });
  if (isLoading) return <>Loading!!</>;
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={[]}
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
            <Table
              columns={[
                { key: "urutan", title: "Urutan" },
                {
                  key: "kelompokbidang",
                  title: "Pilih kelompok Bidang",
                  render: (val) => (
                    <Select
                      name="bidangilmu"
                      type="text"
                      errors={errors.bidangilmu}
                      touched={touched.bidangilmu}
                      option={[
                        { value: "L", label: "Laki-laki" },
                        { value: "P", label: "Perempuan" },
                      ]}
                      valueKey={"value"}
                      labelKey={"label"}
                    />
                  ),
                },
                {
                  key: "id",
                  title: "aksi",
                  align: "center",
                  render: (val) => <Action param={val} />,
                },
              ]}
              data={bidang_keilmuan?.data}
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

export default FormEditBidangKeilmuan;
