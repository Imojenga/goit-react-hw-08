import css from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Formik, Form, Field } from 'formik';

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleRegistration = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={handleRegistration}
    >
      <Form className={css.form}>
        <div className={css.infoWrp}>
          <label className={css.label} htmlFor="username">
            Name:
          </label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id="username"
          ></Field>
        </div>
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
          Register
        </button>
      </Form>
    </Formik>
  );
}
