import IBoy from 'assets/img/boy.png';
import Forms from './Forms';

function Register() {
  
  return (
    <>
      <input type="checkbox" id="Register" className="modal-toggle" />
      <label
        htmlFor="Register"
        className="px-3 cursor-pointer modal bg-slate-200/60 md:px-0 "
      >
        <label
          className=" relative   flex  h-[80%] w-[98%] flex-wrap justify-center rounded-xl border-2 bg-gray-50/90 shadow-md shadow-slate-300 md:w-[90%] lg:w-[70%] xl:w-[60%] "
          htmlFor=""
        >
          <img
            src={IBoy}
            className="absolute  w-[130px] -translate-y-[+4.5rem] rounded-full    border-t-[3px] border-gray-300/70 bg-slate-100 object-cover p-2  "
            alt=""
          />

          <Forms />
        </label>
      </label>
    </>
  );
}

export default Register;
