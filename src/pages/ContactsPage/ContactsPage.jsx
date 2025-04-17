import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../../redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import css from './ContactsPage.module.css';
import { selectUser } from '../../redux/auth/selectors';
import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.wrp}>
      <h1 className={css.title}>{user.name}'s contacts</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <p className={css.loader}>Loading contacts...</p>}
      {error && <p className={css.loader}>Smth went wrong, plz reload!</p>}
      {contacts.length > 0 && <ContactList />}
    </div>
  );
}
