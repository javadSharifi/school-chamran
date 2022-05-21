import React from "react";
import { Form } from "formik";
import InputForm from "components/InputForm";

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
    <div className="flex  h-full   w-full  flex-col flex-wrap items-center pt-20">
      <>
        <div>
          <h1 className=" h-[5%]  text-center  text-2xl font-bold">
            فرم پیش ثبت نام
          </h1>
        </div>
        <Form className=" grid h-[75%] w-[95%] grid-cols-2  gap-x-3  overflow-y-auto  lg:w-[80%] ">
          {nameForm.map(({ name, placeholder, type }) => (
            <InputForm
              key={name}
              name={name}
              placeholder={placeholder}
              type={type}
            />
          ))}
        </Form>
      </>

      <div className="   flex h-[14%] w-full  flex-wrap justify-center md:h-[15%]">
        <button
          onClick={() => slideTo(2)}
    
          className=" btn-grad  prepend-slide btn-info  my-4 h-[70%] w-[15rem] text-lg font-bold  text-white shadow-md"
        >
          صفحه بعدی
        </button>
      </div>
    </div>
  );
}

export default Personal;
