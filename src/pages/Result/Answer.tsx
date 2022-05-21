import React from "react";
import IAccept from "assets/img/Accept.png";
import IWaiting from "assets/img/waiting.png";
import IFired from "assets/img/fired.png";

type Props = {
  condition:string,
  setResult: any;
  name: string;
};

function Answer({ setResult,name,condition }: Props) {

  const img:any=condition==='Accept'?IAccept:condition==='Waiting'?IWaiting:condition==='Fired'?IFired:null;
  const text:any=condition==='Accept'?'تمام شده':condition==='Waiting'?'در انتظار تایید':condition==='Fired'?'رد شده':null;
  
  return (
    <div className="mt-[4.5rem] flex w-full flex-col  flex-wrap items-center gap-2 text-xl font-bold  ">
      <div>
        <h1>{name}</h1>
      </div>
      <div className="   h-[8rem] w-[9rem]">
        <img className="h-full w-full " src={img} alt="" />
      </div>
      <div className="text-xl  text-green-500">
        <h1> {text}</h1>
      </div>
      <div className="mt-3">
        <label
          htmlFor="Result"
          onClick={() => setResult(null)}
          className="   btn-grad  btn-info w-[10rem] py-2 px-11 text-lg  font-bold text-white  shadow-md"
        >
          بازگشت
        </label>
      </div>
    </div>
  );
}

export default Answer;
