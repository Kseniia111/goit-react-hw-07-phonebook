//import { useState } from 'react';
import React from 'react';
//import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsOperations';
import { selectContacts } from 'redux/Selectors';

// const nameInputId = nanoid();
// const phoneInputId = nanoid();

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const phone = form.elements.phone.value;

    const nameExist = contacts.find(contact => contact.name === name);
    const phoneExist = contacts.find(contact => contact.phone === phone);

    if (nameExist) {
      alert(`${name} is already in contacts`);
    } else if (phoneExist) {
      alert(`This number ${phone} is already in contacts`);
    } else {
      const contact = { name, phone };
      dispatch(addContact(contact));
      form.reset();
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.formLabel}>
        Name
        <input
          className={css.formInput}
          placeholder="Name"
          type="text"
          name="name"
          //id={nameInputId}
          required
        />
      </label>
      <label className={css.formLabel}>
        Number
        <input
          className={css.formInput}
          placeholder="Phone number"
          type="tel"
          name="phone"
          //id={phoneInputId}
          required
        />
      </label>
      <button className={css.btnSubmit} type="submit">
        Add contact
      </button>
    </form>
  );
};
