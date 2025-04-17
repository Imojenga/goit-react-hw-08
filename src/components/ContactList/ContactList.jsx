import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';

export default function ContactList() {
  const filteredList = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {filteredList.map(item => {
        return (
          <li className={css.item} key={item.id}>
            <Contact contact={item} />
          </li>
        );
      })}
    </ul>
  );
}
