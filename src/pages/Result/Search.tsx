import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import useResult from 'server/result';
import validationError from 'utils/validation';
import spinner from 'assets/img/Spinner.svg';

function Search({ setResult }: { setResult: any }) {
  const validationSchema = Yup.object().shape({
    national_code: Yup.string().required(validationError('required')).length(10, validationError('length', 10)),
  });

  const { mutate, isLoading } = useResult();

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={async (values, { setErrors }) => {
        mutate(
          { national_code: values.national_code },
          {
            onSuccess: (data) => {
              setResult(data.data);
            },
            onError: () => {
              toast.error('کد ملی وارد شده صحیح نمی باشد');
            },
          }
        );
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
            className="  text-gray-600 font-bold input-search h-14 w-[70%]  "
          />
          <ErrorMessage
            name="national_code"
            component="p"
            className="text-red-600 "
          />
          <div className="flex justify-center w-full">
            <button
              disabled={isLoading}
              type="submit"
              className=" btn-grad relative  btn-info  mb-16 h-12 w-[60%] text-lg font-bold  text-white shadow-md "
            >
              {isLoading ? <img src ={spinner} className='w-full h-full ' alt="My Happy SVG"/> : 'جستجو'}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default Search;
