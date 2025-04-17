import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import clsx from 'clsx';
import css from './Navigation.module.css';

const getNavStyles = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.nav}>
      <NavLink className={getNavStyles} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={getNavStyles} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
