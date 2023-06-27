import { Field } from "formik";
import React from "react";

const InputRadio = ({
  name,
  label,
  type,
  value,
  placeholder,
  errors,
  touched,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="uppercase leading-tight font-bold text-sm"
      >
        {label}
      </label>
      <div className="flex gap-2">
        <div>
          <label htmlFor="male">Male</label>
          <Field type="radio" name={name} id="male" value="male" />
        </div>
        <div>
          <label htmlFor="female">Female</label>
          <Field type="radio" name={name} id="female" value="female" />
        </div>
        <div>
          <label htmlFor="other">Other</label>
          <Field type="radio" name={name} id="other" value="other" />
        </div>
      </div>
      {/* <Field
          type={"radio"}
          name={name}
          value={value}
          placeholder={placeholder}
          className={`py-2 px-4 rounded-lg shadow-lg outline-none border-2 appearance-none dark:bg-slate-800 ${
            errors && touched
              ? `focus:border-red-500 border-red-500 caret-red-500 `
              : `focus:border-primary border-primary caret-primary `
          }`}
        /> */}
      {errors && touched ? (
        <div className="text-red-500 font-semibold capitalize">{errors}</div>
      ) : null}
    </div>
  );
};

export default InputRadio;
