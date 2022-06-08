import axios from 'libs/axios';
import { useQuery } from 'react-query';
import cookie from './cooke';

const majors = async () => {
  await cookie();
  const result = await axios.get('api/majors');
  return result;
};

const useMajors = () => useQuery('majors', majors);

export default useMajors;
