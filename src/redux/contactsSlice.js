import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';

const contactsInitialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;

// const initialState = {
//   items: [],
//   loading: false,
//   error: null,
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   extraReducers: {
//     [fetchContacts.pending]: store => {
//       store.loading = true;
//       store.error = null;
//     },
//     [fetchContacts.fulfilled]: (store, { payload }) => {
//       store.loading = false;
//       store.items = payload;
//     },
//     [fetchContacts.rejected]: (store, { payload }) => {
//       store.loading = false;
//       store.error = payload;
//     },
//     [addContact.pending]: store => {
//       store.loading = true;
//       store.error = null;
//     },
//     [addContact.fulfilled]: (store, { payload }) => {
//       store.loading = false;
//       store.items.push(payload);
//     },
//     [addContact.rejected]: (store, { payload }) => {
//       store.loading = false;
//       store.error = payload;
//     },
//     [deleteContact.pending]: store => {
//       store.loading = true;
//       store.error = null;
//     },
//     [deleteContact.fulfilled]: (store, { payload }) => {
//       store.loading = false;
//       store.items = store.items.filter(item => item.id !== payload);
//     },
//     [deleteContact.rejected]: (store, { payload }) => {
//       store.loading = false;
//       store.error = payload;
//     },
//   },
// });

// export const contactsReducer = contactsSlice.reducer;
