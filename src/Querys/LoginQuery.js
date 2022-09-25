import * as api from '../axiosApi/methods';
import { useQuery } from 'react-query';

const LoginQuery = (data) => {
  const loginQuery = useQuery('login', api.login(data));
  return loginQuery;
};
export default LoginQuery;
