import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './AuthNav.module.css';

const getNavStyles = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function AuthNav() {
  return (
    <div className={css.wrp}>
      <NavLink className={getNavStyles} to="/register">
        Register
      </NavLink>
      <NavLink className={getNavStyles} to="/login">
        Log in
      </NavLink>
    </div>
  );
}
