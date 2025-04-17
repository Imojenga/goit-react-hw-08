import css from './RegistrationPage.module.css';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

export default function RegistrationPage() {
  return (
    <div className={css.wrp}>
      <h1 className={css.title}>Register to start using the app:</h1>
      <RegistrationForm />
    </div>
  );
}
