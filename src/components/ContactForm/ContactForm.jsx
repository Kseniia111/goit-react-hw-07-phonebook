//import { useState } from 'react';
import React from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
//import { deleteContact } from 'redux/contactsOperations';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsOperations';
import { selectContacts } from 'redux/selectors';

const nameInputId = nanoid();
const numberInputId = nanoid();

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const nameExist = contacts.find(contact => contact.name === name);
    const numberExist = contacts.find(contact => contact.number === number);

    if (nameExist) {
      alert(`${name} is already in contacts`);
    } else if (numberExist) {
      alert(`This number ${number} is already in contacts`);
    } else {
      const contact = { name, number };
      dispatch(addContact(contact));
      form.reset();
    }
  };
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  // const contacts = useSelector(selectContacts);
  // const dispatch = useDispatch();

  // // Обробка відправлення форми.
  // const handleSubmit = event => {
  //   event.preventDefault();

  //   const isInContacts = contacts.some(
  //     contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
  //   );

  //   // Перевіряє, чи існує контакт із таким самим ім'ям у списку контактів. Якщо контакт вже існує, виводиться попередження.
  //   if (isInContacts) {
  //     alert(`${name} is already in contacts`);
  //     return;
  //   }

  //   // Виклик функції onSubmit із батьківського компонента з передачею об'єкта контакту.
  //   dispatch(addContact({ name, number }));
  //   setName('');
  //   setNumber('');
  // };

  // //Обробка зміни значень полів форми.
  // const handleChange = event => {
  //   const { name, value } = event.target;

  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;
  //     case 'number':
  //       setNumber(value);
  //       break;
  //     default:
  //       return;
  //   }
  // };

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
