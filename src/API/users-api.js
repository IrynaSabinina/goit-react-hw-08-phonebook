import { api } from './api';

// const BASE_URL = 'https://connections-api.herokuapp.com';
// const connections = axios.create({ baseURL: BASE_URL });

export const createUserFunc = body => {
  return api.post('/users/signup', body);
};

export const loginUserFunc = async body => {
  const { data } = await api.post('/users/login', body);

  return data;
};
