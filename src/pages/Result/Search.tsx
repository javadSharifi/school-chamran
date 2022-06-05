import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import axios from 'libs/axios';
import useResult from 'server/result';

function Search({ setResult }: { setResult: any }) {
  const validationSchema = Yup.object().shape({
    national_code: Yup.number().required('کد ملی را وارد رد کنید '),
  });

  const { mutate } = useResult();

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={async (values, { setErrors }) => {
        mutate({national_code:values.national_code}, {
          onSuccess: (data) => {
            console.log(data)
            setResult(data.data);
          },
          onError: () => {
            toast.error('کد ملی وارد شده صحیح نمی باشد');
          },
        });
      }}
      initialValues={{
        national_code: '',
      }}
    >
      {() => (
        <Form className="  mt-[7rem] flex w-full flex-wrap justify-center">
          <Field
            dir="rtl"
            type="number"
            placeholder="کد ملی"
            name="national_code"
            className="  input-search h-14 w-[70%] "
          />
          <ErrorMessage
            name="national_code"
            component="p"
            className="text-red-600 "
          />
          <div className="w-full flex justify-center">
            <button
              // disabled={isLoading}
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
