import { Field } from "formik";
import React, { useState } from "react";

const Select = ({
  name,
  label,
  option,
  errors,
  touched,
  values,
  valueKey,
  labelKey,
}) => {
  return (
    <div className="w-full flex flex-col gap-2 z-10 relative">
      <label
        htmlFor={name}
        className="uppercase leading-tight font-bold text-sm"
      >
        {label}
      </label>
      <div className="relative flex items-center">
        <select
          className={`relative cursor-pointer flex w-full appearance-none outline-none border-2 py-2 px-4 rounded-lg shadow-lg bg-white dark:bg-slate-800 ${
            errors && touched
              ? `focus:border-red-500 border-red-500 caret-red-500`
              : ` focus:border-primary border-primary caret-primary`
          }`}
          as="select"
          // defaultValue={"pilih"}
          // value={values}
        >
          <option value="pilih" className="w-fit">
            Pilih...
          </option>
          {option &&
            option.length > 0 &&
            option?.map((item) => {
              return (
                <option
                  className="w-min"
                  key={item[valueKey]}
                  selected={item[valueKey] === values}
                  value={item[valueKey]}
                >
                  {item[labelKey]}
                </option>
              );
            })}
        </select>
        <i
          className={`fi-rr-angle-small-down absolute right-0 pr-4 pt-1 text-lg z-0`}
        ></i>
      </div>
      {errors && touched ? (
        <div className="text-red-500 font-semibold capitalize">{errors}</div>
      ) : null}
    </div>
  );
};

export default Select;
