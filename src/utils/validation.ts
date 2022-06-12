const rules = {
  required: 'وارد کردن این فیلد الزامی است',
  min: 'حداقل تعداد کاراکتر های این فیلد :1 است',
  max: 'حداکثر تعداد کاراکتر های این فیلد :1 است',
  MaxEducational: 'حد اکثر  نمره :1 است',
  MinEducational: 'حد اقل  نمره :1 است',
  length:' تعداد کاراکتر های این فیلد :1 است',
};

function replaceArguments(str: string, ...args: any[]) {
  return args.reduce((acc, arg, index) => {
    return acc.replace(`:${index + 1}`, arg);
  }, str);
}

function validationError(key: keyof typeof rules, ...args: any[]) {
  const baseValidationText = rules[key];
  return replaceArguments(baseValidationText, ...args);
}

export default validationError;
