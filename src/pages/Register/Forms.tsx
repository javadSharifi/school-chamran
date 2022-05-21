import React, {useState } from "react";
import {  Formik } from "formik";
import * as Yup from "yup";
import { Swiper, SwiperSlide } from "swiper/react";
import Educational from "./Educational";
import Personal from "./Personal";
import toast from "react-hot-toast";
import "./swiper.css";

function Forms() {
  //Swiper
  const [swiperRef, setSwiperRef] = useState<any>(null);
  const slideTo = (index: any) => {
    swiperRef.slideTo(index - 1, 0);
  };
  const educational = [
    {
      name: "SeventhMath",
      placeholder: "ریاضی هفتم",
      type: "number",
    },
    {
      name: "EighthMath",
      placeholder: "ریاضی هشتم",
      type: "number",
    },
    {
      name: "NinthMath",
      placeholder: "ریاضی نهم",
      type: "number",
    },
    {
      name: "SeventhScience",
      placeholder: "علوم هفتم",
      type: "number",
    },
    {
      name: "EighthScience",
      placeholder: "علوم هشتم",
      type: "number",
    },
    {
      name: "NinthScience",
      placeholder: "علوم نهم",
      type: "number",
    },
    {
      name: "SeventhDiscipline",
      placeholder: "انضباط هفتم",
      type: "number",
    },
    {
      name: "EighthDiscipline",
      placeholder: "انضباط هشتم",
      type: "number",
    },
    {
      name: "NinthDiscipline",
      placeholder: "انضباط نهم",
      type: "number",
    },
  ];

  const personal = [
    {
      name: "name",
      placeholder: "نام",
      type: "text",
    },
    {
      name: "family",
      placeholder: "نام خانوادگی",
      type: "text",
    },
    {
      name: "cod",
      placeholder: "کد ملی",
      type: "number",
    },
    {
      name: "nameDada",
      placeholder: "نام پدر",
      type: "text",
    },
    {
      name: "phoneNumber",
      placeholder: "شماره همراه",
      type: "number",
    },
    {
      name: "Phone",
      placeholder: "شماره ثابت",
      type: "number",
    },
  ];

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("  نام را وارد کنید"),
    family: Yup.string().required("  نام خانوادگی را وارد کنید "),
    nameDada: Yup.string().required("  نام پدر را وارد کنید "),
    phoneNumber: Yup.number().required("  شماره تلفن را وارد کنید "),
    Phone: Yup.number().required("  شماره ثابت را وارد کنید "),
    cod: Yup.number().required("  کد ملی را وارد کنید "),
    SeventhMath: Yup.number().required("  ریاضی هفتم را وارد کنید"),
    EighthMath: Yup.number().required("  ریاضی هشتم را وارد کنید"),
    NinthMath: Yup.number().required("  ریاضی نهم را وارد کنید"),
    SeventhScience: Yup.number().required("  علوم هفتم را وارد کنید"),
    EighthScience: Yup.number().required("  علوم هشتم را وارد کنید"),
    NinthScience: Yup.number().required("  علوم نهم را وارد کنید"),
    SeventhDiscipline: Yup.number().required("  انضباط هفتم را وارد کنید"),
    EighthDiscipline: Yup.number().required("  انضباط هشتم را وارد کنید"),
    NinthDiscipline: Yup.number().required("  انضباط نهم را وارد کنید"),
  });

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={async (values,actions) => {
        toast.success("ثبت نام با موفقیت انجام شد");
        actions.resetForm();
        console.log(values)
      }}
      initialValues={{
        // ...educational.map(({name}) => ({ [name]: "" })),
        // ...personal.map(({name}) => ({ [name]: "" })),
        name: "",
        family: "",
        nameDada: "",
        phoneNumber: "",
        Phone: "",
        cod: "",
        SeventhMath: "",
        EighthMath: "",
        NinthMath: "",
        SeventhScience: "",
        EighthScience: "",
        NinthScience: "",
        SeventhDiscipline: "",
        EighthDiscipline: "",
        NinthDiscipline: "",
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
