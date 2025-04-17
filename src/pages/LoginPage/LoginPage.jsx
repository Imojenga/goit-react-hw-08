import css from './LoginPage.module.css';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function LoginPage() {
  return (
    <div className={css.wrp}>
      <h1 className={css.title}>Log in to access your contacts:</h1>
      <LoginForm />
    </div>
  );
}
