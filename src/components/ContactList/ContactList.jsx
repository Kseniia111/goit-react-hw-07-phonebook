import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { deleteContact } from 'redux/contactsOperations';
import { selectFilterContacts } from 'redux/Selectors';

export function ContactList() {
  const contacts = useSelector(selectFilterContacts);

  const dispatch = useDispatch();

  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li className={css.contactItem} key={contact.id}>
          {contact.name}: {contact.phone}
          <button
            className={css.button}
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

// const Items = () => {
//   const contacts = useSelector(selectContacts);

//   const filterValue = useSelector(selectFilter).toLowerCase();

//   const getVisibleContacts = () => {
//     if (!filterValue || filterValue === '') {
//       return contacts;
//     }

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filterValue)
//     );
//   };

//   const visibleContacts = getVisibleContacts();

//   const dispatch = useDispatch();
// export default Items;
