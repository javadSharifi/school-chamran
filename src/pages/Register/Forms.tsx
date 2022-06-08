import React, { useState } from 'react';
import { Formik } from 'formik';

import { Swiper, SwiperSlide } from 'swiper/react';
import Educational from './Educational';
import Personal from './Personal';
import toast from 'react-hot-toast';
import './swiper.css';
import { educational, personal, validationSchema } from './formList';
import useRegister from 'server/register';

function Forms() {
  const { mutate } = useRegister();
  const [swiperRef, setSwiperRef] = useState<any>(null);
  const slideTo = (index: any) => {
    swiperRef.slideTo(index - 1, 0);
  };
  const initialValues = [...personal, ...educational].reduce((acc, curr) => {
  console.log(acc);
    acc[curr.name] = '';
    return acc;
  }, {} as { [key: string]: string });

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        mutate(values, {
          onSuccess: () => {
            toast.success('ثبت نام با موفقیت انجام شد');
            resetForm();
          },
          onError: (err: any) => {
            toast.error(err.response.data.errors.national_code[0]);
          },
        });
      }}
      initialValues={initialValues}
    >
      {() => (
        <Swiper cssMode={true} onSwiper={setSwiperRef}>
          <Swiper className="mySwiper ">
            <SwiperSlide>
              <Personal slideTo={slideTo} personal={personal} />
            </SwiperSlide>
            <SwiperSlide>
              <Educational slideTo={slideTo} educational={educational} />
            </SwiperSlide>
          </Swiper>
        </Swiper>
      )}
    </Formik>
  );
}

export default Forms;
