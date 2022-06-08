import axios from 'libs/axios';
import { useQuery } from 'react-query';

const majors = async () => {
  const result = await axios.get('api/majors');
  return result;
};

const useMajors = () =>
  useQuery('majors', majors, {
    staleTime: Infinity,
    cacheTime: Infinity,
  });

export default useMajors;
