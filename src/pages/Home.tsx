import React from 'react';
import Cart from 'components/Cart';
import Result from './Result';
import Register from './Register';
import img from 'assets/img/school.jpg';
import customer from 'assets/img/Customer Survey-rafiki.svg';
import review from 'assets/img/Online Review-rafiki.svg';

function Home() {
  return (
    <div
      className="over flex h-screen  w-screen flex-wrap items-center justify-center overflow-x-hidden  bg-cover bg-center md:overflow-hidden "
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className=" relative w-full  rounded-2xl border-4 border-gray-400/10  bg-slate-200/95 sm:h-[95%] sm:w-[95%]">
        <div className=" mt-4 sm:mt-7 sm:pt-6 ">
          <h1
            data-aos="fade-up"
            className=" text-center text-2xl font-bold text-gray-800 md:text-3xl  lg:text-4xl"
          >
            هنرستان شهید چمران
          </h1>
        </div>
        <div className="mt-4 text-gray-200 lg:mt-7">
          <h2
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
            className="text-center text-xl font-bold text-gray-500 lg:text-2xl"
          >
            هنرستانی با بیش از پنج دهه تجربه اموزش در زمینه مهارت های فنی
          </h2>
        </div>
        <Result />
        <Register />
        <div className="grid   h-[75%] w-full   grid-rows-2 gap-3 overflow-hidden  sm:grid-cols-2 sm:grid-rows-none  ">
          <Cart img={review}>
            <label
              htmlFor="Result"
              className=" modal-button btn-grad btn   btn-info  mx-6 text-lg font-bold text-white shadow-md "
            >
              نتیجه ثبت نام
            </label>
          </Cart>

          <Cart img={customer}>
            <label
              htmlFor="Register"
              className=" modal-button btn-grad btn   btn-info  mx-6 text-lg font-bold text-white shadow-md "
            >
              پیش ثبت نام
            </label>
          </Cart>
        </div>
      </div>
    </div>
  );
}

export default Home;
