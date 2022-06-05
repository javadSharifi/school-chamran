import { useMutation } from 'react-query';
import axios from 'libs/axios';
import cookie from './cooke';

const register = async (data: object) => {
  await cookie();
  const result = await axios.post('api/pre-register', data);
  return result;
};

const useRegister = () => useMutation(register);

export default useRegister;
