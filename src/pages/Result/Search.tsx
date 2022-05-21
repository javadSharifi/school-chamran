import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";

function Search({ setResult }: { setResult: any }) {
  const validationSchema = Yup.object().shape({
    cod: Yup.number().required("کد ملی را وارد رد کنید "),
  });

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={async (values, { setErrors }) => {
        axios.post(`api/pre-register/result`, values.cod)
          .then((res) => {
            setResult(res);
          })
          .catch((err) => {
            toast.error("کد ملی وارد شده صحیح نمی باشد");
          });
      }}

      initialValues={{
        cod: "",
      }}
    >
      {() => (
        <Form className="  mt-[7rem] flex w-full flex-wrap justify-center">
          <Field
            dir="rtl"
            type="number"
            placeholder="کد ملی"
            name="cod"
            className="  input-search h-14 w-[70%] "
          />
          <ErrorMessage name="cod" component="p" className="text-red-600 " />
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className=" btn-grad  btn-info  mb-16 h-12 w-[60%] text-lg font-bold  text-white shadow-md"
            >
              جستجو
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default Search;
