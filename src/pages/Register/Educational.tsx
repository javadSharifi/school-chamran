import { Form } from 'formik';
import InputForm from 'components/InputForm';
import spinner from 'assets/img/Spinner.svg';

type educational = {
  name: string;
  placeholder: string;
  type: string;
};

function Educational({
  slideTo,
  educational: nameForm,
  isLoading,
}: {
  slideTo: any;
  isLoading: boolean;
  educational: educational[];
}) {
  return (
    <Form className="flex flex-col flex-wrap items-center w-full h-full pt-16">
      <div className=" grid h-[80%] w-[95%] grid-cols-2 md:grid-cols-3 gap-x-3  overflow-y-auto lg:w-[80%]">
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
          disabled={isLoading}
          className=" btn-grad  prepend-slide btn-info  my-4 h-[70%] w-[40%] md:w-[12rem]
          text-lg font-bold  text-white shadow-md disabled:opacity-70 "
        >
              {isLoading ? <img src ={spinner} className='w-full h-full ' alt="My Happy SVG"/> : 'ثبت'}
        </button>
      </div>
    </Form>
  );
}

export default Educational;
