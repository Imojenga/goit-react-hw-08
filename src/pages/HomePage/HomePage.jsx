import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={css.wrp}>
      <h1 className={css.title}>Welcome to Phone-tastic!</h1>
      <p className={css.text}>
        Phone-tastic is an app designed to give you vibes of an old school phone
        book.
      </p>
      <p className={css.text}>
        Here you can store and search your contacts, add new ones, or delete
        them in case someone disappoints you!
      </p>
      <p className={css.text}>Please enjoy!</p>
    </div>
  );
}
