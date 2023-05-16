import React, { useState } from "react";
import { Button, Input, JenisDokumenSelection, Textarea, UploadFile } from "..";

const MultipleUploadFile = ({ data = [0], errors, children, limit = 5 }) => {
  const [files, setFiles] = useState([1]);
  const [isActive, setIsActive] = useState(0);
  return (
    <>
      <label className="uppercase leading-tight font-bold text-sm">
        Upload Dokumen
      </label>
      {children}
      <div className="flex flex-col md:flex-row items-start gap-8">
        <p className=" md:w-1/4">
          Upload Dokumen{" "}
          <span className="text-blue-500 font-semibold">
            (Maksimal total ukuran file dalam sekali proses upload : 5 MB)
          </span>{" "}
          Dokumen yang dilampirkan adalah dokumen wajib dan dokumen yang sesuai
          dengan data yang diusulkan. Dokumen Wajib : - KTP - Kartu Keluarga
        </p>
        <div className="grid w-full gap-4">
          {files?.map((item, index) => (
            <div
              key={`dokumen-form${index}`}
              className="relative flex flex-col gap-4 w-full"
            >
              <h1
                className="bg-primary text-white rounded-lg p-2 cursor-pointer"
                onClick={() =>
                  isActive === index ? setIsActive(-1) : setIsActive(index)
                }
              >
                Dokumen {index + 1}
              </h1>
              <button
                onClick={() => setFiles(files.filter((v, i) => i != index))}
                className="absolute right-2 top-2 z-10 text-white hover:text-red-500"
              >
                <i className="fi-rr-cross"></i>
              </button>
              <div
                className={`${
                  isActive === index ? "grid" : "hidden"
                } grid-cols-1 justify-between gap-4`}
              >
                <div
                  className={`grid grid-flow-row md:grid-cols-2 md:justify-between gap-4`}
                >
                  <Input
                    name={`nama_dokumen${index}`}
                    label={"Nama Dokumen"}
                    errors={""}
                    touched={""}
                    value={data?.nama}
                  />
                  {/* <Select
                    name={`jenis_dokumen${index}`}
                    label={"Jenis Dokumen"}
                    errors={""}
                    touched={""}
                    value={item.jenis_dokumen}
                    option={[
                      { label: "KTP", value: "ktp" },
                      { label: "Kartu Keluarga", value: "kk" },
                      { label: "Lainnya", value: "lainnya" },
                    ]}
                    valueKey={"value"}
                    labelKey={"label"}
                  /> */}
                  <JenisDokumenSelection value={data?.jenis_dokumen} />
                </div>
                <UploadFile />
                <Textarea label={"Keterangan"} values={data?.keterangan} />
                <Input
                  name={`tautan_dokumen${index}`}
                  label={"Tautan Dokumen"}
                  errors={""}
                  touched={""}
                  value={data?.tautan}
                />
              </div>
            </div>
          ))}
          {files.length < limit && (
            <Button
              text={"Tambah Dokumen"}
              onClick={() =>
                files.length < limit
                  ? setFiles([...files, files.length + 1])
                  : null
              }
              disabled={files.length >= limit}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default MultipleUploadFile;
