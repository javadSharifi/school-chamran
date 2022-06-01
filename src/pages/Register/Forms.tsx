import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Swiper, SwiperSlide } from 'swiper/react';
import Educational from './Educational';
import Personal from './Personal';
import toast from 'react-hot-toast';
import './swiper.css';
import axios from 'libs/axios';

function Forms() {
  //Swiper
  const [swiperRef, setSwiperRef] = useState<any>(null);
  const slideTo = (index: any) => {
    swiperRef.slideTo(index - 1, 0);
  };
  const educational = [
    {
      name: 'SeventhMath',
      placeholder: 'ریاضی هفتم',
      type: 'number',
    },
    {
      name: 'EighthMath',
      placeholder: 'ریاضی هشتم',
      type: 'number',
    },
    {
      name: 'NinthMath',
      placeholder: 'ریاضی نهم',
      type: 'number',
    },
    {
      name: 'SeventhScience',
      placeholder: 'علوم هفتم',
      type: 'number',
    },
    {
      name: 'EighthScience',
      placeholder: 'علوم هشتم',
      type: 'number',
    },
    {
      name: 'NinthScience',
      placeholder: 'علوم نهم',
      type: 'number',
    },
    {
      name: 'SeventhDiscipline',
      placeholder: 'انضباط هفتم',
      type: 'number',
    },
    {
      name: 'EighthDiscipline',
      placeholder: 'انضباط هشتم',
      type: 'number',
    },
    {
      name: 'NinthDiscipline',
      placeholder: 'انضباط نهم',
      type: 'number',
    },
  ];

  const personal = [
    {
      name: 'first_name',
      placeholder: 'نام',
      type: 'text',
    },
    {
      name: 'last_name',
      placeholder: 'نام خانوادگی',
      type: 'text',
    },
    {
      name: 'national_code',
      placeholder: 'کد ملی',
      type: 'number',
    },
    {
      name: 'father_name',
      placeholder: 'نام پدر',
      type: 'text',
    },
    {
      name: 'mobile_number',
      placeholder: 'شماره همراه',
      type: 'number',
    },
    {
      name: 'Phone',
      placeholder: 'شماره ثابت',
      type: 'number',
    },
  ];

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required('  نام را وارد کنید'),
    last_name: Yup.string().required('  نام خانوادگی را وارد کنید '),
    father_name: Yup.string().required('  نام پدر را وارد کنید '),
    mobile_number: Yup.number().required('  شماره تلفن را وارد کنید '),
    Phone: Yup.number().required('  شماره ثابت را وارد کنید '),
    national_code: Yup.number().required('  کد ملی را وارد کنید '),
    address: Yup.string().required('  آدرس را وارد کنید '),
    SeventhMath: Yup.number().required('  ریاضی هفتم را وارد کنید'),
    EighthMath: Yup.number().required('  ریاضی هشتم را وارد کنید'),
    NinthMath: Yup.number().required('  ریاضی نهم را وارد کنید'),
    SeventhScience: Yup.number().required('  علوم هفتم را وارد کنید'),
    EighthScience: Yup.number().required('  علوم هشتم را وارد کنید'),
    NinthScience: Yup.number().required('  علوم نهم را وارد کنید'),
    SeventhDiscipline: Yup.number().required('  انضباط هفتم را وارد کنید'),
    EighthDiscipline: Yup.number().required('  انضباط هشتم را وارد کنید'),
    NinthDiscipline: Yup.number().required('  انضباط نهم را وارد کنید'),
  });

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={async (values, actions) => {
        toast.loading('در حال ارسال اطلاعات', {
          duration: 2500,
        });
        axios.get('sanctum/csrf-cookie').then((res) => {
          axios
            .post('api/pre-register', values)
            .then((res) => {
              toast.success('ثبت نام با موفقیت انجام شد');
              actions.resetForm();
            })
            .catch((err) => {
              toast.error('خطا در ثبت نام');
            });
        });
      }}
      initialValues={{
        // ...educational.map(({first_name}) => ({ [first_name]: "" })),
        // ...personal.map(({first_name}) => ۲({ [first_name]: "" })),
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
