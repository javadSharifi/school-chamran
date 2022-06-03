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

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={async (values, actions) => {
        mutate(values, {
          onSuccess: () => {
            toast.success('ثبت نام با موفقیت انجام شد');
            actions.resetForm();
          },
          onError: (err: any) => {
            toast.error(err.message);
          },
        });
      }}
      initialValues={{
        first_name: '',
        last_name: '',
        father_name: '',
        mobile_number: '',
        address: '',
        Phone: '',
        national_code: '',
        SeventhMath: '',
        EighthMath: '',
        NinthMath: '',
        SeventhScience: '',
        EighthScience: '',
        NinthScience: '',
        SeventhDiscipline: '',
        EighthDiscipline: '',
        NinthDiscipline: '',
      }}
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
