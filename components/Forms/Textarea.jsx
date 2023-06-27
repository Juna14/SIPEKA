import { Field } from "formik";
import React from "react";

const Textarea = ({
  name,
  label,
  type,
  errors,
  touched,
  values,
  placeholder,
}) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <label
          htmlFor={name}
          className="uppercase leading-tight font-bold text-sm"
        >
          {label}
        </label>
        <Field
          as="textarea"
          value={values}
          className={`py-2 px-4 rounded-lg shadow-lg border-2 outline-none dark:bg-slate-800 ${
            errors && touched
              ? `focus:border-red-500 border-red-500 caret-red-500 `
              : `focus:border-primary border-primary caret-primary `
          }`}
          name={name}
          id={name}
          rows="2"
          placeholder={placeholder}
        ></Field>
        {errors && touched ? (
          <div className="text-red-500 font-semibold capitalize">{errors}</div>
        ) : null}
      </div>
    </>
  );
};

export default Textarea;
