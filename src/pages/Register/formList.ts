import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  first_name: Yup.string().required('  نام را وارد کنید'),
  last_name: Yup.string().required('  نام خانوادگی را وارد کنید '),
  father_name: Yup.string().required('  نام پدر را وارد کنید '),
  mobile_number: Yup.number().required('  شماره تلفن را وارد کنید '),
  phone: Yup.number().required('  شماره ثابت را وارد کنید '),
  national_code: Yup.number().required('  کد ملی را وارد کنید '),
  address: Yup.string().required('  آدرس را وارد کنید '),
  major_id: Yup.number().required('  رشته تحصیلی را وارد کنید '),
  seventhMath: Yup.number().required('  ریاضی هفتم را وارد کنید'),
  eighthMath: Yup.number().required('  ریاضی هشتم را وارد کنید'),
  ninthMath: Yup.number().required('  ریاضی نهم را وارد کنید'),
  seventhScience: Yup.number().required('  علوم هفتم را وارد کنید'),
  eighthScience: Yup.number().required('  علوم هشتم را وارد کنید'),
  ninthScience: Yup.number().required('  علوم نهم را وارد کنید'),
  seventhDiscipline: Yup.number().required('  انضباط هفتم را وارد کنید'),
  eighthDiscipline: Yup.number().required('  انضباط هشتم را وارد کنید'),
  ninthDiscipline: Yup.number().required('  انضباط نهم را وارد کنید'),
});

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
