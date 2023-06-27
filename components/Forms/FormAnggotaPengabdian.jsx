import { Field, FieldArray } from "formik";
import React from "react";
import { Table, Input, Button, Select } from "..";

const FormAnggotaPengabdian = ({ name, values, defaultValue }) => {
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
                key: "peran",
                title: "Peran",
                render: (item, index) => (
                  <>
                    <Input
                      className="w-full px-4 py-2 rounded bg-white dark:bg-slate-900 border border-primary"
                      placeholder="Peran"
                      key={`${name}.${index}.peran`}
                      name={`${name}.${index}.peran`}
                      value={values[index]?.peran}
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
                key: "status",
                title: "Status",
                render: (item, index) => (
                  <>
                    <Select
                      className="w-full px-4 py-2 rounded bg-white dark:bg-slate-900 border border-primary"
                      option={[
                        { value: true, label: "Aktif" },
                        { value: false, label: "Tidak Aktif" },
                      ]}
                      valueKey={"value"}
                      labelKey={"label"}
                      key={`${name}.${index}.stat_aktif`}
                      name={`${name}.${index}.stat_aktif`}
                      values={values[index]?.stat_aktif}
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

export default FormAnggotaPengabdian;
