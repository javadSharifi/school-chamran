import axios from 'libs/axios';

const cookie = async () => {
  const result = await axios.get('sanctum/csrf-cookie');
  return result;
};

export default cookie;
