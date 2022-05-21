import React, { useState } from "react";
import Search from "./Search";
import IBoy from "assets/img/boy.png";
import Answer from "./Answer";

function Result() {

  type result = {
    condition:string,
    name: string;
  };


  const [result, setResult] = useState<result|null>()

  return (
    <>
      <input type="checkbox" id="Result" className="modal-toggle" onClick={()=>setResult(null)} />
      <label htmlFor="Result" className="modal px-3 md:px-0 cursor-pointer bg-slate-200/60 ">
      <label
      className=" relative flex  h-[22rem] w-[28rem] flex-wrap justify-center rounded-xl border-2 bg-gray-50/90 shadow-md shadow-slate-300 "
      htmlFor=""
    >
      <img
        src={IBoy}
        className="absolute  w-[130px] -translate-y-16 rounded-full    border-t-[3px] border-gray-300/70 bg-slate-100 object-cover p-2  "
        alt=""
      />
      {result ? <Answer condition={result.condition} setResult={setResult} name={result.name} /> : <Search setResult={setResult} />}
        </label>
      </label>
    </>
  );
}

export default Result;
