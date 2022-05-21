import React from "react";

function Cart({ img, children }: { children: any; img: any }) {
  return (
    <div
      data-aos="zoom-out-up"
      data-aos-delay="1000"
      data-aos-duration="1000"
      className="relative flex  h-full w-full     flex-wrap justify-center py-3"
    >
      <div
        className=" mt-2 flex h-[93%] w-[80%] flex-col flex-wrap   items-center rounded-2xl bg-slate-100/80 shadow-lg  shadow-gray-300/70 
      transition-all duration-300 hover:shadow-xl 
      sm:w-[90%] lg:w-[80%] xl:w-[70%]"
      >
        <img
          src={img}
          className=" h-[80%] w-[80%]     object-center  "
          alt="Shoes"
        />
        <div className="  ">{children}</div>
      </div>
    </div>
  );
}

export default Cart;
