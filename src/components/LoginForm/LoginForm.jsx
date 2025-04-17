import { useDispatch } from 'react-redux';
import css from './LoginForm.module.css';
import { login } from '../../redux/auth/operations';
import { Formik, Form, Field } from 'formik';

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleLogin = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={handleLogin}>
      <Form className={css.form}>
        <div className={css.infoWrp}>
          <label className={css.label} htmlFor="email">
            Email:
          </label>
          <Field
            className={css.input}
            type="email"
            name="email"
            id="email"
          ></Field>
        </div>
        <div className={css.infoWrp}>
          <label className={css.label} htmlFor="password">
            Password:
          </label>
          <Field
            className={css.input}
            type="password"
            name="password"
            id="password"
          ></Field>
        </div>
        <button className={css.submit} type="submit">
          Log in
        </button>
      </Form>
    </Formik>
  );
}
