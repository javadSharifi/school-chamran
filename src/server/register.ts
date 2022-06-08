import { useMutation } from 'react-query';
import axios from 'libs/axios';

const register = async (data: object) => {
  const result = await axios.post('api/pre-register', data);
  return result;
};

const useRegister = () => useMutation(register);

export default useRegister;
