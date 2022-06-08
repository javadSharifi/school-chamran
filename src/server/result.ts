import axios from '../libs/axios';
import { useMutation } from 'react-query';

const result = async (data: { national_code: string }) => {
  const result = await axios.post(`api/pre-register/result`, data);
  return result;
};

const useResult = () => useMutation(result);

export default useResult;
