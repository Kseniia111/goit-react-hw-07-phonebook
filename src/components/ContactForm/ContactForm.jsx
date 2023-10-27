import React from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/ContactsSlice';
import { selectContacts } from 'redux/Selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const isDuplicate = contacts.some(
      contact => contact.text.name.toLowerCase() === name.toLowerCase()
    );
    if (isDuplicate) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact({ name, number }));
      form.reset();
    }
  };

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.formLabel} htmlFor={nameInputId}>
        Name
        <input
          className={css.formInput}
          placeholder="Name"
          type="text"
          name="name"
          id={nameInputId}
          required
        />
      </label>
      <label className={css.formLabel} htmlFor={numberInputId}>
        Number
        <input
          className={css.formInput}
          placeholder="Phone number"
          type="tel"
          name="number"
          id={numberInputId}
          required
        />
      </label>
      <button className={css.btnSubmit} type="submit">
        Add contact
      </button>
    </form>
  );
};
