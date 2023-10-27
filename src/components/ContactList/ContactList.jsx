import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { deleteContact } from 'redux/ContactsSlice';
import { selectContacts, selectFilter } from 'redux/Selectors';

const getVisibleTasks = (contacts, filter) => {
  const normilizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.text['name'].toLowerCase().includes(normilizedFilter)
  );
};
const Items = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const visibleTasks = getVisibleTasks(contacts, filter);
  const dispatch = useDispatch();

  return (
    <ul className={css.list}>
      {visibleTasks.length ? (
        visibleTasks.map(({ id, text }) => (
          <li className={css.contactItem} key={id}>
            <span className={css.contactName}>{text.name}:</span>
            <span className={css.contactNumber}>{text.number}</span>
            <button
              className={css.button}
              type="button"
              onClick={() => dispatch(deleteContact(id))}
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
