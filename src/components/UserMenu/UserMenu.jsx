import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css.wrp}>
      <p className={css.text}>{user.name} is online</p>
      <button className={css.btn} onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
}
