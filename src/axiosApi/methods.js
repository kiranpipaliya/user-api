import axios from 'axios';

const API = axios.create({
  baseURL: 'https://reqres.in/api/',
});
export const register = (userData) => {
  API.post('register/newUser', userData).then((res) => console.log('register', res));
};
export const login = (userData) =>
  API.post('login', userData)
    .then((res) => res.data)
    .catch((err) => {
      throw 'Please Check Your Email and Password';
    });

export const getUsers = async () => {
  const response = await API.get('users?page=2');
  const data = await response.data.data;
  console.log('getUsers', data);
  return data;
};
export const deleteUsers = (id) => API.delete(`users/595`).then((res) => console.log('deleteUsers', res));
