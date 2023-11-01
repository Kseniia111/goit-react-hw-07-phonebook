import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://653fa9a19e8bd3be29e0ff9f.mockapi.io/contact',
});

export const getContacts = async () => {
  const { data } = await instance.get('/');

  return data;
};

export const addContact = async data => {
  const { data: result } = await instance.post('/', data);

  return result;
};

export const removeContact = async id => {
  const { data: result } = await instance.delete(`/${id}`);

  return result;
};
