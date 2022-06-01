import React from 'react';
import { Form } from 'formik';
import InputForm from 'components/InputForm';

type personal = {
  name: string;
  placeholder: string;
  type: string;
};

function Personal({
  slideTo,
  personal: nameForm,
}: {
  slideTo: any;
  personal: personal[];
}) {
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
        <div className="relative flex justify-center w-full col-span-2">
          <InputForm name="address" placeholder="آدرس" type="text" />
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
