import { Field, FieldArray } from "formik";
import React from "react";
import { Table, Input, Button, Select } from "..";

const FormAnggotaPaten = ({ name, values, defaultValue }) => {
  return (
    <FieldArray
      key={name}
      name={name}
      render={(arrayHelpers) => (
        <div className="flex flex-col-reverse gap-4">
          <Button
            text={"Tambah anggota"}
            icon={<i className="fi-rr-plus" />}
            onClick={() => arrayHelpers.push(defaultValue)}
          />
          <Table
            columns={[
              {
                key: "nama",
                title: "Nama",
                render: (item, index) => (
                  <Input
                    className="w-full px-4 py-2 rounded bg-white dark:bg-slate-900 border border-primary"
                    placeholder="Nama"
                    key={`${name}.${index}.nama`}
                    name={`${name}.${index}.nama`}
                    value={values[index]?.nama}
                  />
                ),
              },
              {
                key: "urutan",
                title: "urutan",
                render: (item, index) => (
                  <>
                    <Input
                      className="w-full px-4 py-2 rounded bg-white dark:bg-slate-900 border border-primary"
                      type={"number"}
                      key={`${name}.${index}.urutan`}
                      name={`${name}.${index}.urutan`}
                      value={values[index]?.urutan}
                    />
                    <button
                      className="hidden"
                      type="submit"
                      onClick={() => arrayHelpers.push(defaultValue)}
                    ></button>
                  </>
                ),
              },
              {
                key: "afiliasi",
                title: "afiliasi",
                render: (item, index) => (
                  <>
                    <Input
                      className="w-full px-4 py-2 rounded bg-white dark:bg-slate-900 border border-primary"
                      placeholder="Peran"
                      key={`${name}.${index}.afiliasi`}
                      name={`${name}.${index}.afiliasi`}
                      value={values[index]?.afiliasi}
                    />
                    <button
                      className="hidden"
                      type="submit"
                      onClick={() => arrayHelpers.push(defaultValue)}
                    ></button>
                  </>
                ),
              },
              {
                key: "peran",
                title: "Peran",
                render: (item, index) => (
                  <>
                    <Select
                      className="w-full px-4 py-2 rounded bg-white dark:bg-slate-900 border border-primary"
                      placeholder="Peran"
                      key={`${name}.${index}.peran`}
                      name={`${name}.${index}.peran`}
                      values={values[index]?.peran}
                      option={[
                        { value: "Penulis", label: "Penulis" },
                        { value: "Editor", label: "Editor" },
                        { value: "Penerjemah", label: "Penerjemah" },
                        { value: "Penemu/inventor", label: "Penemu/inventor" },
                      ]}
                      labelKey={"label"}
                      valueKey={"value"}
                    />
                    <button
                      className="hidden"
                      type="submit"
                      onClick={() => arrayHelpers.push(defaultValue)}
                    ></button>
                  </>
                ),
              },
              {
                key: "corresponding_author",
                title: "Coresponding Author",
                render: (item, index) => (
                  <>
                    <Select
                      className="w-full px-4 py-2 rounded bg-white dark:bg-slate-900 border border-primary"
                      option={[
                        { value: 1, label: "Ya" },
                        { value: 0, label: "Tidak" },
                      ]}
                      valueKey={"value"}
                      labelKey={"label"}
                      key={`${name}.${index}.corresponding_author`}
                      name={`${name}.${index}.corresponding_author`}
                      values={values[index]?.corresponding_author}
                    />
                    <button
                      className="hidden"
                      type="submit"
                      onClick={() => arrayHelpers.push(defaultValue)}
                    ></button>
                  </>
                ),
              },
              {
                key: "index",
                title: "Aksi",
                render: (item, index) => (
                  <button
                    onClick={() => arrayHelpers.remove(index)}
                    className="flex items-baseline gap-2 text-red-500"
                  >
                    <i className="fi-rr-trash"></i> Hapus
                  </button>
                ),
              },
            ]}
            data={values}
          />
        </div>
      )}
    ></FieldArray>
  );
};

export default FormAnggotaPaten;
