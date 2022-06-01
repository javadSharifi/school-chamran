import { ErrorMessage, Field } from 'formik';
import React from 'react';
type validationForm = {
  name: string;
  placeholder: string;
  type: string;
};

function InputForm({ name, placeholder, type }: validationForm) {
  return (
    <div dir="rtl" className="form-control   h-[80%] w-[95%]  sm:w-[80%]  ">
      <label className="label">
        <span className="mx-4 text-base font-bold label-text">
          {placeholder}
        </span>
      </label>
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full input-search h-14"
      />
      <ErrorMessage name={name} component="p" className="text-red-600 " />
    </div>
  );
}

export default InputForm;
