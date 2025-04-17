import css from './Contact.module.css';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

export default function Contact({ contact: { name, number, id } }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div className={css.card}>
        <div className={css.infoWrp}>
          <FaUser className={css.icon} />
          <p className={css.text}>{name}</p>
        </div>
        <div className={css.infoWrp}>
          <FaPhoneAlt className={css.icon} />
          <p className={css.text}>{number}</p>
        </div>
      </div>
      <button className={css.delete} onClick={handleDelete}>
        Delete
      </button>
    </>
  );
}
