import React, { useState } from "react";
import {
  Button,
  Input,
  JenisDokumenSelection,
  Selector,
  Textarea,
  UploadFile,
} from "..";
import { Field, FieldArray } from "formik";
import { fetchJenisDokumen } from "@/helper/api/apiSister";

const MultipleUploadFile = ({
  errors,
  touched,
  children,
  limit = 5,
  values,
  setFieldValue,
}) => {
  const [isActive, setIsActive] = useState(0);

  return (
    <FieldArray
      validateOnChange
      name="dokumen"
      render={(arrayHelpers) => (
        <>
          <label className="uppercase leading-tight font-bold text-sm">
            Unggah Dokumen
          </label>
          {children}
          <div className="flex flex-col md:flex-row items-start gap-8">
            <p className=" md:w-1/4">
              Unggah Dokumen{" "}
              <span className="text-blue-500 font-semibold">
                (Maksimal total ukuran file dalam sekali proses unggah : 5 MB){" "}
              </span>
            </p>
            <div className="grid w-full gap-2">
              {values.dokumen &&
                values.dokumen?.map((item, index) => (
                  <div
                    key={`dokumen.${index}`}
                    className="relative flex flex-col gap-2 w-full"
                  >
                    <h1
                      className="bg-primary text-white rounded-lg p-2 cursor-pointer"
                      onClick={() =>
                        isActive === index
                          ? setIsActive(-1)
                          : setIsActive(index)
                      }
                    >
                      Dokumen {index + 1}
                    </h1>
                    <button
                      onClick={() => arrayHelpers.remove(index)}
                      className="absolute right-2 top-2 z-10 text-white hover:text-red-500"
                    >
                      <i className="fi-rr-cross"></i>
                    </button>
                    <div
                      className={`${
                        isActive === index ? "h-full" : "h-0"
                      } grid grid-cols-1 justify-between gap-4 transition-all ease-in-out duration-500 overflow-hidden`}
                    >
                      <div
                        className={`grid grid-flow-row md:grid-cols-2 md:justify-between gap-4`}
                      >
                        <Input
                          key={`dokumen.${index}.nama`}
                          name={`dokumen.${index}.nama`}
                          label={"Nama Dokumen"}
                          errors={errors.dokumen && errors.dokumen[index]?.nama}
                          touched={
                            touched.dokumen && touched.dokumen[index]?.nama
                          }
                          value={item.nama}
                        />
                        {/* <JenisDokumenSelection
                          key={`dokumen.${index}.id_jenis_dokumen`}
                          name={`dokumen.${index}.id_jenis_dokumen`}
                          value={item.id_jenis_dokumen}
                        /> */}
                        <Selector
                          label={"Jenis Dokumen"}
                          name={`dokumen.${index}.id_jenis_dokumen`}
                          values={{
                            id: item.id_jenis_dokumen,
                            nama: item.jenis_dokumen,
                          }}
                          queryKey={"fetchJenisDokumen"}
                          queryFn={() => fetchJenisDokumen()}
                          errors={
                            errors.dokumen &&
                            errors.dokumen[index]?.id_jenis_dokumen
                          }
                          touched={
                            touched.dokumen &&
                            touched.dokumen[index]?.id_jenis_dokumen
                          }
                          valueKey={"id"}
                          labelKey={"nama"}
                          onChange={setFieldValue}
                          placeholder={"Pilih Jenis Dokumen"}
                        />
                      </div>
                      <UploadFile />
                      <Textarea
                        label={"Keterangan"}
                        key={`dokumen.${index}.keterangan`}
                        name={`dokumen.${index}.keterangan`}
                        values={item?.keterangan}
                        errors={
                          errors.dokumen && errors.dokumen[index]?.keterangan
                        }
                        touched={
                          touched.dokumen && touched.dokumen[index]?.keterangan
                        }
                      />
                      <Input
                        key={`dokumen.${index}.tautan`}
                        name={`dokumen.${index}.tautan`}
                        label={"Tautan Dokumen"}
                        value={item?.tautan}
                        errors={errors.dokumen && errors.dokumen[index]?.tautan}
                        touched={
                          touched.dokumen && touched.dokumen[index]?.tautan
                        }
                      />
                    </div>
                  </div>
                ))}
              {values.dokumen.length < limit && (
                <Button
                  text={"Tambah Dokumen"}
                  onClick={() =>
                    arrayHelpers.push({
                      id: "",
                      id_jenis_dokumen: "",
                      nama: "",
                      keterangan: "",
                      tanggal_upload: "",
                      tautan: "",
                      jenis_file: "",
                      nama_file: "",
                      jenis_dokumen: "",
                    })
                  }
                  disabled={values.dokumen.length >= limit}
                />
              )}
            </div>
          </div>
        </>
      )}
    />
    // <>
    //   <label className="uppercase leading-tight font-bold text-sm">
    //     Upload Dokumen
    //   </label>
    //   {children}
    //   <div className="flex flex-col md:flex-row items-start gap-8">
    //     <p className=" md:w-1/4">
    //       Upload Dokumen{" "}
    //       <span className="text-blue-500 font-semibold">
    //         (Maksimal total ukuran file dalam sekali proses upload : 5 MB)
    //       </span>{" "}
    //       Dokumen yang dilampirkan adalah dokumen wajib dan dokumen yang sesuai
    //       dengan values.dokumen.index yang diusulkan. Dokumen Wajib : - KTP - Kartu Keluarga
    //     </p>

    //   </div>
    // </>
    // {values.dokumen.map((item, index) => (
    //   <div key={index}>
    //     {/** both these conventions do the same */}

    //     {/* <Field name={`dokumen[${index}].name`} /> */}

    //     <Field name={`dokumen.${index}.nama`} />

    //     <button type="button" onClick={() => arrayHelpers.remove(index)}>
    //       -
    //     </button>
    //   </div>
    // ))}
    // <button
    //   type="button"
    //   onClick={() =>
    //     arrayHelpers.push({
    //       id_sdm: "",
    //       id_jenis_dokumen: "",
    //       nama: "",
    //       tautan: "",
    //       keterangan: "",
    //     })
    //   }
    // >
    //   +
    // </button>
  );
};

export default MultipleUploadFile;
