import React, { useState } from 'react';
import { ErrorMessage, Field, Form } from 'formik';
import InputForm from 'components/InputForm';
import useMajors from 'server/majors';

type personal = {
  name: string;
  placeholder: string;
  type: string;
};

type major = {
  id: number;
  name: string;
};

function Personal({
  slideTo,
  personal: nameForm,
}: {
  slideTo: any;
  personal: personal[];
}) {
  const { data: majors, isLoading } = useMajors();

  return (
    <div className="flex flex-col items-center w-full h-full pt-14">
      <h1 className=" h-[5%]  text-center  text-2xl font-bold">
        فرم پیش ثبت نام
      </h1>
      <Form className="grid h-[75%] w-[95%] grid-cols-2 gap-x-3 overflow-y-auto lg:w-[80%] ">
        {nameForm.map(({ name, placeholder, type }) => (
          <div
            key={name}
            className="flex flex-wrap items-center justify-center"
          >
            <InputForm name={name} placeholder={placeholder} type={type} />
          </div>
        ))}
        <div className="flex flex-wrap items-center justify-center">
          <div
            dir="rtl"
            className="form-control   h-[80%] w-[95%]  sm:w-[80%]  "
          >
            <label className="label">
              <span className="mx-4 text-base font-bold label-text">
                رشته تحصیلی
              </span>
            </label>
            <Field
              name="major_id"
              className="w-full font-bold text-sm text-gray-700 input-search h-14"
              component="select"
            >
              <option disabled selected>
                رشته خود را انتخاب کن
              </option>
              {isLoading === false &&
                majors?.data.data.map((item: major) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              ;
            </Field>
            <ErrorMessage
              name="major"
              component="p"
              className="text-red-600 "
            />
          </div>
        </div>
      </Form>
      <div className="flex h-[14%] w-full flex-wrap justify-center md:h-[15%]">
        <button
          onClick={() => slideTo(2)}
          className="btn-grad prepend-slide btn-info my-4 h-[70%] w-[15rem] text-lg font-bold text-white shadow-md"
        >
          صفحه بعدی
        </button>
      </div>
    </div>
  );
}

export default Personal;
