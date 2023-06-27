import React from "react";
import { Formik, Form } from "formik";
import {
  Action,
  Button,
  Input,
  KategoriKegiatanSelection,
  MultipleUploadFile,
  NestedList,
  PerguruanTinggiSelection,
  Select,
  Selector,
  StackedTab,
  Table,
} from "..";
import * as yup from "yup";
import { createUser, fetchListInpassing } from "@/helper/api/api";
import { useQuery } from "@tanstack/react-query";
import { fetchPerguruanTinggi } from "@/helper/api/apiSister";
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
  jenis_tugas_tambahan: yup
    .string()
    .required("jenis tugas tambahan wajib diisi."),
  ptn_tugas_tambahan: yup
    .string()
    .required("perguruan tinggi penugasan wajib diisi."),
  unit_kerja: yup.string().required("unit kerja wajib diisi."),
  jumlah_jam_diakui: yup.string().required("jumlah jam diakui wajib diisi."),
  sk: yup.string().required("sk wajib diisi."),
  tanggal_sk: yup.string().required("kelebihan pengajaran sk wajib diisi."),
  terhitung_mulai_tanggal: yup
    .string()
    .required("terhitung mulai tanggal wajib diisi."),
  tanggal_berakhir_tugas: yup
    .string()
    .required("kelebihan penelitian wajib diisi."),
  jenis_tugas_tambahan: yup
    .string()
    .required("kelebihan pengabdian masyarakat wajib diisi."),
});

const FormCreateTugasTambahan = ({ initialValues }) => {
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
          kategori_kegiatan: "",
          jenis_tugas_tambahan: "",
          ptn_tugas_tambahan: "",
          unit_kerja: "",
          jumlah_jam_diakui: "",
          sk: "",
          tanggal_sk: "",
          terhitung_mulai_tanggal: "",
          tanggal_berakhir_tugas: "",
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
              menu={"tugas_tambahan"}
              type={"tree"}
              errors={errors.kategori_kegiatan}
              touched={touched.kategori_kegiatan}
            />
            <Select
              label="jenis tugas tambahan"
              name="jenis_tugas_tambahan"
              option={[]}
              errors={errors.jenis_tugas_tambahan}
              touched={touched.jenis_tugas_tambahan}
            />
            <Selector
              name={"ptn_tugas_tambahan"}
              label="perguruan tinggi penugasan"
              errors={errors.ptn_tugas_tambahan}
              touched={touched.ptn_tugas_tambahan}
              onChange={setFieldValue}
              queryKey={"ptn_tugas_tambahan"}
              queryFn={() => fetchPerguruanTinggi()}
              labelKey={"nama"}
              valueKey={"id"}
              placeholder={"Pilih perguruan tinggi"}
              values={{
                nama: "",
                id: "",
              }}
            />
            <Select
              label="Unit Kerja"
              name="unit_kerja"
              option={[]}
              errors={errors.unit_kerja}
              touched={touched.unit_kerja}
            />
            <Input
              label="jumlah jam diakui"
              name="jumlah_jam_diakui"
              type="number"
              errors={errors.jumlah_jam_diakui}
              touched={touched.jumlah_jam_diakui}
            />
            <Input
              label="nomor sk penugasan"
              name="sk"
              type="date"
              errors={errors.sk}
              touched={touched.sk}
            />
            <Input
              label="terhitung mulai tanggal"
              name="terhitung_mulai_tanggal"
              type="date"
              errors={errors.terhitung_mulai_tanggal}
              touched={touched.terhitung_mulai_tanggal}
            />
            <Input
              label="tanggal berakhir tugas"
              name="tanggal_berakhir_tugas"
              type="date"
              errors={errors.tanggal_berakhir_tugas}
              touched={touched.tanggal_berakhir_tugas}
            />
            <MultipleUploadFile
              values={values}
              errors={errors}
              touched={touched}
              setFieldValue={setFieldValue}
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

export default FormCreateTugasTambahan;
