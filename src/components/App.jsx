import { useEffect } from 'react';
import { fetchContacts } from 'redux/contactsOperations';
import { useSelector, useDispatch } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { selectErrorContacts, selectisLoadingContacts } from 'redux/Selectors';
import { RotatingLines } from 'react-loader-spinner';
import css from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectisLoadingContacts);
  const error = useSelector(selectErrorContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && (
        <RotatingLines
          strokeColor="#e15b64"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
          ariaLabel="rotating-lines-loading"
        />
      )}
      <ContactList />
    </div>
  );
};
