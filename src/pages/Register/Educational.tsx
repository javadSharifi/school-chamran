import { Form } from "formik";
import InputForm from "components/InputForm";

type educational = {
  name: string;
  placeholder: string;
  type: string;
};

function Educational({
  slideTo,
  educational: nameForm,
}: {
  slideTo: any;
  educational: educational[];
}) {
  return (
    <Form className="flex  h-full   w-full  flex-col flex-wrap items-center pt-16">
      <div className=" grid h-[80%] w-[95%] grid-cols-3 gap-x-3  overflow-y-auto lg:w-[80%]">
        {nameForm.map(({ name, placeholder, type }) => (
          <InputForm
            key={name}
            name={name}
            placeholder={placeholder}
            type={type}
          />
        ))}
      </div>
      <div className=" gap-6 flex h-[14%] w-full flex-wrap justify-center md:h-[15%]">
        <input
          type="button"
          value="بازگشت"
          onClick={() => slideTo(1)}
          className=" btn-grad  prepend-slide btn-info  my-4 h-[70%] w-[40%] md:w-[12rem] 
          text-lg font-bold  text-white shadow-md"
        />


        <button
          type="submit"
          className=" btn-grad  prepend-slide btn-info  my-4 h-[70%] w-[40%] md:w-[12rem] 
          text-lg font-bold  text-white shadow-md"
        >
          ثبت
        </button>

      </div>
    </Form>
  );
}

export default Educational;
