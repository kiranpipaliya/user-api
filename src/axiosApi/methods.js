import axios from 'axios';

const API = axios.create({
  baseURL: 'https://reqres.in/api/',
});
export const register = (userData) => {
  API.post('register/newUser', userData).then((res) => res);
};
export const login = (userData) => API.post('login', userData).then((res) => res.data);

export const getUsers = () => API.get('users?page=2').then((res) => res.data.data);
