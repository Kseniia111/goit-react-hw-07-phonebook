import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65450adf5a0b4b04436d8580.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { name, phone });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (contactId, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/contacts/${contactId}`);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
// import { createAsyncThunk } from '@reduxjs/toolkit';

// import * as api from '../services/api';

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetch',
//   async (_, thunkAPI) => {
//     try {
//       const data = await api.getContacts();
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// const isDublicate = ({ name }, contacts) => {
//   const normalizedName = name.toLowerCase();

//   const result = contacts.find(item => {
//     return normalizedName === item.name.toLowerCase();
//   });
//   return Boolean(result);
// };

// export const addContact = createAsyncThunk(
//   'contacts/add',
//   async (data, { rejectWithValue }) => {
//     try {
//       const result = await api.addContact(data);
//       return result;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   },
//   {
//     condition: (data, { getState }) => {
//       const { contacts } = getState();
//       if (isDublicate(data, contacts.items)) {
//         alert(`${data.name} is already exist!`);
//         return false;
//       }
//     },
//   }
// );

// export const removeContact = createAsyncThunk(
//   'contact/remove',
//   async (id, { rejectWithValue }) => {
//     try {
//       await api.removeContact(id);
//       return id;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );
