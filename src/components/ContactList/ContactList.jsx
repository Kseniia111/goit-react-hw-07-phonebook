import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { deleteContact } from 'redux/contactsOperations';
import { selectContacts } from 'redux/selectors';

export function ContactList() {
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  // const handleDelete = event => {
  //   dispatch(deleteContact(event.currentTarget.id));
  const handleDelete = event => {
    const deletingContactId = event.target.id;
    dispatch(deleteContact(deletingContactId));

    alert(`This contact is delited from your phonebook!`);
  };

  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li className={css.contactItem} key={contact.id}>
          <span className={css.contactName}>{contact.name}:</span>
          <span className={css.contactNumber}>{contact.phone}</span>

          <button className={css.button} type="button" onClick={handleDelete}>
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
