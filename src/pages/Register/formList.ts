import validationError from 'utils/validation';
import * as Yup from 'yup';

export const educational = [
  {
    name: 'seventhMath',
    placeholder: 'ریاضی هفتم',
    type: 'number',
  },
  {
    name: 'eighthMath',
    placeholder: 'ریاضی هشتم',
    type: 'number',
  },
  {
    name: 'ninthMath',
    placeholder: 'ریاضی نهم',
    type: 'number',
  },
  {
    name: 'seventhScience',
    placeholder: 'علوم هفتم',
    type: 'number',
  },
  {
    name: 'eighthScience',
    placeholder: 'علوم هشتم',
    type: 'number',
  },
  {
    name: 'ninthScience',
    placeholder: 'علوم نهم',
    type: 'number',
  },
  {
    name: 'seventhDiscipline',
    placeholder: 'انضباط هفتم',
    type: 'number',
  },
  {
    name: 'eighthDiscipline',
    placeholder: 'انضباط هشتم',
    type: 'number',
  },
  {
    name: 'ninthDiscipline',
    placeholder: 'انضباط نهم',
    type: 'number',
  },
];

export const personal = [
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
    name: 'phone',
    placeholder: 'شماره ثابت',
    type: 'number',
  },
  {
    name: 'address',
    placeholder: 'آدرس',
    type: 'text',
  },
];

const educationalValidations= educational.reduce((acc, curr) => {
  acc[curr.name] = Yup.number()
    .required(validationError('required'))
    .max(20, validationError('MaxEducational', 20))
    .min(10, validationError('MinEducational', 10));
  return acc;
}, {} as any);



export const validationSchema = Yup.object().shape({
  first_name: Yup.string().required(validationError('required')),
  last_name: Yup.string().required(validationError('required')),
  father_name: Yup.string().required(validationError('required')),
  mobile_number: Yup.string().required(validationError('required')).length(10, validationError('length', 11)),
  phone: Yup.string().required(validationError('required')).length(9, validationError('length', 10)),
  national_code: Yup.string().required(validationError('required')).length(10, validationError('length', 10)),
  address: Yup.string().required(validationError('required')),
  major_id: Yup.number().required(validationError('required')),

  ...educationalValidations,
});
