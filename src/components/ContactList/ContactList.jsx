import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { removeContact } from 'redux/contactsOperations';
import { selectContacts, selectFilter } from 'redux/selectors';

const Items = () => {
  const contacts = useSelector(selectContacts);

  const filterValue = useSelector(selectFilter).toLowerCase();

  const getVisibleContacts = () => {
    if (!filterValue || filterValue === '') {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  };

  const visibleContacts = getVisibleContacts();

  const dispatch = useDispatch();

  return (
    <ul className={css.list}>
      {visibleContacts.length ? (
        visibleContacts.map(({ id, text }) => (
          <li className={css.contactItem} key={id}>
            <span className={css.contactName}>{text.name}:</span>
            <span className={css.contactNumber}>{text.number}</span>
            <button
              className={css.button}
              type="button"
              onClick={() => dispatch(removeContact(id))}
            >
              Delete
            </button>
          </li>
        ))
      ) : (
        <h3>There are no contacts in your book</h3>
      )}
    </ul>
  );
};

export default Items;
