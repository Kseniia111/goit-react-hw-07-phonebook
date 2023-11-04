import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts;
export const selectisLoadingContacts = state => state.contacts.isLoading;
export const selectErrorContacts = state => state.contacts.error;
export const selectFilter = state => state.filter.filterStatus;

export const selectFilterContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
